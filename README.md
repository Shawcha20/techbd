# 🚀 TechHub — Modern E-Commerce Frontend (Next.js App Router)

TechHub is a **modern, fully responsive frontend e-commerce platform** built with **Next.js (App Router)**, **React**, **Tailwind CSS v4**, and **Framer Motion**.
It demonstrates real-world frontend architecture including **authentication state management**, **protected routes**, **theme handling**, and **reusable UI utilities** — all without a backend.

---

## 📌 Project Overview

TechHub simulates a professional e-commerce experience with:

* A **multi-section landing page**
* **Product listing & details**
* **Mock authentication** with cookies + React Context
* **Protected routes** (Add Item)
* **Dark / Light theme** with system preference support
* **Animations & transitions** using Framer Motion
* **Toast & confirm dialogs** using SweetAlert2
* Clean, scalable project structure

> ⚠️ This is a **frontend-only project** intended for learning and demonstration purposes.

---

## 🧰 Tech Stack

| Technology               | Usage                         |
| ------------------------ | ----------------------------- |
| **Next.js (App Router)** | Routing, layouts, rendering   |
| **React**                | UI & state management         |
| **Tailwind CSS v4**      | Styling with CSS variables    |
| **Framer Motion**        | Animations & page transitions |
| **SweetAlert2**          | Toasts & confirmation dialogs |
| **Context API**          | Authentication & theme state  |
| **Cookies**              | Mock auth persistence         |
| **JavaScript (JSX)**     | No TypeScript                 |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── items/
│   │   ├── [id]/
│   │   └── page.jsx
│   ├── login/
│   │   └── page.jsx
│   ├── add-item/
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx
│
├── Components/
│   ├── AuthProvider/
│   │   └── AuthProvider.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── ThemeProvider/
│   │   └── ThemeProvider.jsx
│   ├── ItemCard/
│   │   └── ItemCard.jsx
│   └── ui/
│       └── button.jsx
│
├── data/
│   └── product.js
│
├── lib/
│   ├── auth.js
│   └── alerts.js
│
└── Utils/
    └── utils.js
```

---

## 🌐 Routes

| Route         | Access                       |
| ------------- | ---------------------------- |
| `/`           | Public (Landing Page)        |
| `/items`      | Public (Product List)        |
| `/items/[id]` | Public (Product Details)     |
| `/login`      | Public                       |
| `/add-item`   | 🔒 Protected (Auth Required) |

---

## 🔐 Authentication (Mock)

**Demo Credentials**

```
Email: user@example.com
Password: password123
```

### How authentication works:

* Credentials validated on login
* Cookies are set for persistence
* Auth state stored in **React Context**
* Navbar updates instantly (no refresh)
* Protected routes block unauthenticated access

> ⚠️ Not production-secure — for demo only

---

## 🎨 Theme System

* Light & Dark modes
* Uses **CSS variables**
* Supports **system theme preference**
* State managed via `ThemeProvider`
* Persistent across reloads

---

## 🔔 Notifications & Alerts

Using **SweetAlert2** for:

* Success messages
* Error messages
* Warnings
* Confirmation dialogs
* Loading indicators

Reusable helpers live in:

```
src/lib/alerts.js
```

Example usage:

```js
const result = await showConfirm("Add item to cart?");
if (result.isConfirmed) {
  showSuccess("Item added successfully");
}
```

---

## ✨ Key Features

✅ Multi-section landing page
✅ Product listing & details
✅ Mock authentication with cookies
✅ React Context auth state
✅ Protected routes
✅ Dark / Light theme
✅ SweetAlert2 notifications
✅ Framer Motion animations
✅ Responsive design
✅ Reusable components

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📦 Available Scripts

| Command         | Description      |
| --------------- | ---------------- |
| `npm run dev`   | Start dev server |
| `npm run build` | Production build |
| `npm start`     | Run production   |
| `npm run lint`  | Lint code        |

---

## 🚀 Deployment

Recommended: **Vercel**

1. Push project to GitHub
2. Import into Vercel
3. Deploy instantly

---

## ⚠️ Notes

* Frontend-only project
* Data resets on refresh
* No real backend
* Designed for learning & demos

---

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [React Docs](https://react.dev)
* [Tailwind CSS](https://tailwindcss.com)
* [Framer Motion](https://www.framer.com/motion)
* [SweetAlert2](https://sweetalert2.github.io)

---

## 👨‍💻 Author

**Mahmudul Islam shawcha**
Frontend Developer | React | Next.js

---

⭐ If you like this project, give it a star!
