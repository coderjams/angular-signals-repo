import { Component, computed, inject, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../models/task.model';
import { TasksService } from './tasks.service';

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
  newTask = signal<string>('');
  isAddingTask = signal<boolean>(false);

  selectedUserTasks = computed(() =>
    this.tasksService.getUserTasks(this.userId())
  );

  tasksService = inject(TasksService);

  onNewtask() {
    this.isAddingTask.set(true);
    this.newTask.set(this.name()!);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}
