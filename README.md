# MediHelp Clinic Management System

**Clinic system for managing patients, appointments, and admin workflows — deployed live and fully operational.**

## 🌐 Live Demo  
🔗 [Visit the live site](http://medihelp-clinic.netlify.app/)

## 📂 Repository Overview  
This single repository houses three distinct applications:

- **frontend/** — The main client-facing React/Vite app (deployed separately).  
- **admin/** — The administrative dashboard built with React/Vite (this deployment).  
- **backend/** — The server-side API (Node.js/Express).  

## ✨ Features

### Admin Dashboard
- Secure admin authentication & role-based access  
- Manage doctors, patients, and appointments  
- Overview of clinic operations & quick access to records  
- Real-time availability updates  

### Shared Features
- Modular folder structure with independent builds for **frontend** and **admin**  
- Unified repository for seamless development & deployment  

## 🛠️ Technologies Used
- **Frontend / Admin**: React, Vite, JSX, CSS (extend with Tailwind/other if added)  
- **Backend**: Node.js, Express, MongoDB (if used)  
- **Deployment**: Netlify  

## 🚀 Getting Started Locally

### Prerequisites
- Node.js & npm installed  

### Running the Admin Dashboard
```bash
# Navigate into admin folder
cd admin/
npm install
npm run dev
```

### Building Admin for Production
```
cd admin/
npm install
npm run build
# Output will be inside admin/dist/
```
### Running Frontend
```
cd frontend/
npm install
npm run dev
# or npm run build for production build
```
### Backend Setup
```
cd backend/
npm install
# Add environment variables if required (e.g., .env for DB connection)
npm run start
```
### 📁 Project Structure
```
MediHelp-clinic-management-system/
├── admin/       # Admin dashboard (React + Vite)
│   ├── src/
│   ├── dist/    # Production build output
│   └── ...
├── frontend/    # Frontend client app
├── backend/     # API server
└── README.md    # ← This file
```


