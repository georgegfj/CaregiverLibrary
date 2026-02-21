# CaregiverHub — TTSH Resource Centre

An all-in-one caregiver resources webapp sourced from Tan Tock Seng Hospital (TTSH), Singapore.

---

## Purpose

CaregiverHub brings together over 100 evidence-based resources from TTSH's caregiver pages and health library into a single, easy-to-navigate interface. It is designed for:

- **Caregivers** — finding self-care guidance and patient care support
- **Family members** — understanding how to support an active caregiver
- **Clinical staff** — a reference or handout tool for patients and families

---

## Navigation Map (3-click minimum to endpoint)

```
Home (index.html)
  ↓ Click 1: Choose a category
Category (category.html?id=...)
  ↓ Click 2: Choose a topic
Sub-category (subcategory.html?pillar=...&sub=...)
  ↓ Click 3: Open resource → TTSH page (new tab)
```

### The 4 Pillars

| Pillar | Description | Topics |
|--------|-------------|--------|
| **For Yourself** | Caregiver self-care | Physical wellbeing, mental health, nutrition, caregiver journey, rehabilitation |
| **For Your Care Recipient** | Patient care guidance | Senior health/dementia, stroke, neurology, diabetes, heart, kidney, cancer, mobility |
| **Community & Support** | Programs & services | Caregiver programmes, support groups, financial help, end-of-life care |
| **Tools & Reference** | Clinical references | Know Your Meds (6-part), medication administration, meds by condition, vaccinations |

---

## File Structure

```
CaregiverWebapp/
├── index.html          Home page — 4 pillar cards
├── category.html       Category view (query-param driven: ?id=)
├── subcategory.html    Sub-category + resource cards (?pillar=&sub=)
├── style.css           Design system — clinical palette
├── app.js              Navigation logic, rendering, search
├── data/
│   └── resources.js    All resource data (~100 resources across 4 pillars)
└── README.md           This file
```

---

## Design System

- **Primary blue:** `#0057A8` (TTSH brand)
- **Teal accent:** `#00A896`
- **Orange (self):** `#E8763A`
- **Purple (tools):** `#6B4FBB`
- **Background:** `#F5F7FA`
- **Fully responsive** — mobile first, 1-column on small screens
- **Accessible** — ARIA labels, keyboard navigation, focus states

---

## Data Source

All resources are sourced from:

- **Caregiver pages:** `https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/default.aspx`
- **Health Library:** `https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/Pages/default.aspx`
- **Pharmacy / Medications:** `https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/`

Resources link directly to the originating TTSH pages and open in new tabs. No content is reproduced — only titles, brief descriptions, and tags are stored locally.

---

## How to Add or Update Resources

Open `data/resources.js` and find the relevant pillar → subcategory. Add an entry to the `resources` array:

```js
{
  title: "Resource Title",
  description: "One to two sentence description of what this resource covers.",
  tags: ["tag1", "tag2"],
  url: "https://www.ttsh.com.sg/full-url-to-resource"
}
```

To add a new subcategory, add an object to the `subcategories` array of the relevant pillar with a unique `id`, `label`, `description`, and `resources` array.

---

## Quick Access Links

| Feature | URL / Contact |
|---------|--------------|
| Caregiver Assessment | `https://form.gov.sg/5fbb689063ac950016770fbb` |
| CarePal App (NHG Health) | `http://onelink.to/db857z` |
| AIC Hotline | 1800-650-6060 |
| TTSH Main Line | 6256 6011 |
| AIC Link @ TTSH | Centre for Health Activation, L1, TTSH Atrium Block |

---

## Deployment

No build tools required. This is a pure static site.

- **Local:** Open `index.html` in any modern browser
- **GitHub Pages:** Push to a repository, enable Pages from the root of `main`
- **Netlify / Vercel:** Drag and drop the folder for instant deployment

---

## Approach

The webapp was designed around three principles:

1. **Minimum friction** — caregivers are time-poor and stressed. Category labels use plain language, not clinical jargon.
2. **3-click depth** — all resources require at least 3 deliberate clicks (Home → Category → Sub-category → Resource), reducing accidental navigation and ensuring users arrive at the right content.
3. **Extensible data model** — all content lives in `resources.js`, a structured JS object. Non-technical staff can update resources without touching HTML or CSS.

---

## Disclaimer

This tool is an information resource only. All clinical content belongs to Tan Tock Seng Hospital. For medical advice, users should consult their healthcare provider or contact TTSH directly.

© 2026 CaregiverHub · Powered by TTSH Health Library
