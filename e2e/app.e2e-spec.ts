import { PvSitePage } from './app.po';

describe('pv-site App', () => {
  let page: PvSitePage;

  beforeEach(() => {
    page = new PvSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    const item = page.getParagraphText();
    const result = item.takeScreenshot();

    console.log(result);

    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
