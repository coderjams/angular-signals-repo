import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input<User>();
  selected = input<boolean>();
  select = output<string>();

  imagePath = computed(() => `users/${this.user()?.avatar}`);

  // get imagePath() {
  //   return `users/${this.avatar()}`;
  // }

  onSelectUser() {
    this.select.emit(this.user()?.id!);
  }
}
