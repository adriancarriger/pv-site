import { PvSitePage } from './app.po';

describe('pv-site App', function() {
  let page: PvSitePage;

  beforeEach(() => {
    page = new PvSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
