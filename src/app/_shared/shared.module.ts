import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineCounterComponent } from './line-counter/line-counter.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    LineCounterComponent,
    DeclarationComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineCounterComponent,
    DeclarationComponent,
    ExperienceComponent
  ]
})
export class SharedModule {
}
