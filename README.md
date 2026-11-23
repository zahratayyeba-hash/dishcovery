# 👩‍🍳 DishCovery - Weekly Meal Planner (Pakistani & Italian)

> **Eliminate daily meal decision fatigue for moms and families.**  
> A mobile-first, single-page web application that generates a complete **7-day meal plan (21 meals: Breakfast, Lunch, Dinner)** using **strictly** the ingredients already available in your kitchen.  
> Exclusively featuring authentic **Pakistani** and classic **Italian** home cooking, with an interface completely in **100% English**.

---

## 🎯 Target User & Problem Solved
- **User:** Moms and home cooks who struggle every day with *"What should I cook today?"* for their families.
- **Problem:** Decision fatigue planning three different meals every single day (breakfast, lunch, dinner = 21 meals per week).
- **Solution:** A 1-click intelligent meal generator that builds a full 21-meal weekly plan matching available pantry ingredients, complete with quick dish swapping and instant WhatsApp sharing to family or domestic helpers.

---

## 🛡️ Adherence to Constraints & Non-Goals

| Requirement / Constraint | Implementation Status |
| :--- | :--- |
| **1. Mobile-friendly application** | ✅ Responsive mobile-first layout, touch-friendly ingredient chips, sticky navigation tabs, bottom mobile action bar. |
| **2. Only Pakistani & Italian cuisines** | ✅ Curated database exclusively featuring authentic Pakistani home comfort meals and classic family-friendly Italian dishes. No other cuisines. |
| **3. Pure English language** | ✅ 100% English interface, dish titles, instructions, categories, and WhatsApp export. All Hindi text and scripts removed. |
| **4. Single-page web application** | ✅ Zero-dependency, pure client-side SPA (`index.html`, `app.js`, `recipes.js`, `styles.css`). Instant navigation, zero reload. |
| **5. Recipes use ONLY available ingredients** | ✅ Strict matching engine: If even 1 required ingredient is missing from the kitchen inventory, the recipe is **never** suggested. |
| **6. Simple and easy-to-use interface** | ✅ Designed for busy home cooks: 1-tap kitchen staple presets, clean ingredient chips, large buttons, quick 1-click meal swap. |
| **7. NO Dark Theme** | ✅ Warm, bright, comforting light aesthetic inspired by olive green, golden wheat, ivory linen, and fresh basil. |
| **8. NO grocery shopping / ordering** | ✅ Non-goal respected: strictly focuses on cooking with what is already at home. |
| **9. NO calorie counting / diet tracking** | ✅ Non-goal respected: zero macros, calories, or diet restrictions. Focus is 100% on tasty family meals. |
| **10. NO takeaway / restaurant links** | ✅ Non-goal respected: 100% home cooking recipes with clear step-by-step instructions. |

---

## 🍳 Curated Cuisines & Recipes

### 🇵🇰 Pakistani Home Cooking (31 Dishes)
- **Breakfasts:** Pakistani Halwa Puri & Spiced Chana, Crispy Spiced Potato Paratha (Aloo Paratha), Pakistani Spiced Omelette & Lachha Paratha, Spiced Minced Meat Paratha (Qeema Paratha), Pakistani Khagina (Spiced Scrambled Eggs), Aloo Anda Bhujia with Warm Roti, Cardamom Doodh Patti Chai & Buttered Toast, Homestyle Semolina Halwa (Suji Halwa), Savory Gram Flour Crepes (Besan Chilla), Crispy Layered Paratha with Sweet Dahi & Chai.
- **Lunches & Dinners:** Lahori Street-Style Chicken Karahi, Homestyle Aloo Chicken Salan, Comforting Yellow Daal Tadka & Cumin Basmati Rice, Pakistani Chicken Biryani with Saffron Rice, Fragrant Chicken Yakhni Pulao, Homestyle Aloo Qeema (Minced Meat & Potatoes), Dhaba-Style Spiced Daal Mash (White Lentil Fry), Pakistani Shahi Chicken Korma, Crispy Pakistani Okra & Caramelized Onion Fry, Slow-Cooked Palak Chicken (Spinach & Chicken), Lahori Spiced Chickpea Curry (Chana Salan), Zesty Chicken Jalfrezi with Bell Peppers, Homestyle Mix Sabzi (Potatoes, Peas & Carrots), Nutritious Kala Chana (Brown Chickpeas Curry) with Rice, Pakistani Homestyle Red Bean Curry (Lobia), Soothing Moong Daal & Rice Khichdi, Quick Spiced Cumin Potatoes (Zeera Aloo), Homestyle Spiced Boiled Egg Curry, Bell Pepper & Minced Chicken Stir-Fry, Velvety Spinach Curry with Cottage Cheese (Palak Paneer), Sweet Green Peas & Cottage Cheese Curry.

### 🇮🇹 Italian Home Cooking (19 Dishes)
- **Breakfasts & Brunches:** Classic Italian Tomato Bruschetta, Skillet Italian Veggie Frittata, Caprese Cheese & Tomato Toast, Tuscan Herbed Scrambled Eggs with Garlic Toast, Crispy Garlic Butter Cheese Panini, Sweet Ricotta / Cheese Breakfast Crepes.
- **Lunches & Dinners:** Fiery Penne all'Arrabbiata, Quick Spaghetti Aglio e Olio, Classic Pasta al Pomodoro, Creamy White Sauce Pasta (Bechamel), Garlic Butter Mushroom Pasta, Stovetop Margherita Flatbread Pizza, Hearty Pasta e Fagioli (Pasta & Bean Soup), Creamy Spinach & Cheese Pasta, Classic Roman Cacio e Pepe, Creamy Tomato & Garlic Risotto, Creamy Chicken Alfredo Pasta, Tutti Veggie Garlic Herb Pasta, Classic Italian Minestrone Vegetable Soup.

---

## 🚀 How to Run

### Instant 1-Click Launch (Recommended)
Double-click `start.bat` in this folder, or simply open `index.html` in any web browser (Chrome, Edge, Safari, Firefox).

### Local Server Launch (Optional)
Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
Open [http://localhost:8080](http://localhost:8080) in your browser.
