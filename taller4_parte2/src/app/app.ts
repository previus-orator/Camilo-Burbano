import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contenedor } from './contenedor/contenedor';

@Component({
  imports: [RouterOutlet,Contenedor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('segunda_parte');
}
