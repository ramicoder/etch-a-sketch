# Etch-a-Sketch Grid (Flexbox Edition)

A browser-based sketch pad inspired by the classic **Etch-a-Sketch**, built with **HTML, CSS, and vanilla JavaScript**.  
This project is part of **The Odin Project – Foundations curriculum** and focuses on DOM manipulation, event handling, and Flexbox layout.

---

## 🔹 Features

- **Dynamic grid generation**
  - Default grid: **16 × 16**
  - User can generate a new grid with a custom size (2–100 per side)
  - Grid always fits inside a fixed container

- **Hover drawing**
  - Hovering over squares colors them like a pen
  - Uses mouse interaction events for drawing

- **Color modes**
  - Standard black drawing mode
  - Random RGB color mode toggle

- **Grid reset**
  - Existing grid is fully removed before generating a new one
  - No page reload required

- **Input validation**
  - Ensures user input is numeric
  - Enforces a safe grid-size limit to avoid performance issues

---

## 🔹 Technical Highlights

- **DOM created entirely with JavaScript**
  - All grid elements are generated dynamically
  - No manual HTML duplication

- **Flexbox-only layout**
  - Grid constructed using nested flex containers
  - CSS Grid intentionally avoided per project requirements

- **Event-driven behavior**
  - Event listeners attached to grid squares after creation
  - Clean regeneration without duplicated listeners

- **State management**
  - Simple global toggle to switch between color modes

---

## 🔹 What I Learned

- How `innerHTML` removes all child elements cleanly
- Proper ordering of DOM creation and event listeners
- Handling user input safely with `isNaN`
- Using Flexbox to build a responsive grid layout
- Managing UI behavior with simple JavaScript state

---

## 🔹 Possible Improvements

- Add preset color buttons (red, blue, green, etc.)
- Add an eraser mode
- Add hover-on-click-only drawing mode

---

## 🔹 Tech Stack

- **HTML5**
- **CSS3 (Flexbox)**
- **Vanilla JavaScript**

---

## ✅ Status

Project completed successfully as part of **The Odin Project**.  
All required features and extra credit objectives have been implemented.
