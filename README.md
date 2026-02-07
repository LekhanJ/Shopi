# Shopi E-commerce Application

This project is a functional prototype of a modern E-commerce site, inspired by clean, minimalist shopping platforms. It demonstrates advanced frontend skills, API integration, global state management, and user authentication.

The application displays:
* Dynamic product feed fetched from a public API
* Real-time search and category filtering
* Shopping cart with quantity management
* User authentication (Login/Sign Up)
* Order history tracking

## 🎬 Demo

![Demo](src/assets/demo.gif)

## 🏗️ Project Structure
```
project-root/
├── src/
│   ├── Components/     # Reusable UI (Card, Navbar, Layout, SideMenus)
│   ├── Context/        # Global State (Cart, Auth, Filters)
│   ├── Pages/          # Views (Home, MyOrders, SignIn, etc.)
│   ├── firebase/       # Firebase configuration
│   ├── utils/          # Helper functions (TotalPrice)
│   └── main.jsx        # Entry point
│
├── index.html
├── vite.config.js
├── package.json
└── tailwind.config.js
```

## 🛠 Tech Stack

### Frontend
* React (Vite)
* Tailwind CSS (Styling)
* Lucide React (Icons)
* React Router DOM (Navigation)

### Backend / Services
* Firebase Authentication (User management)
* Platzi Fake Store API (Product data)
* React Context API (State Management - no Redux needed)

## ▶️ How to Run the Project

### 1️⃣ Configure Firebase

Create a file named `config.js` inside `src/firebase/` and add your credentials:
```javascript
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other keys
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 2️⃣ Run the Frontend

Open a terminal window in the project folder:
```bash
npm install
npm run dev
```

The application will run at:
```
http://localhost:5173
```

## 🔌 API Information

### Endpoint
```
GET https://api.escuelajs.co/api/v1/products
```

### Purpose

Populates the store with dynamic data including:
* Product Images
* Titles & Descriptions
* Prices
* Category Names

## 📊 Where Data is Stored

The application state is managed centrally using React Context inside:
```
src/Context/index.jsx
```

Example of state structure:
```javascript
const ShoppingCartContext = createContext();

// Global State
const [cartProducts, setCartProducts] = useState([]); // Items in cart
const [user, setUser] = useState(null);               // Auth status
const [items, setItems] = useState(null);             // All API products
const [order, setOrder] = useState([]);               // Checkout history
```

No traditional SQL database is used; user session is handled by Firebase, and session data is managed in memory during use.

## 🧠 How App Logic Works

The core logic handles filtering and cart management dynamically.

### Filtering Rules

* **Search Bar**: Debounced input filters products by `title`.
* **Category Tabs**: Clicking a tab (e.g., "Electronics") filters products by `category.name`.
* **Combined**: Users can search within a specific category.

### Cart Logic

* **Add Item**: Checks if item exists. If yes → increments quantity. If no → pushes to array.
* **Checkout**: Calculates total price `(price * quantity)`, saves the snapshot to `orders` array, and clears the cart.

## ✅ Features Implemented

* Clean, responsive grid UI
* User Authentication (Sign In / Sign Up)
* Product Details Slide-out (Side Menu)
* Shopping Cart Slide-out (Side Menu)
* Order History (My Orders)
* Search & Filter functionality

## 📌 Notes

This project focuses on Component Composition and React Hooks (`useContext`, `useEffect`, `useMemo`) to demonstrate clean, maintainable frontend architecture without relying on heavy external state libraries.
