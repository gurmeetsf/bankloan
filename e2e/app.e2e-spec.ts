import { BankloanPage } from './app.po';

describe('bankloan App', () => {
  let page: BankloanPage;

  beforeEach(() => {
    page = new BankloanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
