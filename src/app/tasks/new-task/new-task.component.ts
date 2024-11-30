import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  userId = input.required<string>();
  cancelTask = output();
  // addTask = output<NewTask>();
  // enteredTitle = signal<string>('');
  // enteredDate = signal<string>('');
  // enteredSummary = signal<string>('');

  private tasksService = inject(TasksService);

  enteredData = signal<NewTask>({
    title: '',
    dueDate: '',
    summary: '',
  });

  onCancelTask() {
    this.cancelTask.emit();
  }

  onSubmitTask() {
    this.tasksService.addTask(
      {
        title: this.enteredData().title,
        dueDate: this.enteredData().dueDate,
        summary: this.enteredData().summary,
      },
      this.userId()
    );
    this.cancelTask.emit();
  }
}
