import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineCounterComponent } from './line-counter/line-counter.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguageLineComponent } from './language-line/language-line.component';
import { FrameworkLineComponent } from './framework-line/framework-line.component';


@NgModule({
  declarations: [
    LineCounterComponent,
    DeclarationComponent,
    ExperienceComponent,
    LanguageLineComponent,
    FrameworkLineComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineCounterComponent,
    DeclarationComponent,
    ExperienceComponent,
    LanguageLineComponent,
    FrameworkLineComponent
  ]
})
export class SharedModule {
}
