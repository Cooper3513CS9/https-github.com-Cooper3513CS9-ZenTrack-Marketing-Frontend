"use client";
import React, { useState } from 'react';
import { Plus, Check, Trash2, Circle } from 'lucide-react';
import { Task } from '../types';

interface TaskWidgetProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskWidget: React.FC<TaskWidgetProps> = ({ tasks, setTasks }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: newTaskText,
      completed: false,
      category: 'work', // default
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Jouw Focus</h2>
          <p className="text-sm text-slate-500">
            {pendingCount === 0 ? 'Alles afgerond, goed bezig!' : `Nog ${pendingCount} taken te gaan`}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-xs">
          {tasks.length}
        </div>
      </div>

      <form onSubmit={addTask} className="relative mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Nieuwe taak toevoegen..."
          className="w-full pl-4 pr-12 py-3 bg-slate-50 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 p-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </form>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[300px]">
        {tasks.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            Nog geen taken. Geniet van de rust.
          </div>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
              task.completed ? 'bg-slate-50 opacity-60' : 'bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                task.completed
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-slate-300 text-transparent hover:border-emerald-400'
              }`}
            >
              <Check className="w-3 h-3" />
            </button>
            <span
              className={`flex-1 text-sm truncate ${
                task.completed ? 'text-slate-400 line-through' : 'text-slate-700'
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-slate-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};