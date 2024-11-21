import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './users-mock';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedUserId = signal('u1');
  selectedUser = computed(() =>
    this.users().find((user) => user.id === this.selectedUserId())
  );

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
