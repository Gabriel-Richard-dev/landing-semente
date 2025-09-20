import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

const animation = { duration: 50000, easing: (t: any) => t };

@Component({
  selector: 'app-veneration',
  standalone: true,
  imports: [CardModule, ButtonModule, FieldsetModule, DialogModule],
  templateUrl: './veneration.component.html',
  styleUrl: './veneration.component.scss',
})
export class VenerationComponent {
  visible = false;
  slider?: KeenSliderInstance;
  perView = window.innerWidth < 990 ? 1 : 3;
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      mode: 'free-snap',
      loop: true,
      slides: {
        perView: this.perView,
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
  }

  ngOnDestroy() {
    this.slider?.destroy();
  }

  showDialog() {
    this.visible = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slider?.destroy();
    if (window.innerWidth < 990) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        mode: 'free-snap',
        loop: true,
        slides: {
          perView: 1,
        },
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
      });
      return;
    }
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      mode: 'free-snap',
      loop: true,
      slides: {
        perView: this.perView,
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
  }
}
