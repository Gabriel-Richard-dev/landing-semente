import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MenubarModule ,MainComponent,HeaderComponent, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  items: MenuItem[] | undefined;

  ngOnInit(){
    this.items = [
      {label: "teste", icon: 'pi pi-home', routerLink:'/'}
    ];
  }
}
