import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './users-mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  userId = signal('');
  userName = signal<string>('');

  onSelectUser(id: string) {
    const selectedUser = this.users().find((user) => user.id === id);
    this.userName.set(selectedUser?.name ? selectedUser.name : '');
  }
}
