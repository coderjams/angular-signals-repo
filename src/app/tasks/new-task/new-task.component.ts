import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  cancelTask = output();
  addTask = output<NewTask>();
  enteredTitle = signal<string>('');
  enteredDate = signal<string>('');
  enteredSummary = signal<string>('');

  // enteredData = signal<NewTask>({
  //   title: '',
  //   dueDate: '',
  //   summary: '',
  // });

  onCancelTask() {
    this.cancelTask.emit();
  }

  onSubmitTask() {
    this.addTask.emit({
      title: this.enteredTitle(),
      dueDate: this.enteredDate(),
      summary: this.enteredSummary(),
    });
  }
}
