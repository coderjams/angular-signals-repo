import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelectUser', () => {
    it('should set selected userId', () => {
      const userId = 'u2';
      component.onSelectUser(userId);
      expect(component.selectedUserId()).toEqual(userId);
    });
  });

  describe('selectedUser', () => {
    it('should return selected user', () => {
      const user = component.users()[1];
      component.selectedUserId.set(user.id);
      expect(component.selectedUser()).toEqual(user);
    });
  });
});
