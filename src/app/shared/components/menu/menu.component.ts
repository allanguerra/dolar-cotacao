import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuOpen: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listenRouteChange();
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private listenRouteChange(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe( _ => this.menuOpen = false);
  }
}
