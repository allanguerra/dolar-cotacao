import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeArtigoComponent } from './exibe-artigo.component';

describe('ExibeArtigoComponent', () => {
  let component: ExibeArtigoComponent;
  let fixture: ComponentFixture<ExibeArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
