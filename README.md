# 📝 Mini Task Manager (Full-Stack CRUD App)

A full-stack task management app built with **Next.js + Tailwind CSS** for the frontend and **Node.js (Express)** for the backend. It allows users to **list, add, update, and delete tasks**, with real-time status updates (pending/done).

---

## 🚀 Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Deployment**:
  - Frontend: [Vercel](https://vercel.com)
  - Backend: [Render](https://render.com)

---

## 🎯 Features

- View all tasks (GET `/tasks`)
- Create new tasks (POST `/tasks`)
- View a specific task (GET `/tasks/:id`)
- Update task (PUT `/tasks/:id`)
- Delete task (DELETE `/tasks/:id`)
- Toggle task status (pending/done)
- Responsive UI with clear user feedback

---

## 🧠 API Endpoints

| Method | Endpoint            | Description       | Sample Input                                    |
| ------ | ------------------- | ----------------- | ----------------------------------------------- |
| GET    | `/api/v1/tasks`     | Fetch all tasks   | –                                               |
| POST   | `/api/v1/tasks`     | Create new task   | `{ "title": "New Task", "status": "pending" }`  |
| GET    | `/api/v1/tasks/:id` | Get task by ID    | –                                               |
| PUT    | `/api/v1/tasks/:id` | Update task by ID | `{ "title": "Updated Task", "status": "done" }` |
| DELETE | `/api/v1/tasks/:id` | Delete task by ID | –                                               |

---

## 🗂️ Project Structure

```
Mini-Task-Manager/
│
├── server/                      # Backend
│   ├── controllers/             # Controller functions (CRUD logic)
│   ├── model/                   # Mongoose models
│   ├── routes/                  # API routing
│   ├── config/                  # DB configuration
│   └── index.js                 # Express entrypoint
│
└── src/                         # Frontend (Next.js)
    ├── app/                     # Pages directory
    │   └── page.tsx            # Main task manager UI
    └── styles/                 # Tailwind configs
```

---

## 🛠️ How to Run Locally

### Backend

```bash
cd server
npm install
# Create a `.env` file with:
# PORT=8000
# MONGODB_URI=<your_mongo_db_connection>
npm run dev
```

### Frontend

```bash
cd src
npm install
# Create a `.env.local` file with:
# NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api/v1
npm run dev
```

---

## 🌐 Live Demo

- **Frontend** (Vercel): [https://mini-task-manager-ten.vercel.app/](https://mini-task-manager-ten.vercel.app/)
- **Backend** (Render): [https://mini-task-manager-zgqc.onrender.com/](https://mini-task-api.onrender.comhttps://mini-task-manager-zgqc.onrender.com/)

---

## ✍️ Section B – Explain Your Thinking

### Why did you choose this project structure?

I opted for a clean separation of concerns with modular folders (`controllers`, `model`, `routes`) in the backend and component-based layout in the frontend. This makes the app scalable and maintainable.

### How did you separate frontend and backend concerns?

The frontend only interacts with the backend through REST API calls. All business logic, data persistence, and validation are handled in the backend. The frontend focuses solely on UI and user interaction.

### How would you handle errors and edge cases?

All backend routes include validation (like ObjectId checks) and meaningful error responses. The frontend catches and displays errors with loading indicators to guide users.

### What security features would you add in production?

- Input sanitization and validation (already added)
- Helmet and CORS policies
- Environment variables
- Rate limiting and authentication (e.g., JWT)

### What would you improve if you had 1 full day?

- Add user authentication
- Implement filtering and sorting
- Add task categories or labels
- Create a separate TaskDetails page

---

## 🌟 Bonus: My Favorite Project

**Project:** [AskYourPDF](https://github.com/VedankWakalkar/AskYourPdf)  
**Tech:** Next.js, Clerk, Express.js, BullMQ, Redis, LangChain, Qdrant  
**What it solves:** Converts PDF documents into AI-readable form and allows users to ask questions on them.  
**Key learnings:** How to use vector databases, chunking logic, and handle asynchronous processing at scale.

---

- GitHub Repository: [https://github.com/VedankWakalkar/Mini-Task-Manager](https://github.com/VedankWakalkar/Mini-Task-Manager)
- Live Demo: [https://mini-task-manager-ten.vercel.app/](https://mini-task-manager-ten.vercel.app/)

✅ All links are tested and public.

---
