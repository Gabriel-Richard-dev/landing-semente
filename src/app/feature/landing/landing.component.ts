import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { VenerationComponent } from '../veneration/veneration.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ShoppComponent } from '../shopp/shopp.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MenubarModule,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    VenerationComponent,
    AnimateOnScrollModule,
    ShoppComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [{ label: 'teste', icon: 'pi pi-home', routerLink: '/' }];
  }
}
