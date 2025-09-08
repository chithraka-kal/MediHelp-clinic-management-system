# MediHelp — Clinic Management System

Full‑stack clinic and appointment management application with separate patient frontend, admin dashboard, and Node.js/Express API backed by MongoDB.

## 🌐 Live Demo  
🔗 [Visit the live site](http://medihelp-clinic.netlify.app/)

## 📂 Repository Overview  
This repository contains three apps that work together:

- `frontend/` — Patient-facing React + Vite application (deployed separately)
- `admin/` — Administrative dashboard built with React + Vite (this deployment)
- `backend/` — REST API server (Node.js, Express, Mongoose)

## ✨ Key Features

### Patient App
- User registration and secure JWT authentication
- 7‑day appointment slot picker with real-time availability
- Server‑side slot locking to prevent double bookings
- Profile management with image uploads (Cloudinary)
- Appointment booking, viewing, and cancellation

### Admin Dashboard
- Secure admin authentication & role-based access
- Doctor management (add, edit, availability updates)
- Comprehensive appointment oversight and management
- Real-time clinic operations monitoring
- Patient and appointment analytics

### Doctor Features
- Doctor-specific dashboard for appointment management
- Mark appointments as completed or cancelled
- View patient details and appointment history

### Technical Features
- JWT token-based authentication (Authorization: Bearer <token>)
- Environment‑driven configuration for deployment flexibility
- Image uploads via Cloudinary integration
- MongoDB with Mongoose for data persistence
- CORS-enabled API with proper error handling

## 🛠️ Tech Stack

**Frontend & Admin:**
- React 19+ with Vite build tool
- React Router for navigation
- Axios for API calls
- React Toastify for notifications
- Tailwind CSS for styling

**Backend:**
- Node.js with Express framework
- MongoDB with Mongoose ODM
- JSON Web Tokens (jsonwebtoken) for authentication
- bcrypt for password hashing
- Cloudinary SDK for image storage
- multer for file uploads
- CORS and validation middleware

**Development & Deployment:**
- Nodemon for backend development
- ESLint for code quality
- Netlify for frontend deployment
- Environment variables for configuration

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16+) and npm installed
- MongoDB instance (local or Atlas)
- Cloudinary account for image uploads

### Backend Setup
```powershell
cd backend
npm install
# Create .env file with required variables (see Environment Variables section)
npm run server  # Development with nodemon
# npm start     # Production
```

### Frontend (Patient App)
```powershell
cd frontend
npm install
# Create .env with VITE_BACKEND_URL
npm run dev     # Development
# npm run build # Production build
```

### Admin Dashboard
```powershell
cd admin
npm install
# Create .env with VITE_BACKEND_URL
npm run dev     # Development
# npm run build # Production build
```

## 📁 Project Structure
```
MediHelp-clinic-management-system/
├── admin/                    # Admin React app (Vite)
│   ├── src/
│   │   ├── components/       # Shared components
│   │   ├── context/          # React Context providers
│   │   ├── pages/            # Page components
│   │   └── assets/           # Static assets
│   ├── dist/                 # Production build output
│   └── package.json
├── frontend/                 # Patient React app (Vite)
│   ├── src/
│   │   ├── components/       # Shared components
│   │   ├── context/          # React Context providers
│   │   ├── pages/            # Page components
│   │   └── assets/           # Static assets
│   └── package.json
├── backend/                  # Express API server
│   ├── controllers/          # Route handlers
│   ├── middlewares/          # Auth and validation
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   ├── config/               # Database connection
│   ├── server.js             # Entry point
│   └── package.json
└── README.md
```
# MediHelp — Clinic Management System

Full‑stack clinic and appointment management application with separate patient frontend, admin dashboard, and a Node.js/Express API backed by MongoDB.

This repository contains three apps that work together:

- `frontend/` — Patient-facing React + Vite application
- `admin/` — Admin dashboard (React + Vite)
- `backend/` — REST API (Node.js, Express, Mongoose)

## Key features

- JWT authentication for Patients, Doctors and Admin (Authorization: Bearer <token>)
- Patient 7‑day slot picker with server‑side slot locking to prevent double bookings
- Doctor dashboard for viewing, completing and cancelling appointments
- Admin panel to manage doctors, appointments and availability
- Image uploads using Cloudinary
- Environment‑driven config for separate frontend/admin URLs

## Tech stack

- Frontend & Admin: React (Vite), React Router, Axios, React Toastify, Tailwind utilities
- Backend: Node.js, Express, Mongoose (MongoDB), jsonwebtoken, bcrypt, multer, Cloudinary SDK
- Utilities: dotenv, cors, validator, nodemon (dev)

## Exact package lists (from each app)

Frontend (`frontend/package.json`)

Dependencies:
- @tailwindcss/vite ^4.1.11
- axios ^1.11.0
- react ^19.1.0
- react-dom ^19.1.0
- react-router-dom ^7.7.1
- react-toastify ^11.0.5
- tailwindcss ^4.1.11

Dev dependencies:
- @eslint/js, @types/react, @types/react-dom, @vitejs/plugin-react, eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, vite

Admin (`admin/package.json`)

Dependencies:
- @tailwindcss/vite ^4.1.12
- axios ^1.11.0
- react ^19.1.1
- react-dom ^19.1.1
- react-router-dom ^7.8.2
- react-toastify ^11.0.5
- tailwindcss ^4.1.12

Dev dependencies: similar toolchain to the frontend (Vite + ESLint + React types)

Backend (`backend/package.json`)

Dependencies:
- bcrypt ^6.0.0
- cloudinary ^2.7.0
- cors ^2.8.5
- dotenv ^17.2.1
- express ^5.1.0
- jsonwebtoken ^9.0.2
- mongoose ^8.18.0
- multer ^2.0.2
- nodemon ^3.1.10 (listed as dependency; used for development)
- razorpay ^2.9.6
- validator ^13.15.15


## Environment variables

Create a `.env` file in `backend/` with the following (examples — adapt to your setup):

- MONGO_URI or MONGODB_URI — MongoDB connection string
- JWT_SECRET — secret used to sign JWT tokens
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- RAZORPAY_KEY_ID (if payment flow is used)
- RAZORPAY_KEY_SECRET
- ADMIN_EMAIL, ADMIN_PASSWORD (or whichever vars your admin auth uses)

Frontend & Admin apps typically use Vite env vars (create `.env` in project root of each app):

- VITE_BACKEND_URL — URL of the backend API (e.g. http://localhost:4000)
- VITE_ADMIN_URL — optional admin app URL used by frontend for cross links

Note: I inferred typical env names from the codebase; if your code uses different names, match those instead.

## Install & run (PowerShell)

Open separate terminals for each app.

Backend (development)

```powershell
cd backend
npm install
# dev: run with nodemon
npm run server
# production: npm start
```

Frontend (patient app)

```powershell
cd frontend
npm install
npm run dev
# build for production:
npm run build
```

Admin dashboard

```powershell
cd admin
npm install
npm run dev
# build for production:
npm run build
```

## Useful npm scripts (what you'll find in each package.json)

- frontend / admin
	- `dev` — start Vite dev server
	- `build` — produce production build
	- `preview` — preview a production build
	- `lint` — run ESLint
- backend
	- `server` — nodemon server.js (development)
	- `start` — node server.js (production)

## Project structure (top level)

```
MediHelp-clinic-management-system/
├── admin/       # Admin React app (Vite)
├── frontend/    # Patient React app (Vite)
├── backend/     # Express API, Mongoose models, controllers, routes
└── README.md
```

## API & architecture notes (high level)

- Authentication: JWT tokens returned on login; clients should send an `Authorization: Bearer <token>` header for protected endpoints.
- Doctors' available slots are stored server-side; bookings update a `slots_booked` structure keyed by date to avoid race conditions.
- Image fields (doctor profile images) are uploaded from the frontend as `FormData` and stored on Cloudinary; backend stores the remote URL.

## Common development checklist

1. Start MongoDB (local or Atlas) and set `MONGO_URI` in `backend/.env`.
2. Start backend: `cd backend && npm run server`.
3. Start frontend and admin in separate terminals: `cd frontend && npm run dev` and `cd admin && npm run dev`.
4. Use the apps to register/login as patient/doctor/admin and test booking/cancel flows.

## Troubleshooting

- No Authorized Access / jwt malformed: ensure `JWT_SECRET` matches what the server expects and frontend sends `Authorization: Bearer <token>`.
- CORS errors: verify `VITE_BACKEND_URL` matches the backend origin and backend `cors()` is enabled.
- Double booking: server enforces slot locking; if you see duplicates verify server DB writes and that client uses fresh token headers.

## Contributing

Feel free to open issues or PRs. Suggested improvements:
- Add automated tests (unit + integration)
- Add CI workflow for lint/build
- Add seed scripts for demo data

## License & credits

This repo is provided as-is. Add a LICENSE file to declare terms.

---

If you'd like, I can also:

- generate a concise `backend/.env.example` file with the exact env variable names used by your codebase,
- add a CONTRIBUTING.md and a GitHub Actions workflow that runs lint and tests,
- or produce a short deployment guide for Netlify (frontend/admin) and a typical Node/PM2 deployment for the backend.


