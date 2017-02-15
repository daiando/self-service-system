import { browser, element, by } from 'protractor';

export class SelfServiceSystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('svr-root h1')).getText();
  }
}
