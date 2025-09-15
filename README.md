# 🛍️ E-Commerce Storefront & Admin Panel (Mock)

[![Next.js](https://img.shields.io/badge/Next.js-15-blue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Shadcn/UI](https://img.shields.io/badge/Shadcn--UI-Components-brightgreen)](https://ui.shadcn.com/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-React-yellow)](https://tanstack.com/query/latest)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-React-red)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-Validation-orange)](https://zod.dev/)

---

## 🚀 Overview

This project is a **mock e-commerce platform** built with **Next.js 13**, including:

- **Public storefront:** Product listing, search, filter, pagination, cart & checkout modal.
- **Admin dashboard:** Mock login/signup, manage products and users.

All data is handled **client-side** with **mock APIs** and state management.

---

## 📝 Features

### Public "User Side"

- `/` — Storefront grid
- `/products` — Products list with search, filter, pagination
- `/product/[id]` — Product details page
- **Cart + Checkout Modal:** Floating cart button, add to cart, checkout modal

### Admin "Back Office"

- `/login` — Mock login
- `/signup` — Mock signup
- `/dashboard/products` — Admin product management
- `/dashboard/users` — Admin user management
- **Auth:** Token stored in `sessionStorage`, forms validated with `react-hook-form` + `zod`

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Shadcn/UI** for components
- **TanStack Query** for data fetching & caching
- **React Hook Form** + **Zod** for forms & validation
- **Axios** for API requests
- **LocalStorage / SessionStorage** for cart & auth

---

## 🏗️ Architecture & Design Choices

### 1. State Management

- **Cart:** React state / Context, optional localStorage for persistence
- **Admin:** Mock state

### 2. Data Fetching

- **TanStack Query** for API calls
- **Default API params**: `limit`, `sort`, `category`
- **Manual handling**: `page` & `search` client-side due to Fake Store API limitations

### 3. Forms & Validation

- **React Hook Form + Zod** for type-safe login/signup forms

### 4. UI / Styling

- **Tailwind CSS** for rapid, responsive styling
- **Shadcn/UI** for consistent, prebuilt components

---

## ⚡ Setup

1. Clone the repository:

```bash
git clone <repo-url>
cd <repo-name>

```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4.Open in browser:
http://localhost:3000
