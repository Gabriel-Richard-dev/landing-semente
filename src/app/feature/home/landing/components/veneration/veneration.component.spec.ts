import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenerationComponent } from './veneration.component';

describe('VenerationComponent', () => {
  let component: VenerationComponent;
  let fixture: ComponentFixture<VenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
