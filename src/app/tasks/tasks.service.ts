import { Injectable, signal } from '@angular/core';
import { dummyTasks } from '../tasks-mock';
import { NewTask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal(dummyTasks);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
    ]);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
