import { AppPage } from './app.po';
import { element, by, promise, browser } from 'protractor';

function clickDe(): promise.Promise<void> {
  return element(by.id('language-de')).click();
}

function clickEn(): promise.Promise<void> {
  return element(by.id('language-en')).click();
}

function getText(id: string): promise.Promise<string> {
  return element(by.id(id)).getText();
}

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });  

  it('should get wizard for german', () => {
    getText('wizard').then((text: string) => expect(text).toBe('Zauberer'));
    getText('dwarf').then((text: string) => expect(text).toBe('Zwerg'));
  });

  it('should get wizard for english', () => {
    clickEn()
      .then(() => browser.sleep(200))
      .then(() => getText('wizard'))
      .then((text: string) => expect(text).toBe('wizard'))
      .then(() => getText('dwarf'))
      .then((text: string) => expect(text).toBe('dwarf'));
  });
});
