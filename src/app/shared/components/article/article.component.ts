import { Component, OnInit, Input } from '@angular/core';
import { Artigo } from 'src/app/models/artigo.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input()
  public artigo: Artigo

  constructor() { }

  ngOnInit(): void {
  }

}
