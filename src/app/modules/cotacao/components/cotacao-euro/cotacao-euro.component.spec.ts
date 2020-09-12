import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoEuroComponent } from './cotacao-euro.component';

describe('CotacaoEuroComponent', () => {
  let component: CotacaoEuroComponent;
  let fixture: ComponentFixture<CotacaoEuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoEuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
