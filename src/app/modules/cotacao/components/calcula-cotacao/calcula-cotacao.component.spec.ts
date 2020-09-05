import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaCotacaoComponent } from './calcula-cotacao.component';

describe('CalculaCotacaoComponent', () => {
  let component: CalculaCotacaoComponent;
  let fixture: ComponentFixture<CalculaCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaCotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
