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
    name: 'EcoCarlo',
    image: '/imgs/shopp/ecocarlo.png',
    description: 'Ecobag inspirada em São Carlo Acutis, feita com materiais ecológicos e resistentes. Ideal para o dia a dia, compras e atividades diversas, promovendo sustentabilidade e devoção.',
    rating: 4.5,
    price: 25,
    type: "ecobag",
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo2',
    image: '/imgs/shopp/ecocarlo.png',
    description: 'Ecobag inspirada em São Carlo Acutis, feita com materiais ecológicos e resistentes. Ideal para o dia a dia, compras e atividades diversas, promovendo sustentabilidade e devoção.',
    rating: 4.5,
    price: 25,
    type: "ecobag",
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo3',
    image: '/imgs/shopp/ecocarlo.png',
    description: 'Ecobag inspirada em São Carlo Acutis, feita com materiais ecológicos e resistentes. Ideal para o dia a dia, compras e atividades diversas, promovendo sustentabilidade e devoção.',
    rating: 4.5,
    price: 25,
    type: "ecobag",
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
    DialogModule
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

  showDialog(produto:Product){
    this.modalcontent = produto;
    this.visible = true;
  }
}
