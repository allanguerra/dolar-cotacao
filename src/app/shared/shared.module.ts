import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    SectionComponent,
    NavigationComponent,
    ArticleComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionComponent,
    NavigationComponent,
    ArticleComponent,
    MenuComponent
  ]
})
export class SharedModule { }
