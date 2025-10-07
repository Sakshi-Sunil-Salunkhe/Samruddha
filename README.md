# Samruddha

A smart cattle and shelter management platform for farmers, using sensors and AI/ML for animal health and well-being.

## Features

- Admin/farmer login and cattle registration
- Sensor dashboard for temperature, humidity, threat detection
- Health monitoring and decision support
- Vet consultation request
- Multi-language support (add more languages in `frontend/src/i18n/`)
- Backend (Node.js/Express + MySQL/Sequelize)
- Frontend (React.js + i18next)

## Prerequisites

- Node.js & npm
- MySQL database
- Git

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/Sakshi-Sunil-Salunkhe/Samruddha.git
cd Samruddha
```

### 2. Backend

- Create a MySQL database `samruddh_db`
- Copy `backend/.env.example` to `backend/.env` and fill with your DB details
- Install dependencies & run server:
    ```bash
    cd backend
    npm install
    npm start
    ```
- Server runs on `http://localhost:5000`

### 3. Frontend

- Set up environment variable for API URL (if needed)
- Install dependencies & run app:
    ```bash
    cd ../frontend
    npm install
    npm start
    ```
- App runs on `http://localhost:3000`

### 4. Deployment

- Backend: Deploy `/backend` to Render/Railway
- Frontend: Deploy `/frontend` to Vercel/Netlify
- Update API URLs as needed

## Next Steps

- Add more languages in `frontend/src/i18n/`
- Extend vet features and AI/ML logic
- Integrate real sensor data

---
