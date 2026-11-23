// ==========================================================================
// DISHCOVERY - WEEKLY MEAL PLANNER
// Pakistani & Italian Home Cooking (100% English Language)
// Core Application State & UI Controller
// ==========================================================================

const DAYS_OF_WEEK = [
  { id: "mon", name: "Monday", shortName: "Mon" },
  { id: "tue", name: "Tuesday", shortName: "Tue" },
  { id: "wed", name: "Wednesday", shortName: "Wed" },
  { id: "thu", name: "Thursday", shortName: "Thu" },
  { id: "fri", name: "Friday", shortName: "Fri" },
  { id: "sat", name: "Saturday", shortName: "Sat" },
  { id: "sun", name: "Sunday", shortName: "Sun" }
];

const MEAL_SLOTS = [
  { id: "breakfast", name: "Breakfast", icon: "🌅", time: "Morning (8:00 AM)" },
  { id: "lunch", name: "Lunch", icon: "☀️", time: "Afternoon (1:00 PM)" },
  { id: "dinner", name: "Dinner", icon: "🌙", time: "Evening (8:00 PM)" }
];

// App Global State
const state = {
  inventory: new Set(),
  cuisinePreference: "all", // 'all' | 'pakistani' | 'italian'
  activeTab: "plan", // 'plan' | 'inventory' | 'recipes'
  weeklyPlan: null, // array of 7 day objects
  
  // Inventory UI state
  ingredientSearch: "",
  selectedCategory: "all",
  
  // Recipe Catalog UI state
  recipeFilterMeal: "all", // 'all' | 'breakfast' | 'lunch' | 'dinner'
  recipeFilterCookable: "eligible", // 'eligible' | 'all'
  
  // Modal states
  activeRecipeModalId: null,
  swapTarget: null // { dayIdx, slotId }
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initCategoryFilters();
  renderAll();

  // If no weekly plan exists yet, generate one right away from current inventory
  if (!state.weeklyPlan || !state.weeklyPlan.length) {
    generateWeeklyPlan(false);
  }

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Load state from localStorage or default to Pakistani & Italian preset
function loadSavedState() {
  try {
    const savedInv = localStorage.getItem("meal_planner_inventory_v2");
    if (savedInv) {
      const arr = JSON.parse(savedInv);
      state.inventory = new Set(arr);
    } else {
      // Default initial preset: Pakistani & Italian Kitchen Essentials
      state.inventory = new Set(PANTRY_PRESETS.pakistani_and_italian.ingredients);
    }

    const savedCuisine = localStorage.getItem("meal_planner_cuisine_v2");
    if (savedCuisine && ["all", "pakistani", "italian"].includes(savedCuisine)) {
      state.cuisinePreference = savedCuisine;
    }

    const savedPlan = localStorage.getItem("meal_planner_weekly_plan_v2");
    if (savedPlan) {
      state.weeklyPlan = JSON.parse(savedPlan);
    }
  } catch (err) {
    console.warn("Could not load localStorage state:", err);
    state.inventory = new Set(PANTRY_PRESETS.pakistani_and_italian.ingredients);
  }
}

function saveState() {
  try {
    localStorage.setItem("meal_planner_inventory_v2", JSON.stringify(Array.from(state.inventory)));
    localStorage.setItem("meal_planner_cuisine_v2", state.cuisinePreference);
    if (state.weeklyPlan) {
      localStorage.setItem("meal_planner_weekly_plan_v2", JSON.stringify(state.weeklyPlan));
    }
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }
}

// ==========================================================================
// STRICT INGREDIENT MATCHING LOGIC
// "if we don't have ingredients, don't suggest a recipe"
// ==========================================================================

/**
 * Returns true ONLY if 100% of the recipe's required ingredients are present in user's inventory.
 * If even ONE required ingredient is missing, returns false.
 */
function isRecipeEligible(recipe, inventory = state.inventory, cuisine = state.cuisinePreference) {
  // 1. Cuisine restriction
  if (cuisine !== "all" && recipe.cuisine !== cuisine) {
    return false;
  }

  // 2. Strict required ingredients check
  if (!recipe.requiredIngredients || recipe.requiredIngredients.length === 0) {
    return true;
  }

  for (const ingId of recipe.requiredIngredients) {
    if (!inventory.has(ingId)) {
      return false; // Disqualified! Missing required ingredient.
    }
  }

  return true;
}

/**
 * Get list of missing required ingredients for a recipe.
 */
function getMissingRequiredIngredients(recipe, inventory = state.inventory) {
  if (!recipe.requiredIngredients) return [];
  return recipe.requiredIngredients.filter(id => !inventory.has(id));
}

/**
 * Get all recipes currently eligible for cooking.
 */
function getEligibleRecipes(cuisine = state.cuisinePreference) {
  return RECIPES_DATABASE.filter(recipe => isRecipeEligible(recipe, state.inventory, cuisine));
}

// ==========================================================================
// 7-DAY MEAL PLAN GENERATOR (21 MEALS)
// Fills Monday to Sunday (Breakfast, Lunch, Dinner) strictly with available ingredients.
// ==========================================================================

function generateWeeklyPlan(showFeedback = true) {
  const eligibleAll = getEligibleRecipes(state.cuisinePreference);
  const eligibleBreakfasts = eligibleAll.filter(r => r.mealType.includes("breakfast"));
  const eligibleLunches = eligibleAll.filter(r => r.mealType.includes("lunch"));
  const eligibleDinners = eligibleAll.filter(r => r.mealType.includes("dinner"));

  // If there are zero eligible recipes at all
  if (eligibleAll.length === 0) {
    renderPlanEmptyState("no_ingredients");
    if (showFeedback) {
      alert("No recipes match your current kitchen ingredients. Please select at least a few staples in the Ingredients tab!");
    }
    return;
  }

  // Helper to safely pick varied recipes for a meal slot across 7 days
  function pickVariedSlotList(eligibleList, count = 7) {
    if (!eligibleList || eligibleList.length === 0) return [];
    
    // Shuffle copy of eligible recipes
    const shuffled = [...eligibleList].sort(() => 0.5 - Math.random());
    const result = [];
    
    let lastPickedId = null;
    for (let day = 0; day < count; day++) {
      // Find candidate different from yesterday's recipe if list has > 1 item
      let candidate = shuffled.find(r => r.id !== lastPickedId);
      if (!candidate) {
        candidate = shuffled[0];
      }
      result.push(candidate);
      lastPickedId = candidate.id;

      // Rotate pool for balance
      shuffled.push(shuffled.shift());
    }
    return result;
  }

  // Fallbacks: if lunch or dinner pool is empty, use any eligible main dish
  const mainDishPool = [...new Set([...eligibleLunches, ...eligibleDinners])];
  const breakfastPool = eligibleBreakfasts.length > 0 ? eligibleBreakfasts : eligibleAll;
  const lunchPool = eligibleLunches.length > 0 ? eligibleLunches : (mainDishPool.length > 0 ? mainDishPool : eligibleAll);
  const dinnerPool = eligibleDinners.length > 0 ? eligibleDinners : (mainDishPool.length > 0 ? mainDishPool : eligibleAll);

  const breakfasts = pickVariedSlotList(breakfastPool, 7);
  const lunches = pickVariedSlotList(lunchPool, 7);
  const dinners = pickVariedSlotList(dinnerPool, 7);

  // Avoid same dish for Lunch and Dinner on the same day if alternative is available
  for (let i = 0; i < 7; i++) {
    if (lunches[i] && dinners[i] && lunches[i].id === dinners[i].id && dinnerPool.length > 1) {
      const alt = dinnerPool.find(r => r.id !== lunches[i].id);
      if (alt) dinners[i] = alt;
    }
  }

  // Build the 7-day plan structure
  state.weeklyPlan = DAYS_OF_WEEK.map((day, idx) => ({
    dayId: day.id,
    dayName: day.name,
    shortName: day.shortName,
    meals: {
      breakfast: breakfasts[idx] ? breakfasts[idx].id : null,
      lunch: lunches[idx] ? lunches[idx].id : null,
      dinner: dinners[idx] ? dinners[idx].id : null
    }
  }));

  saveState();
  renderWeeklyPlan();
  updateTopCounters();

  if (showFeedback) {
    const planBanner = document.getElementById("planEligibilityAlert");
    if (planBanner) {
      planBanner.classList.remove("hidden");
      planBanner.innerHTML = `
        <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span>🎉</span>
            <span><strong>All 21 meals generated!</strong> 100% prepared using ingredients currently available in your home.</span>
          </div>
          <button onclick="this.parentElement.remove()" class="text-emerald-700 hover:text-emerald-900 font-bold ml-2">✕</button>
        </div>
      `;
      setTimeout(() => {
        if (planBanner) planBanner.classList.add("hidden");
      }, 5000);
    }
  }
}

// ==========================================================================
// RENDER VIEWS & UI
// ==========================================================================

function renderAll() {
  updateCuisineButtonUI();
  updateTopCounters();
  renderWeeklyPlan();
  renderIngredientsInventory();
  renderRecipeCatalog();
}

// Update active states for cuisine selector buttons
function updateCuisineButtonUI() {
  const current = state.cuisinePreference;
  const desktopBtns = {
    all: document.getElementById("btnCuisineAll"),
    pakistani: document.getElementById("btnCuisinePakistani"),
    italian: document.getElementById("btnCuisineItalian")
  };
  const mobileBtns = {
    all: document.getElementById("mBtnCuisineAll"),
    pakistani: document.getElementById("mBtnCuisinePakistani"),
    italian: document.getElementById("mBtnCuisineItalian")
  };

  ["all", "pakistani", "italian"].forEach(type => {
    const isAct = type === current;
    if (desktopBtns[type]) {
      desktopBtns[type].className = isAct
        ? "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white text-emerald-800 shadow-sm border border-emerald-200"
        : "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-gray-600 hover:text-gray-900";
    }
    if (mobileBtns[type]) {
      mobileBtns[type].className = isAct
        ? "px-2 py-1 rounded-md text-[11px] font-semibold bg-white text-emerald-800 shadow-xs border border-emerald-200"
        : "px-2 py-1 rounded-md text-[11px] font-semibold text-gray-600";
    }
  });
}

function setCuisinePreference(pref) {
  if (state.cuisinePreference === pref) return;
  state.cuisinePreference = pref;
  saveState();
  updateCuisineButtonUI();
  updateTopCounters();
  generateWeeklyPlan(false);
  renderRecipeCatalog();
}

function updateTopCounters() {
  const eligibleRecipes = getEligibleRecipes();
  const pantryCount = state.inventory.size;

  const navPantry = document.getElementById("navPantryCount");
  if (navPantry) navPantry.innerText = pantryCount;

  const tabInvBadge = document.getElementById("tabInventoryBadge");
  if (tabInvBadge) tabInvBadge.innerText = pantryCount;

  const tabRecBadge = document.getElementById("tabRecipesBadge");
  if (tabRecBadge) tabRecBadge.innerText = eligibleRecipes.length;

  const floatBtn = document.getElementById("btnFloatingPlanText");
  if (floatBtn) {
    floatBtn.innerText = `Ready! Generate 7-Day Plan (${eligibleRecipes.length} Recipes)`;
  }
}

// ==========================================================================
// RENDER 7-DAY MEAL PLAN (21 MEALS: MON-SUN)
// ==========================================================================

function renderWeeklyPlan() {
  const container = document.getElementById("planDaysContainer");
  if (!container) return;

  if (!state.weeklyPlan || state.weeklyPlan.length === 0) {
    renderPlanEmptyState("no_plan");
    return;
  }

  const recipesMap = RECIPES_DATABASE.reduce((acc, r) => {
    acc[r.id] = r;
    return acc;
  }, {});

  let html = "";

  state.weeklyPlan.forEach((dayPlan, dayIdx) => {
    html += `
      <div class="bg-white rounded-2xl border border-warm-border shadow-xs overflow-hidden flex flex-col justify-between hover:border-warm-borderDark transition-all">
        <!-- Day Card Header -->
        <div class="bg-gradient-to-r from-emerald-500/10 to-amber-500/10 px-3.5 py-2.5 border-b border-warm-border flex items-center justify-between">
          <div>
            <h3 class="font-extrabold text-sm text-gray-900 leading-tight">
              ${dayPlan.dayName}
            </h3>
            <span class="text-[10px] font-semibold text-emerald-800">
              3 Meals Scheduled
            </span>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-gray-700 border border-warm-border">
            Day ${dayIdx + 1}
          </span>
        </div>

        <!-- 3 Meal Slots: Breakfast, Lunch, Dinner -->
        <div class="p-2.5 space-y-2 flex-1 flex flex-col justify-between">
    `;

    MEAL_SLOTS.forEach(slot => {
      const recipeId = dayPlan.meals[slot.id];
      const recipe = recipesMap[recipeId];

      if (recipe) {
        const isPakistani = recipe.cuisine === "pakistani";
        const cuisineBadgeClass = isPakistani ? "badge-pakistani" : "badge-italian";
        const cuisineLabel = isPakistani ? "🇵🇰 Pakistani" : "🇮🇹 Italian";
        const isStillEligible = isRecipeEligible(recipe);

        html += `
          <div class="p-2.5 rounded-xl bg-warm-ivory border ${isStillEligible ? 'border-warm-border' : 'border-red-200 bg-red-50/50'} relative group hover:bg-white transition-all">
            <div class="flex items-center justify-between text-[11px] text-gray-500 mb-1">
              <span class="font-bold flex items-center gap-1 text-gray-700">
                <span>${slot.icon}</span> ${slot.name}
              </span>
              <span class="text-[9px] px-2 py-0.5 rounded-md font-bold ${cuisineBadgeClass}">
                ${cuisineLabel}
              </span>
            </div>

            <!-- Dish Title & Quick Recipe Modal Trigger -->
            <button onclick="openRecipeModal('${recipe.id}')" class="text-left w-full group/title">
              <h4 class="text-xs font-bold text-gray-900 group-hover/title:text-emerald-700 line-clamp-2 leading-snug transition-colors">
                ${recipe.title}
              </h4>
              <p class="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                ${recipe.subtitle}
              </p>
            </button>

            <!-- Prep time and Actions (Swap / Recipe) -->
            <div class="mt-2 pt-1.5 border-t border-warm-border/60 flex items-center justify-between text-[10px]">
              <span class="text-gray-500 flex items-center gap-0.5 font-medium">
                ⏱️ ${recipe.prepTime}
              </span>
              <div class="flex items-center gap-1 no-print">
                <button onclick="openRecipeModal('${recipe.id}')" title="View step-by-step cooking method" class="px-2 py-0.5 rounded bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 font-semibold border border-warm-border transition-colors">
                  Recipe
                </button>
                <button onclick="openSwapModal(${dayIdx}, '${slot.id}')" title="Swap with another available dish" class="px-2 py-0.5 rounded bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-800 font-semibold border border-warm-border transition-colors">
                  🔄 Swap
                </button>
              </div>
            </div>

            ${!isStillEligible ? `
              <div class="mt-1 text-[9px] text-red-600 font-semibold">
                ⚠️ Ingredients recently removed from your kitchen!
              </div>
            ` : ''}
          </div>
        `;
      } else {
        // Slot has no assigned recipe
        html += `
          <div class="p-2 rounded-xl bg-warm-ivory border border-dashed border-warm-border text-center">
            <span class="text-[10px] text-gray-400 block">${slot.icon} ${slot.name}</span>
            <button onclick="openSwapModal(${dayIdx}, '${slot.id}')" class="mt-1 text-[11px] font-bold text-emerald-700 hover:underline">
              + Select Dish
            </button>
          </div>
        `;
      }
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderPlanEmptyState(reason) {
  const container = document.getElementById("planDaysContainer");
  if (!container) return;

  if (reason === "no_ingredients") {
    container.innerHTML = `
      <div class="col-span-full bg-white p-8 rounded-3xl border border-warm-border text-center max-w-xl mx-auto my-6 shadow-sm">
        <div class="w-16 h-16 rounded-full bg-amber-100 text-amber-600 text-3xl flex items-center justify-center mx-auto mb-3">
          🥣
        </div>
        <h3 class="text-lg font-bold text-gray-900">Your Kitchen Inventory is Empty</h3>
        <p class="text-xs sm:text-sm text-gray-600 mt-1">
          Our application guarantees that we <strong>never suggest recipes with missing ingredients</strong>. Please select the items you have at home to generate your 21-meal plan!
        </p>
        <div class="mt-5 flex flex-wrap justify-center gap-3">
          <button onclick="applyPreset('pakistani_and_italian'); generateWeeklyPlan(true);" class="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md">
            Use Standard Kitchen Staples
          </button>
          <button onclick="switchTab('inventory')" class="px-4 py-2.5 rounded-xl bg-warm-ivory hover:bg-warm-border text-gray-700 font-semibold text-xs border border-warm-border">
            Open Ingredients Checklist
          </button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="col-span-full bg-white p-8 rounded-3xl border border-warm-border text-center max-w-xl mx-auto my-6 shadow-sm">
        <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 text-3xl flex items-center justify-center mx-auto mb-3">
          📅
        </div>
        <h3 class="text-lg font-bold text-gray-900">No Weekly Plan Generated Yet</h3>
        <p class="text-xs sm:text-sm text-gray-600 mt-1">
          Generate an effortless 7-day meal plan (21 meals) tailored to your available ingredients with a single tap.
        </p>
        <button onclick="generateWeeklyPlan(true)" class="mt-5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md">
          ✨ Generate 7-Day Plan
        </button>
      </div>
    `;
  }
}

// ==========================================================================
// RENDER INGREDIENT INVENTORY & CATEGORIES
// ==========================================================================

function initCategoryFilters() {
  const container = document.getElementById("ingredientCategoryFilters");
  if (!container) return;

  const categories = [
    { id: "all", name: "All Items", icon: "✨" },
    ...Object.values(INGREDIENT_CATEGORIES)
  ];

  let html = "";
  categories.forEach(cat => {
    const isAct = cat.id === state.selectedCategory;
    html += `
      <button onclick="filterCategory('${cat.id}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
        isAct
          ? 'bg-emerald-700 text-white shadow-xs'
          : 'bg-warm-ivory hover:bg-warm-border text-gray-700 border border-warm-border'
      }">
        <span>${cat.icon}</span> ${cat.name}
      </button>
    `;
  });
  container.innerHTML = html;
}

function filterCategory(catId) {
  state.selectedCategory = catId;
  initCategoryFilters();
  renderIngredientsInventory();
}

function handleIngredientSearch(query) {
  state.ingredientSearch = (query || "").trim().toLowerCase();
  renderIngredientsInventory();
}

function renderIngredientsInventory() {
  const container = document.getElementById("ingredientsGroupContainer");
  if (!container) return;

  const search = state.ingredientSearch;
  const catFilter = state.selectedCategory;

  let html = "";

  Object.values(INGREDIENT_CATEGORIES).forEach(category => {
    // Check if category matches filter
    if (catFilter !== "all" && catFilter !== category.id) {
      return;
    }

    // Filter ingredients in this category
    const items = INGREDIENTS_LIST.filter(ing => {
      if (ing.category !== category.id) return false;
      if (!search) return true;
      return ing.name.toLowerCase().includes(search);
    });

    if (items.length === 0) return;

    // Count selected in category
    const selectedInCategory = items.filter(ing => state.inventory.has(ing.id)).length;

    html += `
      <div class="bg-white p-4 sm:p-5 rounded-2xl border border-warm-border shadow-xs">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-warm-border">
          <div class="flex items-center gap-2">
            <span class="text-xl">${category.icon}</span>
            <h3 class="font-bold text-sm sm:text-base text-gray-900 leading-none">
              ${category.name}
            </h3>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-gray-500">
              ${selectedInCategory}/${items.length} selected
            </span>
            <button onclick="toggleCategoryAll('${category.id}', ${selectedInCategory !== items.length})" class="text-[11px] font-bold text-emerald-700 hover:text-emerald-800">
              ${selectedInCategory === items.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        </div>

        <!-- Chips Grid -->
        <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5">
    `;

    items.forEach(ing => {
      const isChecked = state.inventory.has(ing.id);
      html += `
        <button onclick="toggleIngredient('${ing.id}')" class="pill-chip text-left p-2.5 rounded-xl border flex items-center gap-2 transition-all select-none ${
          isChecked
            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-500/20'
            : 'bg-warm-ivory hover:bg-white border-warm-border text-gray-700'
        }">
          <span class="text-lg shrink-0">${ing.icon}</span>
          <div class="min-w-0 flex-1">
            <span class="block text-xs leading-tight font-bold text-gray-900">
              ${ing.name}
            </span>
          </div>
          <span class="shrink-0 w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
            isChecked
              ? 'bg-emerald-700 text-white border-emerald-700'
              : 'border-gray-300 bg-white text-transparent'
          }">
            ✓
          </span>
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  if (html === "") {
    html = `
      <div class="bg-white p-8 rounded-2xl border border-warm-border text-center text-gray-500">
        No ingredients found matching "<strong>${search}</strong>".
      </div>
    `;
  }

  container.innerHTML = html;
}

function toggleIngredient(id) {
  if (state.inventory.has(id)) {
    state.inventory.delete(id);
  } else {
    state.inventory.add(id);
  }
  saveState();
  updateTopCounters();
  renderIngredientsInventory();
  renderWeeklyPlan(); // Live re-check warnings
  renderRecipeCatalog();
}

function toggleCategoryAll(categoryId, selectState) {
  const items = INGREDIENTS_LIST.filter(ing => ing.category === categoryId);
  items.forEach(ing => {
    if (selectState) {
      state.inventory.add(ing.id);
    } else {
      state.inventory.delete(ing.id);
    }
  });
  saveState();
  updateTopCounters();
  renderIngredientsInventory();
  renderWeeklyPlan();
  renderRecipeCatalog();
}

// Preset application
function applyPreset(presetKey) {
  const preset = PANTRY_PRESETS[presetKey];
  if (!preset) return;

  state.inventory = new Set(preset.ingredients);
  saveState();
  updateTopCounters();
  renderIngredientsInventory();
  generateWeeklyPlan(false);
  renderRecipeCatalog();

  const alertContainer = document.getElementById("planEligibilityAlert");
  if (alertContainer) {
    alertContainer.classList.remove("hidden");
    alertContainer.innerHTML = `
      <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm flex items-center justify-between">
        <span>⚡ Applied preset: <strong>${preset.name}</strong> (${preset.ingredients.length} ingredients selected).</span>
        <button onclick="this.parentElement.remove()" class="text-amber-800 hover:text-amber-950 font-bold ml-2">✕</button>
      </div>
    `;
  }
}

function selectAllIngredients() {
  state.inventory = new Set(INGREDIENTS_LIST.map(i => i.id));
  saveState();
  updateTopCounters();
  renderIngredientsInventory();
  renderWeeklyPlan();
  renderRecipeCatalog();
}

function clearAllIngredients() {
  state.inventory.clear();
  saveState();
  updateTopCounters();
  renderIngredientsInventory();
  renderWeeklyPlan();
  renderRecipeCatalog();
}

// ==========================================================================
// RENDER RECIPE CATALOG (BROWSE RECIPES & COOKABILITY)
// ==========================================================================

function setRecipeMealFilter(filter) {
  state.recipeFilterMeal = filter;
  ["all", "breakfast", "lunch", "dinner"].forEach(f => {
    const btn = document.getElementById(`btnFilterMeal${f.charAt(0).toUpperCase() + f.slice(1)}`);
    if (btn) {
      btn.className = f === filter
        ? "px-2.5 py-1.5 rounded-lg font-semibold bg-white text-emerald-800 shadow-xs border border-emerald-200"
        : "px-2.5 py-1.5 rounded-lg font-semibold text-gray-600 hover:text-gray-900";
    }
  });
  renderRecipeCatalog();
}

function setRecipeCookableFilter(filter) {
  state.recipeFilterCookable = filter;
  const btnEligible = document.getElementById("btnFilterCookableOnly");
  const btnAll = document.getElementById("btnFilterCookableAll");
  if (btnEligible && btnAll) {
    if (filter === "eligible") {
      btnEligible.className = "px-2.5 py-1.5 rounded-lg font-semibold bg-white text-emerald-800 shadow-xs border border-emerald-200";
      btnAll.className = "px-2.5 py-1.5 rounded-lg font-semibold text-gray-600 hover:text-gray-900";
    } else {
      btnEligible.className = "px-2.5 py-1.5 rounded-lg font-semibold text-gray-600 hover:text-gray-900";
      btnAll.className = "px-2.5 py-1.5 rounded-lg font-semibold bg-white text-emerald-800 shadow-xs border border-emerald-200";
    }
  }
  renderRecipeCatalog();
}

function renderRecipeCatalog() {
  const container = document.getElementById("recipeCatalogGrid");
  if (!container) return;

  const mealFilter = state.recipeFilterMeal;
  const cookableFilter = state.recipeFilterCookable;

  let recipes = RECIPES_DATABASE.filter(r => {
    // Cuisine check
    if (state.cuisinePreference !== "all" && r.cuisine !== state.cuisinePreference) {
      return false;
    }
    // Meal slot check
    if (mealFilter !== "all" && !r.mealType.includes(mealFilter)) {
      return false;
    }
    // Cookability check
    const eligible = isRecipeEligible(r);
    if (cookableFilter === "eligible" && !eligible) {
      return false;
    }
    return true;
  });

  if (recipes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white p-8 rounded-2xl border border-warm-border text-center text-gray-500">
        <span class="text-3xl block mb-2">🍽️</span>
        <h4 class="font-bold text-gray-800 text-sm">No Recipes Found</h4>
        <p class="text-xs text-gray-500 mt-1">Try switching to 'All Recipes' or checking more kitchen staples.</p>
      </div>
    `;
    return;
  }

  let html = "";
  recipes.forEach(recipe => {
    const eligible = isRecipeEligible(recipe);
    const missing = getMissingRequiredIngredients(recipe);
    const isPakistani = recipe.cuisine === "pakistani";

    html += `
      <div class="bg-white rounded-2xl border ${
        eligible ? 'border-warm-border' : 'border-red-200 opacity-90'
      } p-4 flex flex-col justify-between recipe-card-shadow cursor-pointer transition-all" onclick="openRecipeModal('${recipe.id}')">
        <div>
          <!-- Header Badges -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs px-2.5 py-0.5 rounded-full font-bold ${isPakistani ? 'badge-pakistani' : 'badge-italian'}">
              ${isPakistani ? '🇵🇰 Pakistani' : '🇮🇹 Italian'}
            </span>
            <span class="text-[11px] font-semibold text-gray-500">
              ⏱️ ${recipe.cookTime}
            </span>
          </div>

          <h3 class="font-bold text-gray-900 text-sm sm:text-base leading-snug">
            ${recipe.title}
          </h3>
          <p class="text-xs text-emerald-800 font-semibold mt-0.5">
            ${recipe.subtitle}
          </p>
          <p class="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed">
            ${recipe.description}
          </p>
        </div>

        <!-- Cookability status pill -->
        <div class="mt-4 pt-3 border-t border-warm-border/60">
          ${eligible ? `
            <div class="flex items-center justify-between text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1.5 rounded-xl border border-emerald-200">
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Ready to Cook Now
              </span>
              <span class="text-[10px] text-emerald-700">100% ingredients at home</span>
            </div>
          ` : `
            <div class="text-[11px] text-red-800 bg-red-50 p-2 rounded-xl border border-red-200">
              <span class="font-bold block mb-0.5">Missing ${missing.length} ingredient(s):</span>
              <span class="text-red-700">
                ${missing.map(id => (INGREDIENTS_BY_ID[id] ? INGREDIENTS_BY_ID[id].name : id)).join(", ")}
              </span>
            </div>
          `}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================================================
// TAB SWITCHING
// ==========================================================================

function switchTab(tabId) {
  state.activeTab = tabId;

  const views = {
    plan: document.getElementById("viewPlan"),
    inventory: document.getElementById("viewInventory"),
    recipes: document.getElementById("viewRecipes")
  };
  const tabBtns = {
    plan: document.getElementById("tabBtnPlan"),
    inventory: document.getElementById("tabBtnInventory"),
    recipes: document.getElementById("tabBtnRecipes")
  };

  ["plan", "inventory", "recipes"].forEach(t => {
    const isAct = t === tabId;
    if (views[t]) {
      views[t].classList.toggle("hidden", !isAct);
    }
    if (tabBtns[t]) {
      if (isAct) {
        tabBtns[t].className = "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-emerald-800 border-b-2 border-emerald-700 transition-colors";
      } else {
        tabBtns[t].className = "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-emerald-700 transition-colors border-b-2 border-transparent";
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================================================
// RECIPE DETAIL MODAL
// ==========================================================================

function openRecipeModal(recipeId) {
  const recipe = RECIPES_DATABASE.find(r => r.id === recipeId);
  if (!recipe) return;

  state.activeRecipeModalId = recipeId;

  document.getElementById("modalRecipeTitle").innerText = recipe.title;
  document.getElementById("modalRecipeSubtitle").innerText = recipe.subtitle;
  
  const isPakistani = recipe.cuisine === "pakistani";
  const badge = document.getElementById("modalCuisineBadge");
  badge.className = `text-xs px-2.5 py-0.5 rounded-full font-bold ${isPakistani ? 'badge-pakistani' : 'badge-italian'}`;
  badge.innerText = isPakistani ? "🇵🇰 Pakistani Cuisine" : "🇮🇹 Italian Cuisine";

  const slotBadge = document.getElementById("modalMealSlotBadge");
  slotBadge.innerText = recipe.mealType.map(s => s.toUpperCase()).join(" / ");

  document.getElementById("modalPrepTime").innerText = recipe.prepTime;
  document.getElementById("modalCookTime").innerText = recipe.cookTime;
  document.getElementById("modalDifficulty").innerText = recipe.difficulty;

  // Mom Tip
  const momTip = document.getElementById("modalMomTip");
  if (recipe.momTip) {
    momTip.innerText = recipe.momTip;
    document.getElementById("modalMomTipBox").classList.remove("hidden");
  } else {
    document.getElementById("modalMomTipBox").classList.add("hidden");
  }

  // Required Ingredients
  const reqContainer = document.getElementById("modalRequiredIngredients");
  let reqHtml = "";
  recipe.requiredIngredients.forEach(id => {
    const ing = INGREDIENTS_BY_ID[id];
    const isAtHome = state.inventory.has(id);
    reqHtml += `
      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold ${
        isAtHome
          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
          : 'bg-red-50 text-red-900 border border-red-200'
      }">
        <span>${isAtHome ? '✓' : '✗'}</span>
        <span>${ing ? ing.name : id}</span>
      </span>
    `;
  });
  reqContainer.innerHTML = reqHtml;

  // Optional Ingredients
  const optContainer = document.getElementById("modalOptionalIngredients");
  const optSection = document.getElementById("modalOptionalIngredientsSection");
  if (recipe.optionalIngredients && recipe.optionalIngredients.length > 0) {
    optSection.classList.remove("hidden");
    let optHtml = "";
    recipe.optionalIngredients.forEach(id => {
      const ing = INGREDIENTS_BY_ID[id];
      const isAtHome = state.inventory.has(id);
      optHtml += `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-medium ${
          isAtHome
            ? 'bg-amber-50 text-amber-800 border border-amber-200'
            : 'bg-gray-100 text-gray-500 border border-gray-200'
        }">
          <span>${ing ? ing.name : id}</span>
          <span class="text-[10px] text-gray-400">(${isAtHome ? 'at home' : 'optional'})</span>
        </span>
      `;
    });
    optContainer.innerHTML = optHtml;
  } else {
    optSection.classList.add("hidden");
  }

  // Cooking instructions
  const instructionsList = document.getElementById("modalInstructionsList");
  let instHtml = "";
  recipe.instructions.forEach((step, idx) => {
    instHtml += `
      <li class="flex items-start gap-3 p-2.5 rounded-xl bg-warm-ivory border border-warm-border/70">
        <span class="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
          ${idx + 1}
        </span>
        <p class="text-xs sm:text-sm text-gray-800 leading-relaxed">
          ${step}
        </p>
      </li>
    `;
  });
  instructionsList.innerHTML = instHtml;

  document.getElementById("recipeModal").classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeRecipeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
  state.activeRecipeModalId = null;
}

// ==========================================================================
// SWAP SINGLE MEAL MODAL
// ==========================================================================

function openSwapModal(dayIdx, slotId) {
  state.swapTarget = { dayIdx, slotId };
  const day = state.weeklyPlan[dayIdx];
  const slotName = slotId.charAt(0).toUpperCase() + slotId.slice(1);

  document.getElementById("swapModalTitle").innerText = `Swap ${day.dayName} ${slotName}`;

  // Find all eligible recipes matching this meal slot and ingredients
  const eligibleAlternatives = RECIPES_DATABASE.filter(recipe => {
    return recipe.mealType.includes(slotId) && isRecipeEligible(recipe);
  });

  const container = document.getElementById("swapOptionsContainer");
  if (eligibleAlternatives.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-gray-500 text-xs">
        No alternative recipes available with your current ingredients.
      </div>
    `;
  } else {
    let html = "";
    eligibleAlternatives.forEach(recipe => {
      const isCurrent = day.meals[slotId] === recipe.id;
      const isPakistani = recipe.cuisine === "pakistani";
      html += `
        <button onclick="confirmSwap('${recipe.id}')" class="w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
          isCurrent
            ? 'bg-emerald-50 border-emerald-400 font-bold'
            : 'bg-warm-ivory hover:bg-white border-warm-border'
        }">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs px-2 py-0.5 rounded font-bold ${isPakistani ? 'badge-pakistani' : 'badge-italian'}">
                ${isPakistani ? 'Pakistani' : 'Italian'}
              </span>
              <span class="text-xs font-bold text-gray-900">${recipe.title}</span>
            </div>
            <span class="text-[11px] text-gray-500">${recipe.subtitle} • ⏱️ ${recipe.prepTime}</span>
          </div>
          ${isCurrent ? '<span class="text-xs text-emerald-700 font-bold">Selected</span>' : '<span class="text-xs text-gray-400">Choose →</span>'}
        </button>
      `;
    });
    container.innerHTML = html;
  }

  document.getElementById("swapModal").classList.remove("hidden");
}

function confirmSwap(recipeId) {
  if (!state.swapTarget) return;
  const { dayIdx, slotId } = state.swapTarget;

  if (state.weeklyPlan && state.weeklyPlan[dayIdx]) {
    state.weeklyPlan[dayIdx].meals[slotId] = recipeId;
    saveState();
    renderWeeklyPlan();
  }
  closeSwapModal();
}

function closeSwapModal() {
  document.getElementById("swapModal").classList.add("hidden");
  state.swapTarget = null;
}

// ==========================================================================
// WHATSAPP SHARING (100% ENGLISH)
// ==========================================================================

function generateWhatsAppText() {
  if (!state.weeklyPlan || state.weeklyPlan.length === 0) return "";

  const recipesMap = RECIPES_DATABASE.reduce((acc, r) => {
    acc[r.id] = r;
    return acc;
  }, {});

  let text = `👩‍🍳 *WEEKLY 7-DAY FAMILY MEAL PLAN*\n`;
  text += `*Monday – Sunday • 21 Stress-Free Meals*\n`;
  text += `_All 21 meals use only ingredients available in our home kitchen!_\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  state.weeklyPlan.forEach(day => {
    text += `🗓️ *${day.dayName.toUpperCase()}*\n`;
    
    // Breakfast
    const b = recipesMap[day.meals.breakfast];
    text += `🌅 *Breakfast:* ${b ? b.title : 'None'}\n`;

    // Lunch
    const l = recipesMap[day.meals.lunch];
    text += `☀️ *Lunch:* ${l ? l.title : 'None'}\n`;

    // Dinner
    const d = recipesMap[day.meals.dinner];
    text += `🌙 *Dinner:* ${d ? d.title : 'None'}\n\n`;
  });

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `✨ Generated with *DishCovery* (Pakistani & Italian Meal Planner)\n`;
  text += `Zero daily meal planning stress! ❤️`;

  return text;
}

function openWhatsAppModal() {
  const text = generateWhatsAppText();
  document.getElementById("whatsappTextPreview").value = text;
  document.getElementById("whatsappModal").classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeWhatsAppModal() {
  document.getElementById("whatsappModal").classList.add("hidden");
}

function copyWhatsAppText() {
  const text = document.getElementById("whatsappTextPreview").value;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("btnCopyWhatsApp");
    btn.innerHTML = `<span>✓ Copied to Clipboard!</span>`;
    setTimeout(() => {
      btn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i><span>Copy to Clipboard</span>`;
      if (window.lucide) window.lucide.createIcons();
    }, 2500);
  });
}

function openNativeWhatsApp() {
  const text = document.getElementById("whatsappTextPreview").value;
  const encoded = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
}
