export class NgcliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngcli-app h1')).getText();
  }
}
