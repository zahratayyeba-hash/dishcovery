# 🥘 Dishcovery — 7-Day Stress-Free Meal Planner for Desi Moms

[![GitHub Pages Deployment](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen?style=flat&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cuisines](https://img.shields.io/badge/Cuisines-Desi%20%26%20Italian-orange)](#)
[![Theme](https://img.shields.io/badge/Theme-Light%20Only-blue)](#)

> **Solving daily *"Aaj kya banayein?"* fatigue once and for all.**
> Dishcovery creates a tailored **7-day schedule (21 meals: Breakfast, Lunch, Dinner)** based strictly on ingredients already available in your kitchen.

---

## ✨ Key Highlights

- **Complete 7-Day Meal Plan (21 Meals)**: Generates 7 breakfasts, 7 lunches, and 7 dinners in one tap with zero consecutive repeats.
- **Strict Kitchen Inventory Matching**: Only suggests recipes whose core ingredients are **100% available** in your pantry. If you don't have the ingredients, it will never suggest the dish!
- **Strictly Desi & Italian Cuisines**: Authentic Pakistani dishes (Biryani, Chicken Karahi, Aloo Paratha, Daal Chawal, Nihari, Korma, etc.) paired with classic Italian favorites (Frittata, Spaghetti Aglio e Olio, Penne Arrabbiata, Fettuccine Alfredo, Chicken Parmesan, etc.).
- **Mobile-First & Touch-Friendly**: Designed for busy moms checking meals from their phones with swipeable day pills, sticky actions, and large touch targets.
- **100% Light Theme**: Clean, warm, high-contrast culinary aesthetic (warm linen, saffron, terracotta, and emerald) optimized for kitchen lighting.
- **Family Sharing**: One-tap **Copy for WhatsApp** to send the weekly menu to family groups, plus a clean **Print for Fridge** view.
- **Zero Distractions**: No grocery shopping links, no calorie counting or macros, no restaurant ads.

---

## 🚀 Live Demo on GitHub Pages

Once deployed, your live site will be accessible at:
```
https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/
```

---

## 🛠️ How to Deploy on GitHub Pages (Step-by-Step)

### Step 1: Create a New Repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new).
2. Name your repository (for example: `dishcovery`).
3. Set visibility to **Public** (required for free GitHub Pages).
4. Do **not** initialize with a README (this repository already has one).
5. Click **Create repository**.

### Step 2: Push the Code from Your Terminal
Open PowerShell or your command prompt in this project folder:
```powershell
cd C:\Users\wasim\.gemini\antigravity\scratch\dishcovery

# 1. Initialize git
git init
git branch -M main

# 2. Add all project files and make initial commit
git add .
git commit -m "Initial commit: Dishcovery 7-day meal planner"

# 3. Link your GitHub repository (replace with your actual GitHub username and repo name)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/dishcovery.git

# 4. Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in 2 Clicks
1. On your GitHub repository page, click **Settings** (gear icon at the top right).
2. In the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and leave the folder as `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, GitHub Pages will deploy your site and give you your live URL!

---

## 📂 Project Structure

```
dishcovery/
├── index.html       # Primary Single-Page Application (HTML5, Tailwind CSS, Vanilla JS)
├── code.html        # Synchronized copy of the application
├── .nojekyll        # Disables Jekyll processing for instant, flawless GitHub Pages serving
├── DESIGN.md        # Comprehensive Design System & UI Specifications
└── README.md        # Project documentation & setup instructions
```

---

## 👩‍🍳 Built for Desi Moms
Eliminate the daily question of *"Aaj khane mein kya hai?"* and enjoy stress-free, wholesome meal planning.
