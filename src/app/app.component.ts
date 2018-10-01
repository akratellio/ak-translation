import { Component } from '@angular/core';
import { IAkTTranslation, IAkTPlural, AkTLanguageType } from './ak-translation/ak-translation.model';
import { AkTranslationService } from './ak-translation/ak-translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  translations = {
    de: <IAkTTranslation> {
      wizard: 'Zauberer',
      dwarf: 'Zwerg',
      lastnameOfGandalf: 'der Weiße',
      hobbit: <IAkTPlural>{
        '=0': 'keine Halblinge',
        '=1': 'ein Halbling',
        '=2': 'zwei Halblinge',
        'other': 'viele Halblinge'
      },
      hobbitname: 'Hallo ich heiße ${0} ${1}',
      wizardname: 'Hallo ich heiße ${firstname} ${lastname}' 
    },
    en: <IAkTTranslation>{
      wizard: 'wizard',
      dwarf: 'dwarf',
      lastnameOfGandalf: 'the White',
      hobbit: <IAkTPlural>{
        '=0': 'no Hobbits',
        '=1': 'one Hobbit',
        '=2': 'two Hobbits',
        'other': 'some Hobbits'
      },
      hobbitname: 'hi my name is ${0} ${1}',
      wizardname: 'hi my name is ${firstname} ${lastname}'
    } 
  };

  constructor(public akTranslationService: AkTranslationService) {
    this.akTranslationService.addTranslation('de', this.translations.de);
    this.akTranslationService.addTranslation('en', this.translations.en);
    this.akTranslationService.setLanguage('de');
  }
}
