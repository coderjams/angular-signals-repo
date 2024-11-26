import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../tasks-mock';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();
  tasks = signal(dummyTasks);
  newTask = signal<string>('');
  isAddingTask = signal<boolean>(false);
  selectedUserTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.userId())
  );

  onCompleteTask(taskId: string | undefined) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }

  onNewtask() {
    this.isAddingTask.set(true);
    this.newTask.set(this.name()!);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(taskData: NewTask) {
    console.log(taskData);
    console.log('before', this.tasks());
    this.tasks.set([
      ...this.tasks(),
      {
        id: new Date().getTime().toString(),
        userId: this.userId(),
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
    ]);
    console.log('after', this.tasks());
    this.isAddingTask.set(false);
  }
}
