import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'marco', password: '1234' },
    { username: 'esme', password: '1234' },
    { username: 'puga', password: '1234' },
  ];

  login(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
