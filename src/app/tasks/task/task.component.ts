import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string | undefined>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task()!.id);
  }
}
