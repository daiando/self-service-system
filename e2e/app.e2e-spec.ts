import { SelfServiceSystemPage } from './app.po';

describe('self-service-system App', function() {
  let page: SelfServiceSystemPage;

  beforeEach(() => {
    page = new SelfServiceSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('svr works!');
  });
});
