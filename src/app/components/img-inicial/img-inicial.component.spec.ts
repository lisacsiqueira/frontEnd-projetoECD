import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgInicialComponent } from './img-inicial.component';

describe('ImgInicialComponent', () => {
  let component: ImgInicialComponent;
  let fixture: ComponentFixture<ImgInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
