import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from '../../footer/footer.component';
import { FindusComponent } from './components/findus/findus.component';
import { HeaderComponent } from './components/header/header.component';
import { VenerationComponent } from './components/veneration/veneration.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MenubarModule,
    MainComponent,
    HeaderComponent,
    VenerationComponent,
    AnimateOnScrollModule,
    FindusComponent,
    FooterComponent
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
