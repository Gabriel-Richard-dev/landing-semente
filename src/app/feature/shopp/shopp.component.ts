import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

export interface Product {
  name: string;
  image: string;
  description: string;
  rating: number;
  price: number;
  inventoryStatus: string;
  severity?: string;
}

const products: any[] = [
  {
    name: 'EcoCarlo',
    image: '/imgs/ecocarlo.png',
    description: 'Automóvel',
    rating: 4.5,
    price: 12000,
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo2',
    image: '/imgs/ecocarlo.png',
    description: 'Automóvel',
    rating: 4.5,
    price: 12000,
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo3',
    image: '/imgs/ecocarlo.png',
    description: 'Automóvel',
    rating: 4.5,
    price: 12000,
    inventoryStatus: 'INSTOCK',
    severity: 'success',
  },
  {
    name: 'EcoCarlo5',
    image: '/imgs/ecocarlo.png',
    description: 'Automóvel',
    rating: 4.5,
    price: 12000,
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
  ],
  templateUrl: './shopp.component.html',
  styleUrl: './shopp.component.scss',
})
export class ShoppComponent {
  layout: 'list' | 'grid' = 'grid';

  products(): any[] {
    return products;
  }

  getSeverity(product: any): any {
    return product.severity;
  }
}
