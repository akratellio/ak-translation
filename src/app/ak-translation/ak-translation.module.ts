import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkTranslationPipe } from './ak-translation.pipe';
import { AkTranslationPluralPipe } from './ak-translation-plural.pipe';
import { AkTranslationComponent } from './ak-translation.component';
import { AkTranslationPluralComponent } from './ak-translation-plural.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AkTranslationPipe, 
    AkTranslationPluralPipe,
    AkTranslationComponent,
    AkTranslationPluralComponent
  ],
  exports: [
    AkTranslationPipe, 
    AkTranslationPluralPipe,
    AkTranslationComponent,
    AkTranslationPluralComponent
  ]
})
export class AkTranslationModule { }
