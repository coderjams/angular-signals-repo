import { Component, computed, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(() => `users/${this.avatar()}`);

  // get imagePath() {
  //   return `users/${this.avatar()}`;
  // }

  onSelectUser() {
    this.select.emit(this.id());
  }
}
