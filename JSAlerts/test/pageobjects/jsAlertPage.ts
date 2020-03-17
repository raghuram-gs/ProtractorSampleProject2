// Ranorex Webtestit Page Object File

import { browser, by, element, ExpectedConditions } from 'protractor';

export class JsAlertPage {
  // Additional data: {"img":"screenshots/907b080c-0658-aa7c-0f98-69e51918e1f9.png"}
  private get clickForJsConfirm() { return by.css('[onclick=\'jsConfirm\\(\\)\']'); }

  // Additional data: {"img":"screenshots/6d70c662-f6ce-82c6-5b7b-e9dc8874148b.png"}
  private get list() { return by.css('ul'); }

  public async getResult(): Promise<string> {
    return await element(by.id('result')).getText();
  }
  public async clickOk() {
    await browser.driver.switchTo().alert().accept();
  }

  public async clickCancel() {
    await browser.driver.switchTo().alert().accept();
  }

  public async enterPrompt(value: string) {
    await browser.driver.switchTo().alert().sendKeys(value);
  }

  public async clickOnJsAlert() {
    await element(by.css('#content > div > ul > li:nth-child(1) > button')).click();
  }
  public async clickOnJsConfirm() {
    await element(this.list).all(by.css('li:nth-Child(2)')).click();
  }

  public async clickOnJsPrompt() {
    await element(this.list).all(by.css('li:nth-Child(3)')).click();
  }

  public async open(): Promise<JsAlertPage> {
    await browser.get('https://the-internet.herokuapp.com/javascript_alerts');
    return this;
  }
}
