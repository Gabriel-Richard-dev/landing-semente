import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,ButtonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  active = true;

  ngOnInit(){
    setTimeout(() => {
      this.active = false
    }, 700);
  }

  openTitle(){
    this.active = true
  }

  disableTitle(){
    this.active = false;
  }

  inverseTitle(){
    this.active = !this.active;
  }
}
