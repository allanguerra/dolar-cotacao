import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [
    SectionComponent,
    NavigationComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionComponent,
    NavigationComponent,
    ArticleComponent
  ]
})
export class SharedModule { }
