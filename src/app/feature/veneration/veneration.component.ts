import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-veneration',
  standalone: true,
  imports: [CardModule, ButtonModule, FieldsetModule, DialogModule],
  templateUrl: './veneration.component.html',
  styleUrl: './veneration.component.scss',
})
export class VenerationComponent {
  visible = false

  showDialog(){
    this.visible = true;
  }
}
