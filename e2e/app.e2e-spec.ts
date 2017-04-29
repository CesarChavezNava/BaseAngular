import { BaseAngularPage } from './app.po';

describe('base-angular App', () => {
  let page: BaseAngularPage;

  beforeEach(() => {
    page = new BaseAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
