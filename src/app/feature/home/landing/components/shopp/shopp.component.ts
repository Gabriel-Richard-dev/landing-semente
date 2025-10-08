import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Dialog, DialogModule } from 'primeng/dialog';

export interface Product {
  name: string;
  image: string;
  type: string;
  description: string;
  rating: number;
  price: number;
  inventoryStatus: string;
  severity?: string;
}
const products: Product[] = [
  {
    name: 'Blusa baluarte',
    image: '/imgs/shopp/baluarte.png',
    description:
      'Blusa inspirada em São Carlo Acutis, jovem beato conhecido por sua devoção à Eucaristia e à tecnologia. Feita com materiais ecológicos, une fé e sustentabilidade para o seu dia a dia.',
    rating: 4.5,
    price: 50,
    type: 'Blusa',
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo',
    image: '/imgs/shopp/ecocarlo.png',
    description:
      'Ecobag inspirada em São Carlo Acutis, símbolo de juventude, fé e inovação. Produzida com materiais ecológicos, perfeita para quem busca praticidade e espiritualidade.',
    rating: 4.5,
    price: 25,
    type: 'Ecobag',
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoJoana',
    image: '/imgs/shopp/ecojoana.png',
    description:
      'Ecobag inspirada em Santa Joana d’Arc, mártir e heroína francesa que foi queimada por sua fé. Feita com materiais sustentáveis, representa coragem e determinação no cotidiano.',
    rating: 4.5,
    price: 25,
    type: 'Ecobag',
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
];

@Component({
  selector: 'app-shopp',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    SelectButtonModule,
    CommonModule,
    NgFor,
    FormsModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
  ],
  templateUrl: './shopp.component.html',
  styleUrl: './shopp.component.scss',
})
export class ShoppComponent {
  visible = false;
  modalcontent: Product = Array.from(products)[0];

  products(): any[] {
    return products;
  }

  getSeverity(product: any): any {
    return product.severity;
  }

  showDialog(produto: Product) {
    this.modalcontent = produto;
    this.visible = true;
  }
}
