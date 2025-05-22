# 🚲 Which Bike Should I Get?

A simple, static HTML site that helps users choose a bicycle based on their height, preferred riding type, budget, and terrain preference. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no backends.

---

## 📦 Project Structure

---

## 🚀 How It Works

1. **User fills out the quiz** with their height, preferred riding type, budget, and terrain.
2. **JavaScript filters the bike dataset** (from `bike_data.json`) based on those inputs.
3. **Matching bike recommendations are displayed** with descriptions and affiliate links.

---

## 📊 Data Format (`bike_data.json`)

Each bike entry in the JSON file follows this structure:

```json
{
  "name": "Schwinn Phocus 1400",
  "height": ["medium", "tall"],
  "type": ["road"],
  "terrain": ["paved"],
  "budget": "mid",
  "description": "Lightweight road bike with drop bars and quick shifting.",
  "affiliateLink": "https://amzn.to/example"
}
 How to Use
Clone or download the project folder.

Open index.html in a web browser.

Fill out the quiz form and get instant recommendations!

No server setup required — works as a fully static website.

📌 Future Ideas
Add a feedback popup like the TV picker site.

Load data from a live API.

Add images to each bike card.

Add a “clear results” button.
