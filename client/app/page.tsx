"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  status: "Pending" | "Done";
  createdAt: string;
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"Pending" | "Done">("Pending");
  const [taskId, setTaskId] = useState("");
  const [taskById, setTaskById] = useState<Task | null>(null);
  const [updateId, setUpdateId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://mini-task-manager-zgqc.onrender.com/api/v1/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(BASE_URL);
    setTasks(res.data.Tasks || []);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    setLoading(true);
    await axios.post(BASE_URL, { title, status });
    setTitle("");
    fetchTasks();
    setLoading(false);
  };

  const getTaskById = async () => {
    if (!taskId.trim()) return;
    try {
      const res = await axios.get(`${BASE_URL}/${taskId}`);
      setTaskById(res.data.Task);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Task not found");
      setTaskById(null);
    }
  };

  const updateTask = async () => {
    if (!updateId.trim()) return;
    setLoading(true);
    await axios.put(`${BASE_URL}/${updateId}`, { title, status });
    setTitle("");
    setUpdateId("");
    fetchTasks();
    setLoading(false);
  };

  const deleteTask = async () => {
    if (!deleteId.trim()) return;
    setLoading(true);
    await axios.delete(`${BASE_URL}/${deleteId}`);
    setDeleteId("");
    fetchTasks();
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-10">
      <h1 className="text-4xl font-bold text-center mb-6">Mini Task Manager</h1>

      {/* Get All Tasks */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">All Tasks</h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="border p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <p
                  className={`font-medium text-lg ${
                    task.status === "Done" && "line-through text-gray-500"
                  }`}
                >
                  {task.title} <span>Task Id: {task._id}</span>
                </p>
                <p className="text-sm text-gray-400">
                  {task.status} | {new Date(task.createdAt).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* POST */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Add Task</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
            placeholder="Task title"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "Pending" | "Done")}
            className="border px-3 py-2 rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
          <button
            onClick={addTask}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </section>

      {/* GET /:id */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Get Task by ID</h2>
        <div className="flex gap-2">
          <input
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            className="border px-3 py-2 rounded-md flex-1"
            placeholder="Enter Task ID"
          />
          <button
            onClick={getTaskById}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Fetch
          </button>
        </div>
        {taskById && (
          <div className="mt-4 border p-4 rounded-md">
            <p>
              <strong>Title:</strong> {taskById.title}
            </p>
            <p>
              <strong>Status:</strong> {taskById.status}
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(taskById.createdAt).toLocaleString()}
            </p>
          </div>
        )}
      </section>

      {/* PUT /:id */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Update Task</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={updateId}
            onChange={(e) => setUpdateId(e.target.value)}
            className="border px-3 py-2 rounded-md"
            placeholder="Task ID"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 rounded-md"
            placeholder="Updated Title"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "Pending" | "Done")}
            className="border px-3 py-2 rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
          <button
            onClick={updateTask}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </section>

      {/* DELETE /:id */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Delete Task</h2>
        <div className="flex gap-2">
          <input
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            className="border px-3 py-2 rounded-md flex-1"
            placeholder="Task ID to delete"
          />
          <button
            onClick={deleteTask}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
}
