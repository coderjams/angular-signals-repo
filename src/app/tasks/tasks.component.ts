import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../tasks-mock';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input<string>();
  name = input<string>();
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
}
