# HackHeist - Full Stack Workshop

## Workshop Overview
Welcome to **HackHeist**. In this workshop, you will build a full-stack application using **React, Express, and MongoDB** while learning about **RESTful APIs**. This project simulates a heist planning system, where you can manage crew members and plan heists.

## Workshop Objectives
By the end of this workshop, you will:
- Understand **full-stack development** using **MERN** (MongoDB, Express, React, Node.js).
- Create a **RESTful API** using Express.
- Use **MongoDB** and **Mongoose** for database operations.
- Build a **React frontend** to interact with the backend.
- Implement **CRUD operations** (Create, Read, Update, Delete).

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [**Node.js**](https://nodejs.org/) (LTS version)
- [**MongoDB**](https://www.mongodb.com/) (Local or Atlas)
- [**Postman**](https://www.postman.com/downloads/) (for testing APIs)

### Clone the Repository
```bash
git clone https://github.com/your-username/hack-heist.git
cd hack-heist
```

### Set Up the Backend
1. Navigate to the backend folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Duplicate the sample `sample.env` file, rename it to be `.env` and add your MongoDB URI:
   ```
   DB_URL=mongodb://localhost:27017/HackHeist    # Can alternatively use Mongo Atlas
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```
   The server should now be running at `http://localhost:4000`.

### Set Up the Frontend
1. Navigate to the frontend folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend should now be running at `http://localhost:3000`.

## Workshop Activities
This workshop is divided into sections where we progressively build upon **HackHeist**.

### Activity 1: React Components
- Create a HeistCard component in `HeistCard/index.jsx`

### Activity 2: MongoDB Schema & Model
- Define a **Heist** model with fields like `location`, `startDate`, `endDate` and `planEntry`.
- Create a **Mongoose schema** in `models/heistModel.js`.

### Activity 3: API routes
- Implement **CRUD routes** for managing heists in `pages/index.jsx`.
- (Optional) Use **Postman** to test the API endpoints.

### Activity 4: Connecting React to Express
- Use **Express routes** to load data in `routes/heistRoutes.js`.
- Implement fetching heists in `pages/index.jsx`.

## API Routes
| Method | Endpoint          | Description               |
|--------|------------------|----------------------------|
| GET    | `/api/crew`      | Get all crew members       |
| POST   | `/api/crew`      | Add a new crew member      |
| GET    | `/api/heist`     | Get all heist              |
| POST   | `/api/heist`     | Add a new heist            |

## Next Steps
- Implement **user authentication**.
- Improve UI with **Tailwind CSS** or **Material UI**.
- Deploy the application using **Vercel (frontend)** and **Render (backend)**.

## Need Help?
If you have any issues, reach out on [**Discord**](https://discord.gg/ceXK9Q59mE)!
