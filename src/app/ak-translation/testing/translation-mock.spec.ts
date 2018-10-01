import { IAkTTranslation, IAkTPlural } from "../ak-translation.model";

export const AkTtranslationsMock = {
  de: <IAkTTranslation> {
    wizard: 'Zauberer',
    dwarf: 'Zwerg',
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
    dwarf: 'dward',
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