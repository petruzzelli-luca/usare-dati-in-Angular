import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItem } from './user-item/user-item';
import { HelloWorld } from './hello-world/hello-world';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, UserItem, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esercitazione2_angular');
}
