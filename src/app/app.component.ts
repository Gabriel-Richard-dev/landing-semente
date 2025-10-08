import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from './feature/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    AOS.init();
  }

  title = 'lading-semente';
}
