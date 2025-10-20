import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { macchina } from './macchina/macchina';
import { container } from './container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,macchina, container ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prova_alla_verifica');
}
