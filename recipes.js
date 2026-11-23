// ==========================================================================
// PAKISTANI & ITALIAN RECIPE & INGREDIENT DATABASE
// Strictly English Language.
// Strictly filtered: If a required ingredient is missing, the recipe will NOT be suggested.
// ==========================================================================

const INGREDIENT_CATEGORIES = {
  veggies: {
    id: "veggies",
    name: "Fresh Vegetables & Herbs",
    icon: "🥕"
  },
  grains_lentils: {
    id: "grains_lentils",
    name: "Grains, Flours, Breads & Lentils",
    icon: "🌾"
  },
  meat_dairy: {
    id: "meat_dairy",
    name: "Meat, Poultry, Eggs & Dairy",
    icon: "🍗"
  },
  italian_pantry: {
    id: "italian_pantry",
    name: "Italian Essentials & Pasta",
    icon: "🍝"
  },
  spices_basics: {
    id: "spices_basics",
    name: "Cooking Oils, Staples & Spices",
    icon: "🧂"
  }
};

const INGREDIENTS_LIST = [
  // Vegetables & Aromatics
  { id: "potato", name: "Potato (Aloo)", category: "veggies", icon: "🥔", staple: true },
  { id: "onion", name: "Onion (Pyaz)", category: "veggies", icon: "🧅", staple: true },
  { id: "tomato", name: "Tomato (Tamatar)", category: "veggies", icon: "🍅", staple: true },
  { id: "ginger", name: "Fresh Ginger (Adrak)", category: "veggies", icon: "🫚", staple: true },
  { id: "garlic", name: "Fresh Garlic (Lehsun)", category: "veggies", icon: "🧄", staple: true },
  { id: "green_chili", name: "Green Chili (Hari Mirch)", category: "veggies", icon: "🌶️", staple: true },
  { id: "coriander", name: "Fresh Coriander Leaves", category: "veggies", icon: "🌿", staple: true },
  { id: "cauliflower", name: "Cauliflower (Gobi)", category: "veggies", icon: "🥦", staple: false },
  { id: "peas", name: "Green Peas (Matar)", category: "veggies", icon: "🟢", staple: true },
  { id: "spinach", name: "Fresh Spinach (Palak)", category: "veggies", icon: "🥬", staple: false },
  { id: "okra", name: "Okra / Ladyfinger (Bhindi)", category: "veggies", icon: "🌱", staple: false },
  { id: "eggplant", name: "Eggplant / Aubergine (Baingan)", category: "veggies", icon: "🍆", staple: false },
  { id: "capsicum", name: "Bell Pepper / Capsicum (Shimla Mirch)", category: "veggies", icon: "🫑", staple: true },
  { id: "carrot", name: "Carrot (Gajar)", category: "veggies", icon: "🥕", staple: false },
  { id: "mushroom", name: "Fresh Mushroom", category: "veggies", icon: "🍄", staple: false },
  { id: "bottle_gourd", name: "Bottle Gourd (Lauki / Kaddu)", category: "veggies", icon: "🥒", staple: false },
  { id: "lemon", name: "Fresh Lemon (Nimbu)", category: "veggies", icon: "🍋", staple: true },

  // Grains, Flours & Lentils
  { id: "wheat_flour", name: "Whole Wheat Flour (Atta)", category: "grains_lentils", icon: "🌾", staple: true },
  { id: "rice", name: "Basmati Rice", category: "grains_lentils", icon: "🍚", staple: true },
  { id: "besan", name: "Gram Flour (Besan)", category: "grains_lentils", icon: "🥣", staple: true },
  { id: "suji", name: "Semolina (Suji / Rava)", category: "grains_lentils", icon: "✨", staple: true },
  { id: "poha", name: "Flattened Rice (Poha)", category: "grains_lentils", icon: "🥣", staple: false },
  { id: "bread", name: "Sliced Sandwich Bread", category: "grains_lentils", icon: "🍞", staple: true },
  { id: "toor_dal", name: "Yellow Split Lentils (Toor Daal)", category: "grains_lentils", icon: "🍲", staple: true },
  { id: "moong_dal", name: "Yellow / Green Moong Lentils", category: "grains_lentils", icon: "🍲", staple: true },
  { id: "chana_dal", name: "Split Bengal Gram Lentils (Chana Daal)", category: "grains_lentils", icon: "🍲", staple: false },
  { id: "urad_dal", name: "White Lentils (Daal Mash)", category: "grains_lentils", icon: "🍲", staple: false },
  { id: "rajma", name: "Red Kidney Beans (Lobia / Rajma)", category: "grains_lentils", icon: "🫘", staple: false },
  { id: "chana", name: "White Chickpeas (Safaid Chana)", category: "grains_lentils", icon: "🫘", staple: false },
  { id: "black_chana", name: "Brown Chickpeas (Kala Chana)", category: "grains_lentils", icon: "🫘", staple: false },
  { id: "dalia", name: "Broken Wheat (Dalia)", category: "grains_lentils", icon: "🌾", staple: false },

  // Meat, Poultry, Eggs & Dairy
  { id: "chicken", name: "Fresh Chicken (Curry Cut or Boneless)", category: "meat_dairy", icon: "🍗", staple: true },
  { id: "minced_meat", name: "Minced Meat / Qeema (Chicken or Beef)", category: "meat_dairy", icon: "🥩", staple: false },
  { id: "eggs", name: "Fresh Eggs", category: "meat_dairy", icon: "🥚", staple: true },
  { id: "paneer", name: "Cottage Cheese (Paneer)", category: "meat_dairy", icon: "🧀", staple: true },
  { id: "yogurt", name: "Plain Curd / Yogurt (Dahi)", category: "meat_dairy", icon: "🥛", staple: true },
  { id: "milk", name: "Fresh Milk", category: "meat_dairy", icon: "🥛", staple: true },
  { id: "cheese", name: "Cheese (Mozzarella / Cheddar / Parmesan)", category: "meat_dairy", icon: "🧀", staple: true },
  { id: "butter", name: "Butter or White Ghee (Makkhan)", category: "meat_dairy", icon: "🧈", staple: true },
  { id: "cream", name: "Fresh Cooking Cream / Malai", category: "meat_dairy", icon: "🍶", staple: false },

  // Italian Essentials
  { id: "pasta", name: "Pasta (Penne / Spaghetti / Macaroni)", category: "italian_pantry", icon: "🍝", staple: true },
  { id: "olive_oil", name: "Extra Virgin Olive Oil", category: "italian_pantry", icon: "🫒", staple: true },
  { id: "tomato_puree", name: "Tomato Puree / Passata", category: "italian_pantry", icon: "🥫", staple: true },
  { id: "basil", name: "Fresh or Dried Basil", category: "italian_pantry", icon: "🍃", staple: false },
  { id: "oregano", name: "Oregano / Italian Mixed Herbs", category: "italian_pantry", icon: "🌿", staple: true },
  { id: "chili_flakes", name: "Crushed Red Chili Flakes", category: "italian_pantry", icon: "🌶️", staple: true },
  { id: "black_pepper", name: "Black Pepper (Freshly Ground)", category: "italian_pantry", icon: "🧂", staple: true },

  // Cooking Staples & Masala Dabba
  { id: "cooking_oil", name: "Regular Cooking Oil / Ghee", category: "spices_basics", icon: "🫗", staple: true },
  { id: "salt", name: "Table Salt", category: "spices_basics", icon: "🧂", staple: true },
  { id: "turmeric", name: "Ground Turmeric (Haldi)", category: "spices_basics", icon: "🟡", staple: true },
  { id: "cumin", name: "Cumin Seeds (Zeera)", category: "spices_basics", icon: "🟤", staple: true },
  { id: "coriander_powder", name: "Ground Coriander Powder (Dhaniya)", category: "spices_basics", icon: "🟤", staple: true },
  { id: "red_chili_powder", name: "Red Chili Powder", category: "spices_basics", icon: "🔴", staple: true },
  { id: "garam_masala", name: "All-Spice Garam Masala", category: "spices_basics", icon: "✨", staple: true },
  { id: "mustard_seeds", name: "Mustard Seeds (Rai)", category: "spices_basics", icon: "⚫", staple: false },
  { id: "kasuri_methi", name: "Dried Fenugreek Leaves (Kasuri Methi)", category: "spices_basics", icon: "🍂", staple: false },
  { id: "peanuts", name: "Roasted Peanuts", category: "spices_basics", icon: "🥜", staple: false },
  { id: "tea_leaves", name: "Black Tea Leaves / Chai Patti", category: "spices_basics", icon: "☕", staple: true },
  { id: "sugar", name: "Granulated Sugar", category: "spices_basics", icon: "🍬", staple: true }
];

// Map for quick lookup
const INGREDIENTS_BY_ID = INGREDIENTS_LIST.reduce((acc, ing) => {
  acc[ing.id] = ing;
  return acc;
}, {});

// ==========================================================================
// CURATED RECIPES DATABASE (Pakistani & Italian ONLY)
// Every recipe has requiredIngredients. If ANY is missing, recipe will NOT be suggested!
// ==========================================================================

const RECIPES_DATABASE = [
  // ------------------------------------------------------------------------
  // PAKISTANI BREAKFASTS
  // ------------------------------------------------------------------------
  {
    id: "pakistani_halwa_puri_chana",
    title: "Pakistani Halwa Puri & Spiced Chana",
    subtitle: "Iconic Sunday breakfast: puffed puris with tangy chickpeas and sweet semolina halwa",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "15 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    description: "The classic Pakistani weekend breakfast featuring golden fried puffed puris, tender spiced chickpeas, and rich warm semolina halwa.",
    requiredIngredients: ["wheat_flour", "chana", "suji", "onion", "tomato", "cooking_oil", "sugar", "salt", "turmeric", "cumin"],
    optionalIngredients: ["butter", "coriander", "green_chili"],
    instructions: [
      "Prepare the chana: Sauté chopped onions and cumin in oil, add tomatoes, turmeric, salt, and boiled chickpeas. Simmer for 10 minutes until thick and aromatic.",
      "Prepare the halwa: Roast semolina (suji) in butter or ghee until golden brown, add warm water and sugar, and stir continuously until soft and fragrant.",
      "Knead whole wheat flour with a pinch of salt and water into a smooth dough. Roll into small thin rounds.",
      "Deep fry puris in hot oil for 10-15 seconds until they puff into golden balloons.",
      "Serve piping hot on a shared platter with the spiced chana and sweet halwa."
    ],
    momTip: "Fry puris in very hot oil; high heat guarantees they puff up immediately without soaking up excess oil!"
  },
  {
    id: "pakistani_aloo_paratha",
    title: "Crispy Spiced Potato Paratha (Aloo Paratha)",
    subtitle: "Golden spiced potato stuffed whole wheat flatbread",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "15 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Crispy, layered whole wheat flatbread stuffed with spiced, mashed potatoes, served hot with butter or fresh yogurt.",
    requiredIngredients: ["wheat_flour", "potato", "onion", "green_chili", "cooking_oil", "salt", "turmeric"],
    optionalIngredients: ["coriander", "garam_masala", "butter", "yogurt"],
    instructions: [
      "Boil and peel potatoes. Mash thoroughly with finely chopped onion, green chilies, salt, and turmeric.",
      "Knead whole wheat flour (atta) with water into a soft, pliable dough.",
      "Roll out a dough ball, place a generous spoonful of potato filling in the center, and seal the edges tightly.",
      "Gently roll it out with light pressure to avoid tearing.",
      "Cook on a medium-hot flat griddle (tawa), drizzling oil or ghee on both sides until golden brown and crispy.",
      "Serve hot with fresh yogurt (dahi) or salted butter!"
    ],
    momTip: "Boil the potatoes the previous night and chill them in the fridge; cold potatoes make rolling completely burst-free!"
  },
  {
    id: "pakistani_omelette_paratha",
    title: "Pakistani Spiced Omelette & Lachha Paratha",
    subtitle: "Classic breakfast of fluffy herbed eggs and flaky griddled flatbread",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    description: "Whisked eggs beaten with finely diced onions, green chilies, coriander, and black pepper, served alongside a flaky pan-crisped paratha.",
    requiredIngredients: ["eggs", "onion", "green_chili", "wheat_flour", "cooking_oil", "salt"],
    optionalIngredients: ["tomato", "coriander", "black_pepper"],
    instructions: [
      "Roll whole wheat dough into a thin circle, brush with oil, pleat like an accordion, roll into a spiral, and roll out for flaky layers. Cook on tawa with ghee until crispy.",
      "Crack eggs into a bowl. Add finely diced onions, green chilies, salt, and black pepper. Whisk vigorously for 1 minute.",
      "Heat a teaspoon of oil in a skillet over medium heat.",
      "Pour in the whisked egg mixture, tilting the pan so it spreads evenly into a large round.",
      "Cook for 2 minutes until bottom is golden, flip gently and cook the other side for 1 minute.",
      "Serve folded over alongside the hot flaky paratha."
    ],
    momTip: "Whisk the egg mixture vigorously with a fork right before pouring into the hot pan to trap air and make the omelette fluffy!"
  },
  {
    id: "pakistani_qeema_paratha",
    title: "Spiced Minced Meat Paratha (Qeema Paratha)",
    subtitle: "Crisp griddled flatbread stuffed with savory spiced minced chicken or beef",
    cuisine: "pakistani",
    mealType: ["breakfast", "dinner"],
    prepTime: "15 mins",
    cookTime: "15 mins",
    difficulty: "Medium",
    description: "Hearty, protein-packed breakfast flatbread stuffed with cooked seasoned minced meat, onions, and warming spices.",
    requiredIngredients: ["minced_meat", "wheat_flour", "onion", "green_chili", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "cumin"],
    optionalIngredients: ["coriander", "garam_masala", "yogurt"],
    instructions: [
      "Sauté minced meat in 1 tsp oil with ginger, garlic, finely chopped onion, turmeric, cumin, and salt until cooked dry. Let cool completely.",
      "Roll out two small whole wheat rounds.",
      "Spread the cooked minced meat filling evenly over one round, leaving a small border at the edges.",
      "Place the second round on top and press the edges firmly with a fork to seal.",
      "Cook on a medium-hot tawa, brushing with oil or ghee on both sides until crispy and deep golden brown.",
      "Serve warm with chilled mint yogurt."
    ],
    momTip: "Ensure the minced meat filling is completely dry with zero excess liquid before stuffing so the dough rolls out smoothly without tearing."
  },
  {
    id: "pakistani_khagina",
    title: "Pakistani Khagina (Spiced Onion & Tomato Scramble)",
    subtitle: "Quick comfort scrambled eggs seasoned with cumin, turmeric, and fresh chilies",
    cuisine: "pakistani",
    mealType: ["breakfast", "dinner"],
    prepTime: "5 mins",
    cookTime: "8 mins",
    difficulty: "Very Easy",
    description: "Soft, juicy scrambled eggs gently cooked with caramelized onions, tomatoes, cumin seeds, and fresh green chilies.",
    requiredIngredients: ["eggs", "onion", "tomato", "green_chili", "cumin", "turmeric", "cooking_oil", "salt"],
    optionalIngredients: ["coriander", "bread", "wheat_flour"],
    instructions: [
      "Heat oil in a frying pan. Add cumin seeds and let them sizzle for 30 seconds.",
      "Add sliced onions and green chilies. Sauté until onions are soft and light golden.",
      "Add chopped tomatoes, turmeric, and salt. Cook for 2-3 minutes until tomatoes break down into a soft sauce.",
      "Crack in the eggs directly (or pour whisked eggs) into the pan.",
      "Gently stir on medium-low heat from the edges to the center until soft, moist curds form.",
      "Turn off the heat while the eggs are still slightly glossy. Garnish with fresh coriander.",
      "Serve hot with warm roti, paratha, or toasted bread."
    ],
    momTip: "Do not over-stir continuously; gentle folding every few seconds gives large, tender egg curds that stay juicy."
  },
  {
    id: "pakistani_aloo_anda_bhujia",
    title: "Aloo Anda Bhujia with Warm Roti",
    subtitle: "Diced potatoes and scrambled eggs cooked homestyle with cumin and turmeric",
    cuisine: "pakistani",
    mealType: ["breakfast", "lunch"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    description: "Everyday Pakistani breakfast favorite of thinly sliced tender potatoes tossed with beaten eggs and mild cumin seasoning.",
    requiredIngredients: ["potato", "eggs", "onion", "cumin", "turmeric", "cooking_oil", "salt", "wheat_flour"],
    optionalIngredients: ["green_chili", "coriander", "red_chili_powder"],
    instructions: [
      "Thinly slice or dice potatoes so they cook quickly.",
      "Heat oil in a pan, add cumin seeds, and sauté sliced onions until soft.",
      "Add the sliced potatoes, turmeric, and salt. Cover with a lid and cook on low heat for 8-10 minutes until potatoes are fork-tender.",
      "Whisk eggs lightly with a pinch of salt.",
      "Pour the eggs directly over the cooked potatoes. Stir gently on medium flame until the eggs are cooked through and coat the potatoes.",
      "Roll out whole wheat dough and puff rotis on the tawa.",
      "Serve piping hot!"
    ],
    momTip: "Cutting potatoes into thin coins ensures they cook in 8 minutes on steam without needing extra water."
  },
  {
    id: "pakistani_doodh_patti_toast",
    title: "Cardamom Doodh Patti Chai & Buttered Toast",
    subtitle: "Rich, slow-simmered milk tea served with crisp buttered toast",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "3 mins",
    cookTime: "7 mins",
    difficulty: "Very Easy",
    description: "The quintessential Pakistani morning wake-up: strong black tea leaves brewed directly in simmering milk, paired with golden buttered toast.",
    requiredIngredients: ["tea_leaves", "milk", "sugar", "bread", "butter"],
    optionalIngredients: ["ginger"],
    instructions: [
      "In a small saucepan, bring milk and 1/4 cup water to a gentle boil.",
      "Add black tea leaves (chai patti) and sugar.",
      "Simmer on medium-low heat for 3-4 minutes, lifting and pouring with a ladle (fataintna) to aerate and build rich color.",
      "Strain through a tea strainer into mugs.",
      "Toast bread slices golden brown, spread generously with butter, and serve warm with the fragrant hot chai."
    ],
    momTip: "Pouring the chai from high with a ladle while simmering builds that silky, frothy dhaba-style foam on top!"
  },
  {
    id: "pakistani_suji_halwa",
    title: "Homestyle Semolina Halwa (Suji Halwa)",
    subtitle: "Fragrant semolina roasted in butter with warm sweetened milk",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Melt-in-the-mouth semolina roasted patiently in butter, then simmered with sweet warm milk into a comforting morning treat.",
    requiredIngredients: ["suji", "sugar", "butter", "milk"],
    optionalIngredients: ["peanuts"],
    instructions: [
      "Melt butter in a heavy-bottom pan over medium-low heat. Add semolina (suji).",
      "Roast stirring continuously for 8-10 minutes until aromatic and golden (do not let it burn).",
      "In a separate saucepan, warm the milk with sugar until sugar dissolves completely.",
      "Carefully pour the warm sweetened milk into the roasted semolina while stirring briskly to avoid lumps.",
      "Cook on medium heat for 2-3 minutes until the halwa thickens and easily pulls away from the sides of the pan.",
      "Serve warm."
    ],
    momTip: "Use the classic 1:1:3 ratio (1 cup semolina, 1 cup sugar/butter, 3 cups liquid) for foolproof divine halwa every time."
  },
  {
    id: "pakistani_besan_cheela",
    title: "Savory Gram Flour Crepes (Besan Chilla)",
    subtitle: "Wholesome protein-packed savory pancakes with onions and tomatoes",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    description: "Quick, protein-rich savory pancakes made from spiced gram flour batter loaded with diced onions, tomatoes, and green chilies.",
    requiredIngredients: ["besan", "onion", "tomato", "green_chili", "cooking_oil", "salt", "turmeric"],
    optionalIngredients: ["coriander", "cumin", "paneer"],
    instructions: [
      "In a bowl, whisk gram flour (besan) with water into a smooth, lump-free pouring batter.",
      "Fold in finely chopped onions, tomatoes, green chilies, salt, and turmeric.",
      "Heat a flat griddle or non-stick tawa and lightly brush with oil.",
      "Pour a ladle of batter and spread gently into a thin circle.",
      "Drizzle a few drops of oil around the edges and cook for 2 minutes until golden brown. Flip and cook the other side.",
      "Serve warm with tomato sauce or mint chutney."
    ],
    momTip: "Whisk the batter well with a fork for 1 minute to incorporate air; your chillas will turn out delightfully soft!"
  },
  {
    id: "pakistani_plain_paratha_chai",
    title: "Crispy Layered Paratha with Sweet Dahi & Chai",
    subtitle: "Flaky multi-layered griddled flatbread with fresh sweetened yogurt and hot tea",
    cuisine: "pakistani",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    description: "Crispy, flaky whole wheat spiral parathas griddled to golden perfection, served with chilled yogurt and a hot cup of tea.",
    requiredIngredients: ["wheat_flour", "cooking_oil", "salt", "yogurt", "tea_leaves", "milk", "sugar"],
    optionalIngredients: ["butter"],
    instructions: [
      "Knead whole wheat flour with a pinch of salt and water into a smooth dough.",
      "Roll out a circle, brush with oil, cut a slit from the center to edge, roll into a cone, flatten, and roll out again for flaky multi-layers.",
      "Griddle on a hot tawa with oil or ghee until golden brown, crispy, and blistered.",
      "Whisk plain yogurt with a spoon of sugar or pinch of salt.",
      "Brew hot black tea with milk and sugar.",
      "Serve the crispy paratha immediately with the chilled yogurt and hot chai."
    ],
    momTip: "The spiral cone technique gives you dozens of crispy, paper-thin flaky layers in under 2 minutes!"
  },

  // ------------------------------------------------------------------------
  // PAKISTANI LUNCHES & DINNERS
  // ------------------------------------------------------------------------
  {
    id: "pakistani_chicken_karahi",
    title: "Lahori Street-Style Chicken Karahi",
    subtitle: "Classic wok chicken simmered in a luscious tomato, ginger, and green chili masala",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    description: "The crown jewel of Pakistani home cooking: bone-in chicken seared in a wok with ripe tomatoes, freshly julienned ginger, garlic, and cracked spices.",
    requiredIngredients: ["chicken", "tomato", "ginger", "garlic", "green_chili", "cooking_oil", "salt", "turmeric", "red_chili_powder", "cumin"],
    optionalIngredients: ["coriander", "black_pepper", "garam_masala", "wheat_flour"],
    instructions: [
      "Heat oil in a wide wok (karahi). Add chicken pieces, salt, and minced garlic. Sear on high heat for 5-6 minutes until chicken turns white and golden.",
      "Cut tomatoes in halves and place them cut-side down over the chicken.",
      "Cover with a tight lid and steam on medium heat for 6-8 minutes until tomato skins loosen.",
      "Remove tomato skins with tongs and mash the soft tomato pulp directly into the chicken juices.",
      "Add turmeric, red chili powder, cumin, and sliced green chilies. Fry uncovered on high heat (bhunai) for 8-10 minutes until oil separates.",
      "Garnish with julienned fresh ginger, black pepper, and coriander. Serve sizzling with hot tandoori rotis or naan."
    ],
    momTip: "Halving whole tomatoes and steaming them over the chicken makes the skins slide right off and melts the pulp into a silky restaurant-style gravy!"
  },
  {
    id: "pakistani_aloo_gosht",
    title: "Homestyle Aloo Chicken Salan",
    subtitle: "Comforting tender chicken and potato curry with aromatic spiced gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    description: "Every Pakistani family's ultimate comfort meal: tender chicken and quartered potatoes simmered in a fragrant, golden onion-tomato gravy.",
    requiredIngredients: ["chicken", "potato", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "coriander_powder", "red_chili_powder", "cumin"],
    optionalIngredients: ["coriander", "garam_masala", "green_chili", "rice", "wheat_flour"],
    instructions: [
      "Heat oil in a pot. Sauté finely sliced onions until deep golden brown.",
      "Add ginger-garlic paste and chicken pieces. Sauté on medium-high heat for 4 minutes until chicken is seared.",
      "Add chopped tomatoes, turmeric, red chili powder, coriander powder, cumin, and salt. Cook until tomatoes melt and oil separates from the masala.",
      "Peel potatoes and cut into large halves or quarters. Add to the pot and stir to coat with the masala.",
      "Pour in 2.5 cups of warm water to create the salan (shorba). Bring to a boil.",
      "Cover tightly with lid and simmer on low-medium heat for 18-20 minutes until chicken is tender and potatoes are buttery soft.",
      "Sprinkle garam masala and fresh coriander. Serve with steamed basmati rice or fresh warm rotis."
    ],
    momTip: "Cut potatoes into large chunks rather than small cubes so they absorb the savory chicken broth without disintegrating."
  },
  {
    id: "pakistani_daal_chawal",
    title: "Comforting Yellow Daal Tadka & Cumin Basmati Rice",
    subtitle: "Creamy tempered lentils with garlic-cumin sizzle over fragrant rice",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "The staple everyday Pakistani soul food: tender yellow lentils cooked with turmeric and salt, finished with a smoking garlic-cumin tadka over fluffy rice.",
    requiredIngredients: ["toor_dal", "rice", "onion", "tomato", "garlic", "cumin", "turmeric", "cooking_oil", "salt"],
    optionalIngredients: ["ginger", "green_chili", "red_chili_powder", "coriander", "butter"],
    instructions: [
      "Cook yellow lentils (toor or moong) with water, salt, and turmeric in a pot or pressure cooker until completely soft and creamy. Whisk gently.",
      "In a separate pot, cook basmati rice with cumin seeds, salt, and water until fluffy.",
      "For the tarka (tempering): Heat oil or ghee in a small frying pan. Add cumin seeds and sliced garlic. Fry until garlic turns fragrant and golden brown.",
      "Add chopped onions, green chilies, and diced tomatoes. Cook for 2 minutes until softened.",
      "Pour the sizzling aromatic tarka immediately over the cooked lentils. Cover with a lid for 2 minutes to trap the aroma.",
      "Serve piping hot ladled generously over steamed cumin basmati rice."
    ],
    momTip: "Let the garlic slices brown to a light golden hue in the oil; that toasted garlic aroma is the entire magic of homemade daal!"
  },
  {
    id: "pakistani_chicken_biryani",
    title: "Pakistani Chicken Biryani with Saffron Rice",
    subtitle: "Fragrant layered basmati rice with tender spiced chicken and potatoes",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "20 mins",
    cookTime: "35 mins",
    difficulty: "Medium",
    description: "Celebrated Pakistani festive dish: fragrant parboiled basmati rice layered with rich, spiced chicken gravy, potatoes, yogurt, and herbs, sealed on gentle dum.",
    requiredIngredients: ["chicken", "rice", "potato", "onion", "tomato", "yogurt", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "cumin", "garam_masala"],
    optionalIngredients: ["coriander", "green_chili", "lemon"],
    instructions: [
      "Parboil soaked basmati rice with whole cumin and salt until 70% cooked (firm with a bite). Drain and set aside.",
      "In a heavy pot, heat oil and brown sliced onions until golden. Add ginger, garlic, and chicken pieces. Sauté for 5 minutes.",
      "Whisk yogurt with red chili powder, turmeric, garam masala, and salt. Pour into the pot with chopped tomatoes and potato cubes.",
      "Cook covered on medium heat for 15 minutes until chicken is cooked through and gravy is thick.",
      "Layer the parboiled rice directly over the chicken gravy. Top with green chilies, lemon slices, and fresh coriander.",
      "Cover tightly with foil and lid. Cook on very low heat (dum) for 15 minutes.",
      "Gently fold rice from the bottom with a flat plate and serve with chilled raita."
    ],
    momTip: "Parboil rice until it breaks into 3 parts when pinched between your fingers; the rest of the cooking happens perfectly in the steam layer!"
  },
  {
    id: "pakistani_chicken_pulao",
    title: "Fragrant Chicken Yakhni Pulao",
    subtitle: "Aromatic basmati rice cooked in rich spiced chicken stock",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    description: "Subtle, deeply comforting one-pot rice meal where long-grain basmati rice absorbs the rich, aromatic broth of bone-in chicken and whole spices.",
    requiredIngredients: ["chicken", "rice", "onion", "ginger", "garlic", "cumin", "cooking_oil", "salt", "garam_masala"],
    optionalIngredients: ["green_chili", "yogurt"],
    instructions: [
      "In a pot, bring chicken, ginger, garlic, whole cumin, salt, and 4 cups of water to a boil. Simmer for 15 minutes to create a rich chicken stock (yakhni). Strain stock and reserve chicken.",
      "In another pot, heat oil and fry thinly sliced onions until light golden brown.",
      "Add the reserved chicken pieces and sauté for 3 minutes.",
      "Add soaked and drained basmati rice. Gently toss with the chicken for 1 minute.",
      "Pour in the hot chicken stock (about 2 cups of stock per 1 cup of rice). Season with salt and garam masala.",
      "Cook on medium-high heat until 90% of the liquid is absorbed and small steam holes appear on the surface.",
      "Cover tightly with a heavy lid and steam on the lowest flame (dum) for 12 minutes.",
      "Fluff gently with a fork and serve with plain yogurt."
    ],
    momTip: "Simmering the chicken with bone to make fresh yakhni (stock) infuses every single rice grain with incredible homestyle flavor!"
  },
  {
    id: "pakistani_aloo_qeema",
    title: "Homestyle Aloo Qeema (Minced Meat & Potatoes)",
    subtitle: "Savory minced meat and tender potato cubes cooked in spiced onion-tomato masala",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    description: "Everyday Pakistani comfort dinner: seasoned minced chicken or beef cooked with diced potatoes, ginger, garlic, and fragrant warming spices.",
    requiredIngredients: ["minced_meat", "potato", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "cumin", "coriander_powder"],
    optionalIngredients: ["green_chili", "garam_masala", "coriander", "peas", "wheat_flour", "rice"],
    instructions: [
      "Heat oil in a kadai or skillet. Sauté chopped onions until golden brown.",
      "Add ginger-garlic paste and minced meat. Fry on high heat (bhunai) for 5-6 minutes until minced meat browns and releases its juices.",
      "Add chopped tomatoes, turmeric, red chili powder, coriander powder, cumin, and salt. Cook until tomatoes melt and oil glistens.",
      "Add diced potato cubes and 1/2 cup of water. Stir well.",
      "Cover and simmer on low heat for 12-14 minutes until potatoes are completely tender.",
      "Garnish with slit green chilies and fresh coriander.",
      "Serve warm with hot phulkas, parathas, or steamed rice."
    ],
    momTip: "Sauté the minced meat vigorously on high heat at the beginning to remove any raw aroma and develop deep roasted flavors."
  },
  {
    id: "pakistani_daal_mash_fry",
    title: "Dhaba-Style Spiced Daal Mash (White Lentil Fry)",
    subtitle: "Dry-tempered white lentils tossed with ginger juliennes and green chilies",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    description: "Restaurant and dhaba favorite: split white lentils boiled until tender but separate, tossed in a fragrant garlic-ginger-onion masala.",
    requiredIngredients: ["urad_dal", "onion", "tomato", "ginger", "garlic", "green_chili", "cooking_oil", "salt", "turmeric", "cumin", "red_chili_powder"],
    optionalIngredients: ["coriander", "butter", "wheat_flour"],
    instructions: [
      "Soak white lentils (urad/mash daal) for 30 minutes. Boil with water, a pinch of turmeric, and salt until 90% tender (each grain should remain whole and separate). Drain.",
      "In a wide pan, heat oil. Add cumin seeds and sauté finely chopped onions until light golden.",
      "Add minced ginger, garlic, and sliced green chilies. Sauté for 1 minute.",
      "Add chopped tomatoes, red chili powder, and salt. Cook until oil separates.",
      "Gently fold in the boiled lentils. Cook on low heat covered for 5 minutes so lentils absorb the spicy tarka.",
      "Top with plenty of fresh ginger juliennes and serve with hot tandoori rotis."
    ],
    momTip: "Do not over-boil mash daal; keeping the grains intact and al dente is the hallmark of authentic Pakistani dhaba daal mash."
  },
  {
    id: "pakistani_chicken_korma",
    title: "Pakistani Shahi Chicken Korma",
    subtitle: "Velvety spiced chicken simmered in caramelized onion and yogurt gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    description: "Rich, fragrant Pakistani classic featuring chicken pieces slow-simmered in a luxurious yogurt-based sauce flavored with golden crushed fried onions.",
    requiredIngredients: ["chicken", "yogurt", "onion", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "coriander_powder", "garam_masala"],
    optionalIngredients: ["wheat_flour", "rice"],
    instructions: [
      "Thinly slice onions and fry in hot oil until evenly golden brown. Drain on paper towels and crush into coarse flakes with your fingers.",
      "In a bowl, whisk yogurt with turmeric, red chili powder, coriander powder, and salt.",
      "In the same pot with 3 tbsp oil, sauté ginger-garlic paste and chicken pieces for 4-5 minutes until sealed.",
      "Lower the flame and slowly stir in the whisked spiced yogurt to prevent curdling.",
      "Add the crushed golden onions and 1 cup of warm water. Mix well.",
      "Cover tightly and simmer on low heat for 18-20 minutes until chicken is tender and a fragrant red oil film rises to the top.",
      "Stir in garam masala. Serve with warm naan, sheermal, or steamed rice."
    ],
    momTip: "Crushing fried onions by hand rather than blending them gives korma its signature granular (danedaar) velvety gravy!"
  },
  {
    id: "pakistani_bhindi_masala",
    title: "Crispy Pakistani Okra & Caramelized Onion Fry",
    subtitle: "Non-slimy pan-fried okra tossed with lots of sliced onions and spices",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Tender, pan-crisped okra tossed with soft caramelized onions, tomatoes, and everyday spices; a staple Pakistani vegetarian favorite.",
    requiredIngredients: ["okra", "onion", "tomato", "cumin", "turmeric", "coriander_powder", "red_chili_powder", "cooking_oil", "salt"],
    optionalIngredients: ["lemon", "green_chili", "wheat_flour"],
    instructions: [
      "Wash okra thoroughly and pat completely dry with a kitchen towel before slicing into round discs.",
      "Heat 2 tbsp oil in a wide frying pan. Fry the sliced okra on medium-high heat UNCOVERED for 6-7 minutes until tender and crisp (do not add salt yet). Remove to a plate.",
      "In the same pan, heat another tablespoon of oil. Add cumin seeds and lots of sliced onions. Sauté until golden.",
      "Add chopped tomatoes, turmeric, coriander powder, red chili powder, and salt. Cook until tomatoes soften.",
      "Add the pan-crisped okra back into the pan. Toss gently for 3 minutes to combine.",
      "Finish with a squeeze of fresh lemon juice. Serve hot with soft phulkas and dal."
    ],
    momTip: "Wipe okra completely dry before slicing and fry uncovered without salt first; this completely eliminates stickiness!"
  },
  {
    id: "pakistani_palak_chicken",
    title: "Slow-Cooked Palak Chicken (Spinach & Chicken)",
    subtitle: "Tender chicken simmered in seasoned garlic spinach gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    description: "Nutritious, hearty Pakistani curry combining tender chicken pieces with wholesome spinach leaves, garlic, ginger, and warming spices.",
    requiredIngredients: ["chicken", "spinach", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "coriander_powder"],
    optionalIngredients: ["garam_masala", "green_chili", "wheat_flour", "rice"],
    instructions: [
      "Wash spinach leaves, roughly chop, and steam in a saucepan for 3 minutes. Blend into a coarse puree.",
      "Heat oil in a pot. Sauté sliced onions until golden brown.",
      "Add ginger, garlic, and chicken pieces. Sauté on medium-high flame for 5 minutes until chicken is seared.",
      "Add chopped tomatoes, turmeric, coriander powder, red chili powder, and salt. Cook until oil separates.",
      "Pour in the spinach puree and 1/2 cup of water. Stir well.",
      "Cover and simmer on low heat for 15 minutes until chicken is tender and spinach flavors have deeply melded.",
      "Finish with a pinch of garam masala. Serve warm with rotis or steamed basmati rice."
    ],
    momTip: "Steaming the spinach briefly instead of boiling preserves its bright color and locks in all its natural iron and nutrients."
  },
  {
    id: "pakistani_chana_salan",
    title: "Lahori Spiced Chickpea Curry (Chana Salan)",
    subtitle: "Tender chickpeas simmered in a spiced onion-tomato-ginger gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    description: "Everyday Pakistani comfort food: soft, buttery chickpeas simmered in a rich caramelized onion and tomato sauce, perfect with rice or roti.",
    requiredIngredients: ["chana", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "cumin", "coriander_powder"],
    optionalIngredients: ["green_chili", "coriander", "garam_masala", "rice", "wheat_flour"],
    instructions: [
      "Boil pre-soaked white chickpeas until completely tender.",
      "Heat oil in a pot. Sauté finely minced onions until dark golden brown.",
      "Add ginger-garlic paste and sauté for 1 minute.",
      "Add chopped tomatoes, turmeric, coriander powder, red chili powder, and salt. Cook on medium heat until tomatoes turn jammy and oil separates.",
      "Add the boiled chickpeas along with 1.5 cups of their cooking liquid.",
      "Mash a few chickpeas with the back of your ladle to naturally thicken the gravy.",
      "Simmer covered on low heat for 12-15 minutes. Garnish with green chilies and fresh coriander.",
      "Serve warm with steamed basmati rice or hot chapatis."
    ],
    momTip: "Mashing half a cup of boiled chickpeas directly into the gravy creates that rich, thick texture without any cornstarch."
  },
  {
    id: "pakistani_chicken_jalfrezi",
    title: "Zesty Chicken Jalfrezi with Bell Peppers",
    subtitle: "Tender chicken strips stir-fried with crisp bell peppers and onions in tangy sauce",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "18 mins",
    difficulty: "Easy",
    description: "Vibrant, restaurant-style Pakistani stir-fried chicken tossed with crunchy bell peppers, onions, tomatoes, and a tangy spiced tomato glaze.",
    requiredIngredients: ["chicken", "capsicum", "onion", "tomato", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "black_pepper"],
    optionalIngredients: ["ginger", "cumin", "coriander", "rice", "wheat_flour"],
    instructions: [
      "Cut boneless chicken into thin strips. Cut bell peppers and onions into square chunks.",
      "Heat oil in a wok or skillet over high heat. Add minced garlic and chicken strips. Stir-fry for 5 minutes until chicken is cooked through. Remove to a plate.",
      "In the same pan, add another spoon of oil, and stir-fry the onion and bell pepper chunks on high heat for 2 minutes so they stay crisp.",
      "Add chopped tomatoes (or tomato puree), turmeric, red chili powder, black pepper, and salt. Cook for 2 minutes to form a glossy sauce.",
      "Add the cooked chicken strips back into the pan and toss together on high flame for 2 minutes until glazed.",
      "Serve hot with steamed rice or parathas."
    ],
    momTip: "Cook the bell peppers on high heat for just 2 minutes so they retain their vibrant green color and satisfying crunch!"
  },
  {
    id: "pakistani_mix_sabzi",
    title: "Homestyle Mix Sabzi (Potatoes, Peas & Carrots)",
    subtitle: "Colorful seasonal vegetables stir-fried with cumin and mild spices",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "18 mins",
    difficulty: "Very Easy",
    description: "Wholesome, colorful Pakistani dry vegetable dish featuring tender potatoes, sweet green peas, and diced carrots tossed with cumin and turmeric.",
    requiredIngredients: ["potato", "peas", "carrot", "onion", "tomato", "cumin", "turmeric", "cooking_oil", "salt"],
    optionalIngredients: ["green_chili", "coriander", "wheat_flour"],
    instructions: [
      "Dice potatoes and carrots into even, bite-sized cubes.",
      "Heat oil in a pan. Add cumin seeds and let them sizzle. Add sliced onions and sauté until soft.",
      "Add chopped tomatoes, turmeric, and salt. Cook for 2 minutes.",
      "Add diced potatoes and carrots. Toss well to coat with the spiced oil.",
      "Cover tightly with a lid and cook on low heat for 10 minutes in their natural steam.",
      "Add green peas, stir, and cook covered for another 5 minutes until all vegetables are tender.",
      "Serve warm with hot rotis."
    ],
    momTip: "Cooking vegetables covered on low heat cooks them in their own steam without needing extra water, concentrating their natural sweetness."
  },
  {
    id: "pakistani_kala_chana_curry",
    title: "Nutritious Kala Chana (Brown Chickpeas Curry) with Rice",
    subtitle: "Hearty iron-rich brown chickpeas in a spiced cumin and onion sauce",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    description: "Wholesome brown chickpeas packed with natural iron and protein, cooked with onion, tomato, and roasted cumin; paired with steamed basmati rice.",
    requiredIngredients: ["black_chana", "rice", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "cumin", "coriander_powder"],
    optionalIngredients: ["green_chili", "coriander", "wheat_flour"],
    instructions: [
      "Soak brown chickpeas (kala chana) overnight. Pressure cook with salt for 6 whistles until tender.",
      "Cook basmati rice separately until fluffy.",
      "Heat oil in a pot. Add cumin seeds, then sauté finely chopped onions and ginger-garlic until golden.",
      "Add chopped tomatoes, turmeric, coriander powder, and salt. Cook until tomatoes are mushy.",
      "Add the boiled brown chickpeas along with 1 cup of their nutrient-rich cooking broth.",
      "Simmer on medium heat for 12 minutes until gravy clings to the chickpeas.",
      "Serve hot ladled over steamed basmati rice."
    ],
    momTip: "Save the boiled black chana broth! It is packed with minerals and gives the curry a rich earthy body."
  },
  {
    id: "pakistani_lobia_curry",
    title: "Pakistani Homestyle Red Bean Curry (Lobia)",
    subtitle: "Melt-in-mouth kidney beans simmered in a spiced onion-tomato-ginger gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    description: "Tender kidney beans slow-simmered in an aromatic onion, tomato, and ginger masala, served with fluffy basmati rice.",
    requiredIngredients: ["rajma", "rice", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "cumin", "coriander_powder", "red_chili_powder"],
    optionalIngredients: ["green_chili", "coriander", "butter"],
    instructions: [
      "Soak kidney beans (lobia/rajma) for 4 hours. Boil with water and salt until buttery soft.",
      "Cook basmati rice in another pot until fluffy.",
      "In a pot, heat oil, sauté cumin seeds and chopped onions until golden brown.",
      "Add ginger-garlic paste, tomatoes, turmeric, coriander powder, red chili powder, and salt. Cook until oil separates.",
      "Add the boiled beans along with their broth. Mash a ladle of beans to thicken the curry naturally.",
      "Simmer on low heat for 15 minutes. Serve warm over steamed rice."
    ],
    momTip: "Mashing a small ladle of cooked beans directly into the sauce naturally creates that velvety restaurant-style gravy."
  },
  {
    id: "pakistani_comfort_khichdi",
    title: "Soothing Moong Daal & Rice Khichdi",
    subtitle: "Gentle one-pot lentil and rice comfort porridge tempered with cumin and butter",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "5 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    description: "The ultimate soothing, light meal for busy days: equal parts yellow moong lentils and basmati rice cooked with cumin, turmeric, and pure butter.",
    requiredIngredients: ["moong_dal", "rice", "cumin", "turmeric", "cooking_oil", "salt"],
    optionalIngredients: ["butter", "ginger", "yogurt"],
    instructions: [
      "Wash equal parts rice and yellow moong lentils together. Drain.",
      "Heat oil or butter in a pressure cooker or pot. Add cumin seeds and let them sizzle.",
      "Add turmeric powder and salt.",
      "Add the washed dal and rice, followed by 4 cups of water (for a soft, creamy porridge texture).",
      "Pressure cook for 3 whistles (or simmer covered for 15 minutes).",
      "Top with a generous spoon of butter and serve warm with plain yogurt."
    ],
    momTip: "The ultimate stress-free savior: everything goes into one pot, ready in 15 minutes flat, with zero hassle."
  },
  {
    id: "pakistani_zeera_aloo",
    title: "Quick Spiced Cumin Potatoes (Zeera Aloo)",
    subtitle: "Crispy pan-roasted potato cubes tossed with toasted cumin and fresh green chilies",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Very Easy",
    description: "Boiled potato cubes flash-fried in fragrant cumin oil with green chilies, turmeric, coriander, and fresh lemon juice.",
    requiredIngredients: ["potato", "cumin", "green_chili", "turmeric", "coriander_powder", "cooking_oil", "salt"],
    optionalIngredients: ["lemon", "coriander", "wheat_flour"],
    instructions: [
      "Boil potatoes until just tender (do not over-boil). Peel and cut into cubes.",
      "Heat oil in a wide frying pan. Add a generous tablespoon of cumin seeds and let them sizzle until nutty and fragrant.",
      "Add slit green chilies, turmeric powder, coriander powder, and salt.",
      "Toss in the potato cubes, stirring well so every piece is coated in the spiced cumin oil.",
      "Pan-roast on medium heat uncovered for 5-6 minutes until edges turn golden and crisp.",
      "Finish with a squeeze of fresh lemon juice. Serve warm with rotis."
    ],
    momTip: "Let boiled potatoes cool completely before cubing so they hold their clean shape without crumbling in the pan."
  },
  {
    id: "pakistani_egg_curry",
    title: "Homestyle Spiced Boiled Egg Curry",
    subtitle: "Golden-seared boiled eggs simmered in a spiced onion-tomato gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "Hard-boiled eggs lightly pricked and pan-seared until blistered, then simmered in a rich, savory onion-tomato curry.",
    requiredIngredients: ["eggs", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "coriander_powder", "red_chili_powder", "cumin"],
    optionalIngredients: ["green_chili", "coriander", "rice", "wheat_flour"],
    instructions: [
      "Hard-boil eggs, peel them, and prick lightly all over with a fork.",
      "Heat 1 tsp oil with a pinch of turmeric in a pan; roll the eggs for 2 minutes until golden blistered outside. Remove.",
      "In the same pan, add remaining oil and cumin seeds. Sauté chopped onions until golden brown.",
      "Add ginger, garlic, chopped tomatoes, turmeric, coriander powder, and salt. Cook until tomatoes melt and oil separates.",
      "Add 1 cup of warm water to create the gravy and bring to a simmer.",
      "Drop in the golden boiled eggs and simmer for 3 minutes so eggs absorb the rich sauce.",
      "Garnish with coriander and serve with steamed rice or rotis."
    ],
    momTip: "Pricking boiled eggs with a toothpick before searing prevents hot oil splattering and lets the spiced sauce seep deep inside!"
  },
  {
    id: "pakistani_shimla_mirch_qeema",
    title: "Bell Pepper & Minced Chicken Stir-Fry",
    subtitle: "Crunchy green bell peppers tossed with spiced minced meat and onions",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "A fast, flavorful dinner of tender minced chicken or beef cooked with crisp bell peppers, onions, tomatoes, and aromatic spices.",
    requiredIngredients: ["minced_meat", "capsicum", "onion", "tomato", "garlic", "cooking_oil", "salt", "turmeric", "red_chili_powder", "cumin"],
    optionalIngredients: ["ginger", "green_chili", "wheat_flour"],
    instructions: [
      "Dice bell peppers and onions into even cubes.",
      "Heat oil in a skillet. Sauté garlic and minced meat on medium-high heat for 6 minutes until browned and cooked through.",
      "Add chopped tomatoes, turmeric, cumin, red chili powder, and salt. Cook for 3 minutes until tomatoes soften.",
      "Add the diced bell peppers and toss well.",
      "Cook uncovered on medium flame for 4 minutes so the bell peppers stay crisp and tender without going soggy.",
      "Serve warm with hot phulkas or parathas."
    ],
    momTip: "Add the bell peppers at the very end of cooking to preserve their bright crunch and fresh peppery aroma."
  },
  {
    id: "pakistani_palak_paneer",
    title: "Velvety Spinach Curry with Cottage Cheese (Palak Paneer)",
    subtitle: "Soft cottage cheese cubes simmered in a spiced emerald spinach gravy",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    description: "Creamy, vibrant green spinach puree seasoned with garlic, ginger, cumin, and mild spices, gently folded with tender cottage cheese cubes.",
    requiredIngredients: ["spinach", "paneer", "onion", "tomato", "garlic", "ginger", "green_chili", "cooking_oil", "salt", "cumin"],
    optionalIngredients: ["butter", "cream", "wheat_flour"],
    instructions: [
      "Blanch spinach leaves in boiling water for 2 minutes, then immediately dip into cold water to preserve the lush green color. Blend into a smooth puree.",
      "Heat oil or butter in a pan. Sauté cumin seeds, followed by chopped garlic, ginger, and onions until translucent.",
      "Add chopped tomatoes and salt. Cook until soft.",
      "Pour in the spinach puree and simmer on low heat for 5 minutes.",
      "Gently fold in paneer cubes. Simmer for 2 minutes so the paneer absorbs the gravy without turning rubbery.",
      "Top with a small spoon of butter and serve warm with rotis."
    ],
    momTip: "Shocking blanched spinach in cold water prevents it from turning dull army green; it stays brilliant emerald!"
  },
  {
    id: "pakistani_matar_paneer",
    title: "Sweet Green Peas & Cottage Cheese Curry",
    subtitle: "Homestyle comfort curry of tender peas and cottage cheese in tomato sauce",
    cuisine: "pakistani",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "Everyday comfort meal of sweet green peas and soft cottage cheese cubes simmered in a light, spiced onion-tomato sauce.",
    requiredIngredients: ["paneer", "peas", "onion", "tomato", "ginger", "garlic", "cooking_oil", "salt", "turmeric", "cumin", "coriander_powder"],
    optionalIngredients: ["green_chili", "coriander", "wheat_flour", "rice"],
    instructions: [
      "Heat oil in a pot. Sauté finely chopped onions until golden brown.",
      "Add ginger-garlic paste and sauté for 1 minute.",
      "Add pureed tomatoes, turmeric, coriander powder, cumin, and salt. Cook until oil separates.",
      "Add green peas and 1 cup of warm water. Simmer covered for 6-8 minutes until peas are tender.",
      "Add cottage cheese cubes and simmer gently for 3 minutes on low flame.",
      "Garnish with fresh coriander. Serve with hot phulkas or steamed rice."
    ],
    momTip: "Soak store-bought paneer cubes in warm salted water for 10 minutes before cooking so they remain cloud-soft."
  },

  // ------------------------------------------------------------------------
  // ITALIAN BREAKFASTS & BRUNCHES
  // ------------------------------------------------------------------------
  {
    id: "italian_tomato_bruschetta",
    title: "Classic Italian Tomato Bruschetta",
    subtitle: "Crispy garlic-rubbed toast topped with ripe tomatoes, olive oil, and herbs",
    cuisine: "italian",
    mealType: ["breakfast"],
    prepTime: "10 mins",
    cookTime: "5 mins",
    difficulty: "Very Easy",
    description: "Crunchy toasted bread rubbed with a cut garlic clove and piled high with ripe diced tomatoes, extra virgin olive oil, and fragrant herbs.",
    requiredIngredients: ["bread", "tomato", "garlic", "olive_oil", "salt", "black_pepper"],
    optionalIngredients: ["basil", "cheese"],
    instructions: [
      "Finely dice ripe tomatoes and place in a bowl. Toss with 1 tbsp extra virgin olive oil, salt, and freshly ground black pepper.",
      "Let the tomato mixture rest for 5 minutes so natural juices release.",
      "Toast bread slices on a tawa or toaster until crisp and deep golden.",
      "While the toast is steaming hot, rub a halved garlic clove gently across the crusty surface.",
      "Spoon the seasoned tomatoes generously over the warm garlic toasts.",
      "Optionally top with grated cheese and serve immediately!"
    ],
    momTip: "Rubbing raw garlic directly onto hot crunchy toast infuses delicious bakery garlic flavor without biting into raw garlic!"
  },
  {
    id: "italian_veggie_frittata",
    title: "Skillet Italian Veggie Frittata",
    subtitle: "Fluffy open-faced baked omelette with bell peppers, onions, and melted cheese",
    cuisine: "italian",
    mealType: ["breakfast", "dinner"],
    prepTime: "10 mins",
    cookTime: "12 mins",
    difficulty: "Easy",
    description: "Fluffy Italian open-faced baked omelette packed with tender sautéed bell peppers, sweet onions, tomatoes, and golden melted cheese.",
    requiredIngredients: ["eggs", "capsicum", "onion", "tomato", "cheese", "olive_oil", "salt", "black_pepper"],
    optionalIngredients: ["oregano", "mushroom", "spinach", "bread"],
    instructions: [
      "In a bowl, crack eggs, add salt, black pepper, and 1 tbsp milk (if available). Whisk vigorously until frothy and airy.",
      "Heat olive oil in a non-stick frying pan. Sauté chopped onions and bell peppers for 3-4 minutes until tender.",
      "Add diced tomatoes and optional oregano. Cook for 1 minute.",
      "Pour the whisked egg mixture evenly over the vegetables in the pan.",
      "Sprinkle grated cheese generously over the top.",
      "Cover the pan with a lid and cook on low heat for 6-8 minutes until eggs are set and cheese is bubbly.",
      "Slide onto a plate, slice into wedges like a pizza, and serve hot!"
    ],
    momTip: "Cook on low flame with the lid tightly on; the trapped steam cooks the top to fluffy perfection without needing an oven!"
  },
  {
    id: "italian_caprese_toast",
    title: "Caprese Cheese & Tomato Toast",
    subtitle: "Warm toasted bread layered with sliced tomatoes, melted cheese, and herbs",
    cuisine: "italian",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "5 mins",
    difficulty: "Very Easy",
    description: "Warm toasted bread layered with ripe tomato slices, melted mozzarella or cheddar cheese, olive oil, and fragrant Italian herbs.",
    requiredIngredients: ["bread", "tomato", "cheese", "olive_oil", "black_pepper", "salt"],
    optionalIngredients: ["basil", "oregano"],
    instructions: [
      "Brush bread slices lightly with olive oil.",
      "Layer with thick slices of ripe tomato and slices or grated cheese.",
      "Season with a sprinkle of salt, black pepper, and oregano or basil.",
      "Place on a medium-hot tawa, cover with a lid for 3-4 minutes until bread is crispy on the bottom and cheese melts completely.",
      "Drizzle a drop of olive oil on top and serve warm."
    ],
    momTip: "Covering the pan with a lid creates a miniature oven that melts the cheese in under 3 minutes!"
  },
  {
    id: "italian_scrambled_eggs",
    title: "Tuscan Herbed Scrambled Eggs with Garlic Toast",
    subtitle: "Silky, custardy scrambled eggs cooked in olive oil with oregano and garlic",
    cuisine: "italian",
    mealType: ["breakfast"],
    prepTime: "3 mins",
    cookTime: "5 mins",
    difficulty: "Very Easy",
    description: "Silky, velvety scrambled eggs gently folded in olive oil with garlic, oregano, and black pepper, served on toasted garlic bread.",
    requiredIngredients: ["eggs", "garlic", "olive_oil", "oregano", "salt", "black_pepper", "bread"],
    optionalIngredients: ["tomato", "cheese", "butter"],
    instructions: [
      "Whisk eggs with salt, black pepper, and oregano in a small bowl.",
      "Heat olive oil in a pan over low-medium heat. Add a tiny hint of minced garlic and sauté for 30 seconds (do not brown).",
      "Pour in eggs and let them sit for 10 seconds.",
      "Using a spatula, gently push the eggs from outside to center, creating soft, velvety folds.",
      "Take off heat while still slightly soft and glossy.",
      "Spoon over warm toasted bread and sprinkle grated cheese if desired."
    ],
    momTip: "Keep the heat low! Slow, gentle cooking keeps eggs moist and custardy rather than rubbery."
  },
  {
    id: "italian_cheese_garlic_panini",
    title: "Crispy Garlic Butter Cheese Panini",
    subtitle: "Golden grilled sandwich with stretching melted cheese and garlic butter crust",
    cuisine: "italian",
    mealType: ["breakfast"],
    prepTime: "5 mins",
    cookTime: "6 mins",
    difficulty: "Very Easy",
    description: "Golden, crunchy grilled sandwich oozing with melted cheese, garlic butter, and aromatic Italian herbs.",
    requiredIngredients: ["bread", "cheese", "butter", "garlic", "oregano", "salt"],
    optionalIngredients: ["chili_flakes", "capsicum", "tomato"],
    instructions: [
      "In a small bowl, mix softened butter with minced garlic, a pinch of salt, and oregano.",
      "Spread the garlic butter on the outside faces of the bread slices.",
      "Stuff the inside generously with grated cheese (and optional capsicum or chili flakes).",
      "Place on a hot tawa. Press down firmly with a spatula to get that flat panini crunch.",
      "Toast on medium flame for 2-3 minutes per side until golden brown and cheese is fully melted and stretching.",
      "Cut diagonally and serve hot!"
    ],
    momTip: "Spreading garlic butter on the outside of the bread gives an irresistible golden garlic bread crust!"
  },
  {
    id: "italian_ricotta_pancake",
    title: "Sweet Ricotta / Cheese Breakfast Crepes",
    subtitle: "Fluffy tender sweet pancakes made with soft cheese, milk, and wheat flour",
    cuisine: "italian",
    mealType: ["breakfast"],
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    description: "Fluffy, tender sweet breakfast pancakes made with crumbled soft cheese/paneer, milk, whole wheat flour, and sugar.",
    requiredIngredients: ["paneer", "milk", "wheat_flour", "sugar", "butter"],
    optionalIngredients: [],
    instructions: [
      "In a bowl or blender, blend crumbled soft cheese/paneer, milk, and sugar into a smooth cream.",
      "Fold in wheat flour to form a smooth pancake batter.",
      "Heat a pan with a small dab of butter.",
      "Pour a small ladle of batter and cook on medium-low heat for 2-3 minutes until bubbles appear on the surface.",
      "Flip gently and cook the other side until golden.",
      "Serve warm topped with honey or chopped fresh fruit."
    ],
    momTip: "Soft cheese gives pancakes a wonderful cheesecake-like soft crumb that kids devour with joy!"
  },

  // ------------------------------------------------------------------------
  // ITALIAN LUNCHES & DINNERS
  // ------------------------------------------------------------------------
  {
    id: "italian_penne_arrabbiata",
    title: "Fiery Penne all'Arrabbiata",
    subtitle: "Classic Roman tubular pasta in spicy garlic-chili tomato sauce",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Very Easy",
    description: "Classic Roman pasta tossed in a zesty, garlicky spicy tomato sauce with crushed chili flakes and extra virgin olive oil.",
    requiredIngredients: ["pasta", "garlic", "tomato_puree", "olive_oil", "chili_flakes", "salt"],
    optionalIngredients: ["basil", "oregano", "black_pepper", "cheese"],
    instructions: [
      "Boil pasta in a pot of generously salted water until tender with a slight bite (al dente). Reserve 1/2 cup pasta cooking water and drain.",
      "In a large pan, heat olive oil over medium flame. Add sliced garlic and red chili flakes. Sauté for 1 minute until fragrant.",
      "Add tomato puree (or crushed ripe tomatoes), salt, and black pepper.",
      "Simmer the sauce on medium heat for 8-10 minutes until it thickens and oil glistens on the surface.",
      "Toss the boiled penne pasta into the simmering sauce. Splash a few tablespoons of reserved pasta water to emulsify the sauce into a glossy coating.",
      "Stir in oregano and fresh basil. Top with grated cheese and serve immediately!"
    ],
    momTip: "Always save half a cup of starchy pasta boiling water! Adding a splash to the sauce makes it cling to every single pasta tube."
  },
  {
    id: "italian_spaghetti_aglio_olio",
    title: "Quick Spaghetti Aglio e Olio",
    subtitle: "15-minute Italian classic tossed with golden garlic, olive oil, and chili flakes",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "5 mins",
    cookTime: "12 mins",
    difficulty: "Very Easy",
    description: "The ultimate 15-minute Italian classic: long spaghetti tossed with golden sliced garlic, extra virgin olive oil, and red chili flakes.",
    requiredIngredients: ["pasta", "garlic", "olive_oil", "chili_flakes", "salt", "black_pepper"],
    optionalIngredients: ["coriander", "cheese"],
    instructions: [
      "Bring a large pot of water to a boil, add salt, and cook spaghetti according to packet instructions. Save 1 cup of pasta water and drain.",
      "In a wide skillet, heat olive oil over medium-low heat. Add thinly sliced garlic and chili flakes.",
      "Cook gently for 2-3 minutes until garlic turns light golden (do not burn or it becomes bitter).",
      "Add 1/3 cup of the reserved hot starchy pasta water to the oil and swirl vigorously to create a silky emulsion.",
      "Toss the hot spaghetti directly into the garlic oil. Toss continuously for 1-2 minutes until every strand is coated in garlic gloss.",
      "Season with cracked black pepper and optional cheese or finely chopped fresh herbs. Serve hot!"
    ],
    momTip: "Cook the garlic slowly on low heat; golden garlic is sweet and aromatic, but burnt garlic turns bitter."
  },
  {
    id: "italian_pasta_al_pomodoro",
    title: "Classic Pasta al Pomodoro",
    subtitle: "Pure comfort: pasta tossed in sweet tomato, onion, and garlic sauce",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Pure comfort: pasta in a sweet, velvety sauce of fresh tomatoes, sautéed onions, garlic, and grated cheese.",
    requiredIngredients: ["pasta", "tomato", "onion", "garlic", "olive_oil", "salt"],
    optionalIngredients: ["basil", "oregano", "black_pepper", "cheese", "sugar"],
    instructions: [
      "Boil pasta in salted water until tender. Save 1/2 cup pasta water and drain.",
      "Heat olive oil in a pan. Sauté finely minced onion and garlic until translucent and fragrant.",
      "Add chopped ripe tomatoes (or tomato puree), salt, and a pinch of black pepper.",
      "Cook down for 10-12 minutes, mashing tomatoes with a wooden spoon until you have a rich, glossy sauce.",
      "Fold in boiled pasta with a splash of reserved pasta water.",
      "Toss over medium heat for 2 minutes so pasta absorbs the tomato flavor.",
      "Garnish with basil or oregano and a snowfall of grated cheese!"
    ],
    momTip: "Kids love this because the sweet, simple tomato-onion base tastes just like a gentle home-cooked comfort meal!"
  },
  {
    id: "italian_white_sauce_pasta",
    title: "Creamy White Sauce Pasta (Bechamel)",
    subtitle: "Silky garlic butter white sauce pasta with melted cheese and herbs",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Silky, rich pasta coated in a luxurious garlic-butter-milk sauce loaded with melted cheese and herbs.",
    requiredIngredients: ["pasta", "butter", "wheat_flour", "milk", "cheese", "garlic", "black_pepper", "salt"],
    optionalIngredients: ["capsicum", "oregano", "chili_flakes", "peas", "mushroom"],
    instructions: [
      "Boil pasta in salted water until tender. Drain and set aside.",
      "Melt 2 tablespoons of butter in a saucepan on low flame. Add minced garlic and cook for 30 seconds.",
      "Add 2 tablespoons whole wheat flour. Cook stirring continuously for 1-2 minutes without browning.",
      "Slowly pour in cold milk in a thin stream while whisking briskly with a wire whisk to ensure zero lumps.",
      "Cook on medium heat until the sauce thickens and coats the back of a spoon.",
      "Stir in grated cheese, black pepper, oregano, and salt until cheese melts into velvety bliss.",
      "Add the boiled pasta and optional sautéed veggies. Toss to coat and serve piping hot!"
    ],
    momTip: "Pour cold milk into the hot flour roux while whisking; the temperature contrast guarantees zero lumps every time!"
  },
  {
    id: "italian_creamy_mushroom_pasta",
    title: "Garlic Butter Mushroom Pasta",
    subtitle: "Sautéed earthy mushrooms and pasta tossed in garlic butter reduction",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Sautéed earthy mushrooms and pasta tossed in a fragrant garlic, butter, and black pepper reduction.",
    requiredIngredients: ["pasta", "mushroom", "garlic", "butter", "black_pepper", "salt"],
    optionalIngredients: ["milk", "cheese", "olive_oil", "oregano"],
    instructions: [
      "Boil pasta until al dente. Reserve 1/2 cup pasta water and drain.",
      "Slice mushrooms evenly. Heat butter in a wide skillet on high heat.",
      "Add mushrooms in a single layer and let them sear undisturbed for 2-3 minutes until golden brown.",
      "Add minced garlic, salt, and freshly ground black pepper. Sauté for 1 minute.",
      "(Optional) Pour in 1/2 cup milk or cream and a handful of cheese to make it creamy.",
      "Add the drained pasta and a few spoonfuls of pasta water.",
      "Toss together on medium heat for 2 minutes until mushrooms coat the pasta.",
      "Serve warm garnished with oregano and cheese."
    ],
    momTip: "Do not crowd the mushrooms or salt them immediately in the pan; high heat lets them sear golden instead of releasing water."
  },
  {
    id: "italian_margherita_flatbread_pizza",
    title: "Stovetop Margherita Flatbread Pizza",
    subtitle: "Crispy tawa pizza with seasoned tomato sauce, melted cheese, and herbs",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "15 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    description: "Crispy tawa flatbread pizza with spiced tomato sauce, melted cheese, and aromatic Italian herbs.",
    requiredIngredients: ["wheat_flour", "tomato_puree", "cheese", "garlic", "olive_oil", "salt"],
    optionalIngredients: ["capsicum", "onion", "oregano", "chili_flakes", "basil"],
    instructions: [
      "Knead whole wheat flour (atta) with a pinch of salt, 1 tsp oil, and warm water into a soft dough. Rest for 10 minutes.",
      "Roll out a medium-thick circle. Prick all over with a fork so it doesn't puff up.",
      "Place on a hot tawa and cook one side for 1-2 minutes until light bubbles appear. Flip.",
      "On the cooked side, spread a layer of tomato puree seasoned with garlic, salt, and oregano.",
      "Top generously with cheese and optional sliced onions and capsicum.",
      "Cover the tawa with a deep dome lid and cook on low heat for 4-5 minutes until the base turns crispy and cheese is bubbly.",
      "Sprinkle oregano and chili flakes, slice and serve immediately!"
    ],
    momTip: "No oven needed! A heavy lid over the tawa traps the heat and gives you perfectly melted pizza in minutes using regular flour."
  },
  {
    id: "italian_pasta_e_fagioli",
    title: "Hearty Pasta e Fagioli (Pasta & Bean Soup)",
    subtitle: "Wholesome Italian stew combining pasta, kidney beans, tomatoes, and garlic",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "Wholesome, comforting Italian stew combining pasta, tender kidney beans, tomatoes, and garlic.",
    requiredIngredients: ["pasta", "rajma", "tomato", "onion", "garlic", "olive_oil", "salt", "black_pepper"],
    optionalIngredients: ["carrot", "oregano", "cheese"],
    instructions: [
      "Use pre-boiled kidney beans. Mash 1/3 of the beans with a fork to help thicken the broth.",
      "Heat olive oil in a soup pot. Sauté diced onions and minced garlic for 3 minutes.",
      "Add chopped tomatoes (or puree), salt, black pepper, and oregano. Simmer for 5 minutes.",
      "Add the beans and 3 cups of water. Bring to a gentle boil.",
      "Add raw small pasta directly into the simmering soup.",
      "Cook on medium heat for 10-12 minutes until pasta is tender and soup is thick and hearty.",
      "Drizzle with a teaspoon of olive oil and top with grated cheese."
    ],
    momTip: "The ultimate crossover meal: uses kidney beans in an authentic Italian grandma-style comfort pasta stew!"
  },
  {
    id: "italian_creamy_spinach_pasta",
    title: "Creamy Spinach & Cheese Pasta",
    subtitle: "Tender pasta tossed with wilted spinach, garlic butter, and creamy cheese",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    description: "Al dente pasta tossed with fresh wilted spinach, garlic butter, and creamy melted cheese.",
    requiredIngredients: ["pasta", "spinach", "garlic", "butter", "cheese", "milk", "salt", "black_pepper"],
    optionalIngredients: ["olive_oil", "oregano", "wheat_flour", "paneer"],
    instructions: [
      "Boil pasta in salted water until tender. Drain.",
      "Wash and chop spinach leaves roughly.",
      "Melt butter in a pan, add minced garlic, and cook for 30 seconds until fragrant.",
      "Add the chopped spinach and sauté for 2 minutes until just wilted.",
      "Pour in milk and stir in grated cheese. Season with salt and black pepper.",
      "Stir until cheese melts into a creamy green-flecked sauce.",
      "Add the boiled pasta and toss for 2 minutes to coat every piece.",
      "Serve warm immediately!"
    ],
    momTip: "The best trick to get kids to eat iron-rich spinach without complaints: disguise it in rich, creamy cheese sauce!"
  },
  {
    id: "italian_cacio_e_pepe",
    title: "Classic Roman Cacio e Pepe",
    subtitle: "Iconic minimal pasta made with melted cheese, black pepper, and butter",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    description: "Iconic minimal Italian pasta made with just cheese, coarsely cracked black pepper, and butter.",
    requiredIngredients: ["pasta", "cheese", "butter", "black_pepper", "salt"],
    optionalIngredients: ["olive_oil"],
    instructions: [
      "Boil pasta in salted water until al dente. Reserve 1 cup of cloudy pasta water and drain.",
      "In a wide skillet, dry roast freshly cracked black pepper on medium heat for 1 minute until fragrant.",
      "Add 1 tbsp butter and 1/3 cup of pasta water to the skillet. Swirl to combine.",
      "Add the hot pasta into the skillet and toss.",
      "Remove skillet from heat (crucial step so cheese doesn't clump).",
      "Add grated cheese and another splash of hot pasta water. Toss vigorously until a glossy, creamy sauce coats every noodle.",
      "Serve immediately while steaming hot!"
    ],
    momTip: "Take the pan off the flame before tossing in the cheese; direct high heat causes cheese to clump instead of turning creamy."
  },
  {
    id: "italian_tomato_risotto",
    title: "Creamy Tomato & Garlic Risotto",
    subtitle: "Slow-cooked creamy Italian rice simmered with tomatoes, garlic, butter, and cheese",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    description: "Italian style slow-cooked creamy rice simmered with sweet tomatoes, garlic, butter, and cheese.",
    requiredIngredients: ["rice", "tomato_puree", "onion", "garlic", "butter", "cheese", "salt", "black_pepper"],
    optionalIngredients: ["olive_oil", "basil", "oregano"],
    instructions: [
      "Finely chop onion and garlic.",
      "Heat butter and olive oil in a wide pot. Sauté onion and garlic until translucent and tender.",
      "Add raw rice and toast in the butter for 2 minutes until glossy.",
      "Add tomato puree, salt, and black pepper. Stir well.",
      "Add hot water 1 cup at a time, stirring frequently until liquid is absorbed before adding the next cup.",
      "Cook for about 15-18 minutes until rice is creamy and tender.",
      "Take off heat and stir in an extra spoon of butter and grated cheese until luscious and velvety.",
      "Serve hot garnished with herbs!"
    ],
    momTip: "Stirring the rice releases its starch, creating a decadent creamy texture without needing any heavy cream!"
  },
  {
    id: "italian_chicken_alfredo",
    title: "Creamy Chicken Alfredo Pasta",
    subtitle: "Tender sautéed chicken strips in a rich garlic butter parmesan cheese sauce",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "Tender seasoned chicken strips and al dente pasta smothered in a rich, buttery garlic cheese sauce.",
    requiredIngredients: ["pasta", "chicken", "garlic", "butter", "milk", "cheese", "salt", "black_pepper"],
    optionalIngredients: ["oregano", "capsicum", "olive_oil", "wheat_flour"],
    instructions: [
      "Boil pasta until al dente. Drain.",
      "Cut chicken into thin bite-sized strips. Season with salt, black pepper, and garlic.",
      "Heat 1 tbsp butter in a pan. Sauté chicken pieces on medium-high heat for 6-8 minutes until golden and cooked through. Remove to a plate.",
      "In the same pan, melt butter and sauté minced garlic for 30 seconds.",
      "Add 1 tbsp flour, whisk for a minute, then slowly whisk in milk until smooth and thickened.",
      "Stir in grated cheese, black pepper, and salt until cheese is fully melted and velvety.",
      "Fold in the cooked chicken and pasta. Toss for 1-2 minutes until coated in sauce.",
      "Serve hot with a sprinkle of oregano!"
    ],
    momTip: "Searing chicken in the same pan builds a caramelized base that makes the Alfredo white sauce taste twice as rich!"
  },
  {
    id: "italian_garlic_herb_pasta",
    title: "Tutti Veggie Garlic Herb Pasta",
    subtitle: "Colorful bell peppers, onions, and peas tossed in herb-infused olive oil",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "12 mins",
    difficulty: "Very Easy",
    description: "Colorful sautéed bell peppers, onions, and peas tossed with pasta in an herb-infused olive oil sauce.",
    requiredIngredients: ["pasta", "capsicum", "onion", "garlic", "olive_oil", "oregano", "salt", "black_pepper"],
    optionalIngredients: ["peas", "tomato", "chili_flakes", "cheese"],
    instructions: [
      "Boil pasta in salted water until al dente. Reserve 1/2 cup pasta water and drain.",
      "Slice bell peppers and onions into thin strips.",
      "Heat olive oil in a wide pan. Add minced garlic and sauté for 30 seconds.",
      "Add onions, capsicum, and optional peas. Stir-fry on medium-high heat for 3-4 minutes so vegetables stay crisp.",
      "Season with oregano, black pepper, chili flakes, and salt.",
      "Toss in the boiled pasta with a splash of reserved pasta water to bind.",
      "Toss on high heat for 1 minute. Top with grated cheese if desired and serve hot!"
    ],
    momTip: "A 12-minute lifesaver dinner when everyone is hungry and you have basic pasta and veggies in the fridge!"
  },
  {
    id: "italian_minestrone_soup",
    title: "Classic Italian Minestrone Vegetable Soup",
    subtitle: "Hearty vegetable, pasta, and bean soup simmered in fragrant tomato herb broth",
    cuisine: "italian",
    mealType: ["lunch", "dinner"],
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    description: "Nourishing, warming Italian vegetable soup with diced carrots, peas, tomatoes, pasta, garlic, and herbs.",
    requiredIngredients: ["pasta", "carrot", "tomato", "onion", "garlic", "olive_oil", "peas", "salt", "black_pepper"],
    optionalIngredients: ["spinach", "oregano", "cheese"],
    instructions: [
      "Finely dice carrots, onions, and garlic.",
      "Heat olive oil in a soup pot. Sauté onions and garlic for 3 minutes until soft.",
      "Add diced carrots, green peas, and tomatoes. Sauté for 3 minutes.",
      "Pour in 4 cups of water, salt, and black pepper. Bring to a gentle boil.",
      "Add small pasta and simmer for 10-12 minutes until vegetables and pasta are tender.",
      "Stir in optional spinach or fresh herbs at the very end.",
      "Ladle into bowls and top with grated cheese."
    ],
    momTip: "A delicious way to use up whatever fresh vegetables are in the fridge into a warming, healthy family dinner."
  }
];

// Presets for quick pantry configuration
const PANTRY_PRESETS = {
  pakistani_staples: {
    name: "Pakistani Kitchen Staples",
    desc: "Chicken, Potatoes, Onions, Tomatoes, Ginger, Garlic, Wheat Flour, Basmati Rice, Lentils & Spices",
    ingredients: [
      "chicken", "potato", "onion", "tomato", "ginger", "garlic", "green_chili", "coriander", "peas",
      "wheat_flour", "rice", "besan", "suji", "bread", "toor_dal", "moong_dal",
      "eggs", "yogurt", "milk", "butter",
      "cooking_oil", "salt", "turmeric", "cumin", "coriander_powder", "red_chili_powder", "garam_masala", "tea_leaves", "sugar"
    ]
  },
  pakistani_and_italian: {
    name: "Pakistani & Italian Kitchen Essentials",
    desc: "Pakistani staples PLUS Pasta, Olive Oil, Tomato Puree, Cheese & Italian Herbs",
    ingredients: [
      "chicken", "minced_meat", "potato", "onion", "tomato", "ginger", "garlic", "green_chili", "coriander", "peas", "capsicum", "spinach",
      "wheat_flour", "rice", "besan", "suji", "bread", "toor_dal", "moong_dal", "urad_dal", "rajma", "chana", "black_chana",
      "eggs", "paneer", "yogurt", "milk", "cheese", "butter",
      "pasta", "olive_oil", "tomato_puree", "oregano", "chili_flakes", "black_pepper",
      "cooking_oil", "salt", "turmeric", "cumin", "coriander_powder", "red_chili_powder", "garam_masala", "tea_leaves", "sugar"
    ]
  },
  italian_only: {
    name: "Italian Kitchen Essentials",
    desc: "Pasta, Bread, Cheese, Olive Oil, Tomatoes, Garlic, Eggs, Milk & Herbs",
    ingredients: [
      "tomato", "onion", "garlic", "capsicum", "mushroom", "spinach", "carrot", "peas",
      "bread", "pasta", "rice", "wheat_flour",
      "cheese", "butter", "milk", "eggs", "chicken",
      "olive_oil", "tomato_puree", "oregano", "basil", "chili_flakes", "black_pepper",
      "salt", "sugar"
    ]
  },
  minimal_veggie: {
    name: "Quick Minimal Veggie",
    desc: "Just Potato, Onion, Tomato, Flour, Rice, Moong Dal & basic spices",
    ingredients: [
      "potato", "onion", "tomato", "ginger", "green_chili",
      "wheat_flour", "rice", "moong_dal",
      "cooking_oil", "salt", "turmeric", "cumin"
    ]
  }
};
