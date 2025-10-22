import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { container } from './container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, container ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prova_alla_verifica');
}
