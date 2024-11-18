import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagOracoesComponent } from './pag-oracoes.component';

describe('PagOracoesComponent', () => {
  let component: PagOracoesComponent;
  let fixture: ComponentFixture<PagOracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagOracoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagOracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
