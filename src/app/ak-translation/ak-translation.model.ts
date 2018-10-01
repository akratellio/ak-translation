export type AkTLanguageType = 'de' | 'en' | 'fr';

export interface IAkTConfiguration {
  lg: AkTLanguageType
}

export const AkTConfigurationDefault = <IAkTConfiguration> {
  lg: 'en'
};

export interface IAkTPlural {
  '=0': string;
  '=1': string;
  '=2'?: string;
  '=3'?: string;
  '=4'?: string;
  'other': string;
}

export interface IAkTTranslation {
  [key: string]: string | IAkTPlural;
}