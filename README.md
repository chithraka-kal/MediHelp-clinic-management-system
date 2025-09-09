# MediHelp — Clinic Management System

Full-stack clinic and appointment management application with separate **patient frontend**, **admin dashboard**, and a **Node.js/Express API** backed by MongoDB.

## 🌐 Live Demo  
🔗 [Visit the live site](http://medihelp-clinic.netlify.app/)

---

## 📂 Repository Overview  

This repository contains three apps that work together:

- **`frontend/`** — Patient-facing React + Vite application  
- **`admin/`** — Admin dashboard (React + Vite)  
- **`backend/`** — REST API (Node.js, Express, Mongoose)

---

## ✨ Features  

### Patient App
- Secure registration and JWT authentication  
- 7-day appointment slot picker with real-time availability  
- Server-side slot locking to prevent double bookings  
- Appointment booking, viewing, and cancellation  
- Profile management with Cloudinary image uploads  

### Admin Dashboard
- Secure role-based authentication  
- Manage doctors (add, edit, update availability)  
- Comprehensive appointment oversight  
- Real-time clinic monitoring  
- Patient and appointment analytics  

### Doctor Features
- Doctor-specific dashboard for managing appointments  
- Mark appointments as completed or cancelled  
- View patient details and history  

### Technical Features
- JWT token-based authentication (`Authorization: Bearer <token>`)  
- Environment-driven configuration for deployment flexibility  
- Image uploads via Cloudinary  
- MongoDB with Mongoose for persistence  
- CORS-enabled API with proper error handling  

---

## 🛠️ Tech Stack  

**Frontend & Admin:**  
- React 19+ (Vite)  
- React Router, Axios, React Toastify  
- Tailwind CSS  

**Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT (jsonwebtoken), bcrypt  
- Cloudinary SDK, multer  
- CORS, dotenv, validator  

**Development & Deployment:**  
- Nodemon, ESLint  
- Netlify (frontend & admin)  
- Environment variables for config  

---

## 📦 Package Overview  

**Frontend (`frontend/package.json`)**  
- react, react-dom, react-router-dom  
- axios, react-toastify, tailwindcss  
- vite + eslint toolchain  

**Admin (`admin/package.json`)**  
- Similar to frontend (React, Vite, Tailwind, Axios, Toastify)  

**Backend (`backend/package.json`)**  
- express, mongoose, jsonwebtoken, bcrypt  
- cloudinary, multer, cors, dotenv, validator  
- nodemon (dev), razorpay (optional payments)  

---

## ⚙️ Environment Variables  

Create a `.env` file in **`backend/`** with:  
```env
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=
```

In **`frontend/admin`** apps, create `.env` with:
```
VITE_BACKEND_URL=http://localhost:4000
VITE_ADMIN_URL=http://localhost:5174   # optional
```
---

##  🚀 Quick Start
**Prerequisites**
- Node.js v16+ 
- MongoDB (local or Atlas)  
- Cloudinary account

**Backend Setup**
```
cd backend
npm install
npm run server   # dev (nodemon)
# npm start      # prod
```
**Frontend (Patient App)**
```
cd frontend
npm install
npm run dev
# npm run build
```
**Admin Dashboard**
```
cd admin
npm install
npm run dev
# npm run build
```

---

##  📁 Project Structure
```
MediHelp-clinic-management-system/
├── admin/       # Admin React app (Vite)
├── frontend/    # Patient React app (Vite)
├── backend/     # Express API server
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── README.md
```


## 🔑 API & Architecture Notes  

- **Auth:** JWT tokens returned on login; clients use `Authorization: Bearer <token>`.  
- **Slots:** Bookings update a server-side `slots_booked` structure keyed by date (avoids race conditions).  
- **Uploads:** Profile images uploaded via `FormData` → stored in Cloudinary → URL saved in DB.  

---

## 🧰 Development Checklist  

1. Start MongoDB and configure `MONGO_URI` in `backend/.env`.  
2. Start backend: `cd backend && npm run server`.  
3. Start frontend: `cd frontend && npm run dev`.  
4. Start admin: `cd admin && npm run dev`.  
5. Test flows: register/login as patient, doctor, admin.  

---

## 🐛 Troubleshooting  

- **JWT errors** → Check `JWT_SECRET` and `Authorization` headers.  
- **CORS issues** → Ensure `VITE_BACKEND_URL` matches backend origin.  
- **Double booking** → Server enforces locking; check DB writes and token validity.  

---

## 🤝 Contributing  

Contributions welcome! Possible improvements:  
- Add automated tests  
- Add CI (lint + build)  
- Seed scripts for demo data  
