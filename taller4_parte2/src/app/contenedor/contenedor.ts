import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Contenido } from '../contenido/contenido';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header,Sidebar,Contenido,Footer],
  selector: 'app-contenedor',
  styleUrl: './contenedor.css',
  templateUrl: './contenedor.html',
})
export class Contenedor {}
