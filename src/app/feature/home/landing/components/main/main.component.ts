import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaItem, GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AccordionModule, GalleriaModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  images: any[] | undefined;

  ngOnInit(){
    this.images = [
      {
        itemImageSrc: '/imgs/fotogeral.jpg',
        alt: 'Todos os jovens do semente',
        title: 'Jovens do semente',
      },
      {
        itemImageSrc: '/imgs/adoracao.jpg',
        alt: 'Adoração ao Santísismo Sacramento',
        title: 'Adoração',
      },
      {
        itemImageSrc: '/imgs/mainfoto.jpg',
        alt: 'Abraço',
        title: 'Abraço',
      },
      {
        itemImageSrc: '/imgs/piscina.jpg',
        alt: 'Piscina',
        title: 'Piscina',
      },

    ];
  }


}
