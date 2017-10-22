import { browser, element, by } from 'protractor';

export class PvSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root'));
  }
}
