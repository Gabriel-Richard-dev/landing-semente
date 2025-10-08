import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

const colorbase = 'rgba(255, 255, 255, 0.08)';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, AvatarModule, ToolbarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {


  background: string = colorbase;
  movingSide: boolean = false;
  radions: string = '3rem'

  constructor(private activatedRoute: ActivatedRoute){
  }

  getEstilo(): any {


    return {
      'border': 'none',
      'border-radius': this.radions,
      padding: '1rem 1rem 1rem 1.5rem',
      'background-color': `${this.background}`,
      'transition': '.3s ease-in'
    };
  }

  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset != 0) {
      this.movingSide = true;
      this.background = 'white';
      this.radions = '0';
      return;
    }
    this.radions = '3rem';
    this.movingSide = false;
    this.background = colorbase;
  }


}
