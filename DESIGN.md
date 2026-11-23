# Dishcovery — Design System & Architecture Specification

## 1. Product Overview
- **Name**: Dishcovery
- **Target User**: Desi moms who struggle with deciding what to cook every day for their families ("Aaj kya banayein?").
- **Problem Solved**: Daily decision fatigue from planning 3 meals a day: Breakfast, Lunch, and Dinner (21 meals weekly).
- **Primary Success Outcome**: Generates a complete 7-day meal plan (21 meals) based strictly on ingredients already available at home, saving time and eliminating the stress of meal planning.
- **Constraints Adhered To**:
  1. Mobile-friendly application (responsive, touch targets >= 44px, sticky action CTAs, mobile day switcher).
  2. Only Desi Pakistani and Italian cuisines.
  3. Single-page web application (SPA) with smooth tab switching and zero page reloads.
  4. Recipes must use only available ingredients (strict mathematical subset matching; if ingredients are missing, the recipe is never suggested).
  5. Simple and easy-to-use interface with friendly pantry categories, quick presets, and clear meal cards.
  6. English language only.
  7. Strict Light Theme (No dark theme).
- **Non-Goals (Enforced)**:
  - ❌ No grocery shopping or online ordering features.
  - ❌ No calorie counting or diet tracking.
  - ❌ No restaurant or takeaway recommendations.
  - ❌ No complicated nutritional analysis.
  - ❌ No support for cuisines other than Desi Pakistani and Italian.

---

## 2. Visual Design System (Light Theme Only)

### Color Palette
- **Canvas / Background**: `#FAF7F2` (Warm Linen Cream — soothing, culinary, welcoming)
- **Card Surfaces**: `#FFFFFF` with hairline borders (`#E2E8F0` / `#FED7AA`)
- **Brand Primary Accent**: Warm Terracotta / Saffron Orange (`#EA580C`, hover `#C2410C`)
- **Desi Pakistani Accent**: Deep Culinary Emerald Green (`#047857`, soft background `#ECFDF5`)
- **Italian Cuisine Accent**: Tuscan Terracotta Red (`#B91C1C`, soft background `#FEF2F2`)
- **Text Foreground**: Deep Charcoal Slate (`#0F172A`), Secondary Muted Slate (`#64748B`)
- **Dark Theme**: Completely omitted in accordance with explicit constraints.

### Typography
- **Primary Typeface**: Plus Jakarta Sans (Google Fonts)
- **Hierarchy**:
  - Display / App Title: Bold 20px / 24px (`font-black`)
  - Day Headers: 24px Bold (`font-extrabold`)
  - Dish Titles: 14px - 16px Semibold/Bold
  - Body & Instructions: 13px - 14px Regular / Medium with 1.6x line-height for effortless reading while cooking in the kitchen.

---

## 3. Core Functional Modules

### A. Kitchen Inventory Engine
- **Categorization**:
  1. Grains, Flours & Lentils (Atta, Basmati Rice, Pasta, Moong Daal, Chickpeas, etc.)
  2. Vegetables & Aromatics (Onions, Tomatoes, Potatoes, Garlic, Ginger, Chillies, Spinach, etc.)
  3. Meats, Poultry & Dairy (Chicken, Minced Keema, Eggs, Milk, Yogurt, Cheese, Butter)
  4. Oils, Herbs & Sauces (Cooking Oil, Olive Oil, Tomato Puree, Fresh Coriander, Basil)
- **Smart Presets**:
  - `Standard Desi Kitchen`: Pre-selects common Pakistani home essentials in 1 tap.
  - `Desi & Italian Home`: Equips both Desi and Italian pantry staples.
  - `Clear All`: Resets inventory.
- **Custom Ingredient Input**: Allows moms to type any custom ingredient they have.

### B. Strict Recipe Filtering Engine
- If a recipe lists `['chicken', 'tomatoes', 'ginger', 'garlic', 'green_chillies', 'cooking_oil']`, it **only** appears if all of those are checked.
- If even one required core ingredient is missing, the recipe is not suggested.
- Standard spices (Salt, Red Chilli, Turmeric, Cumin) are assumed in any home spice box.

### C. 7-Day Meal Plan Generator (21 Meals)
- Generates 7 Breakfasts, 7 Lunches, and 7 Dinners (21 meals).
- Prevents back-to-back duplicate dishes on adjacent days.
- Supports cuisine preference: Balanced Mix, Mostly Desi, or Mostly Italian.
- **Interactive Controls**:
  - 🔄 **Re-roll Unlocked**: Regenerates fresh ideas while preserving locked meals.
  - 🔒 **Lock Meal**: Allows mom to pin family favorites to specific days.
  - 🔀 **Swap Meal**: Cycles individual meal slots with alternative cookable recipes.
  - 📋 **Copy for WhatsApp**: Formats a clean text schedule ready to send to family groups.
  - 🖨️ **Print View**: Formats a clean printable checklist for the kitchen fridge.

### D. Step-by-Step Recipe Guide Modal
- Click any dish on the meal plan or browser to see:
  - Time breakdown (Prep vs Cook)
  - Green-checked ingredients (confirming they are already at home)
  - Numbered, practical cooking steps
  - "Mom's Quick Kitchen Tip" for foolproof cooking.
