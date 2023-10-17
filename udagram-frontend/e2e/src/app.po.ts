import { browser, by, element } from 'protractor';
// ThienNLNT
export class AppPage {
  navigateTo(destination) {
    return browser.get(destination);
  }
// ThienNLNT
  getTitle() {
    return browser.getTitle();
  }
// ThienNLNT
  getPageOneTitleText() {
    return element(by.tagName('app-home')).element(by.deepCss('ion-title')).getText();
  }
}
