import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AkTranslationModule } from './ak-translation/ak-translation.module';
import { AkTranslationComponent } from './ak-translation/ak-translation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AkTranslationModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
