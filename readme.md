
# PocketCodex

### In development

**PocketCodex** is a full-stackvweb application designed to query and display Pokémon data.

This project implements a **Proxy Server Architecture** to handle data retrieval. This approach ensures better performance and security + an excuse to learn Backend.

---

## 🚀 Key Features

* **Custom Proxy Server:** A Node.js/Express backend that acts as an API Gateway, protecting the client from direct third-party dependencies and it uses cache.
* **Component-Based UI:** A modular React frontend built with Vite, utilizing functional components and hooks for state management.
* **Asynchronous:** Real-time UI updates for loading states and error handling (404s, network failures).

---

## 🛠 Tech Stack

### **Frontend (Client)**

* **Framework:** React 18 (via Vite for optimized build performance)
* **HTTP Client:** Axios 
* **Styling:** CSS3 
* **State Management:** React Hooks

### **Backend (Server)**

* **Runtime:** Node.js
* **Framework:** Express.js
* **Middleware:** CORS 
* **Utilities:** Nodemon (Development hot-reloading)

---

## 🏗 Architecture Overview

The application follows a **Client-Server** model:

1. **The Client** (`/client`) requests data from the local backend (e.g., `GET /pokemon/pikachu`).
2. **The Server** (`/server`) intercepts the request.
3. **Cache Check:** The server checks its internal memory.
* *Hit:* Returns data immediately (sub-millisecond latency).
* *Miss:* Fetches data from the external PokéAPI, stores it in memory, and then returns it.


4. **Response:** The client receives a JSON object containing only relevant fields (ID, Name, Image, Types).

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | **Health Check.** Verifies API status. |
| `GET` | `/pokemon/:name` | **Data Fetch.** Retrieval logic with caching implementation. |

---

## ⚙️ Installation & Setup

This project requires **Node.js** (LTS version recommended).

### 1. Backend Setup (The Server)

The server must be running to process data requests.

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server (runs on Port 3000)
npm run dev

```

### 2. Frontend Setup (The Client)

Open a new terminal window to run the React application.

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Start the application (runs on Port 5173)
npm run dev

```

---

## 📂 Project Structure

```text
PocketCodex/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (PokemonCard)
│   │   ├── App.jsx         # Main Container Logic
│   │   └── App.css         # Global Styles
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── index.js            # Server Entry Point & Logic
│   └── package.json
│
└── README.md               # Documentation

```

---

## 🔮 Future Roadmap (an excuse to learn about the industry standards)

* **Dockerization:** Containerizing both client and server for consistent deployment environments.
* **Persistent Storage:** Migrating from in-memory caching to Redis for scalability across server restarts.
* **Unit Testing:** Implementing Jest/Vitest for logic verification.



-- abhi