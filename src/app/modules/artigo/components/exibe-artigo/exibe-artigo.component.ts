import { Component, OnInit } from '@angular/core';
import { ArtigoService } from 'src/app/shared/services/artigo-service/artigo.service';
import { ActivatedRoute } from '@angular/router';
import { Artigo } from 'src/app/models/artigo.model';

@Component({
  selector: 'app-exibe-artigo',
  templateUrl: './exibe-artigo.component.html',
  styleUrls: ['./exibe-artigo.component.scss']
})
export class ExibeArtigoComponent implements OnInit {

  public artigo: Artigo;

  private artigoID: string;

  constructor(
    private route: ActivatedRoute,
    private artigoService: ArtigoService
  ) { }

  ngOnInit(): void {
    this.artigoID = this.route.snapshot.params['id'];
    this.obterArtigo();
  }

  private obterArtigo(): void {
    this.artigo = this.artigoService.obterArtigo(this.artigoID);
  }
}
