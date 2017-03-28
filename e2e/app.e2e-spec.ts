import { RandomComicXKCDAngular2Page } from './app.po';

describe('random-comic-xkcd-angular2 App', () => {
  let page: RandomComicXKCDAngular2Page;

  beforeEach(() => {
    page = new RandomComicXKCDAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
