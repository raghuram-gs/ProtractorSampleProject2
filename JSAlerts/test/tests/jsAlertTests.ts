// Ranorex Webtestit Test File

import { browser } from 'protractor';
import { JsAlertPage } from '../pageobjects/jsAlertPage';

const jsAlertPage = new JsAlertPage();

describe('When I open a JS Alert', () => {
  beforeEach(async () => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;
    await jsAlertPage.open();
  });

  it('should update the result label on click of Ok', async () => {
    // 1. Arrange
    await jsAlertPage.clickOnJsAlert();

    // 2. Act
    await jsAlertPage.clickOk();
    const result: string = await jsAlertPage.getResult();

    // 3. Assert
    await expect(result).toEqual('You successfuly clicked an alert');
  });
});

describe('When I open a JS Confirm', () => {
  beforeEach(() => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;
  });

  it('should update the result label on click of Ok', async () => {
    // 1. Arrange
    await jsAlertPage.clickOnJsConfirm();

    // 2. Act
    await jsAlertPage.clickOk();
    const result: string = await jsAlertPage.getResult();

    // 3. Assert
    await expect(result).toEqual('You clicked: Ok');
  });

  it('should update the result label on click of Cancel', async () => {
    // 1. Arrange
    await jsAlertPage.clickOnJsConfirm();

    // 2. Act
    await jsAlertPage.clickCancel();
    const result: string = await jsAlertPage.getResult();

    // 3. Assert
    await expect(result).toEqual('You clicked: Cancel');
  });
});

describe('When I open a JS Prompt', () => {
  beforeEach(() => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;
  });

  it('should update the result label on click of Ok with the entered prompt data', async () => {
    // 1. Arrange
    await jsAlertPage.clickOnJsPrompt();

    // 2. Act
    await jsAlertPage.enterPrompt('Hello');
    await jsAlertPage.clickOk();
    const result: string = await jsAlertPage.getResult();

    // 3. Assert
    await expect(result).toEqual('You entered: Hello');
  });

  it('should update the result label on click of Cancel', async () => {
    // 1. Arrange
    await jsAlertPage.clickOnJsPrompt();

    // 2. Act
    await jsAlertPage.enterPrompt('Hello');
    await jsAlertPage.clickCancel();
    const result: string = await jsAlertPage.getResult();

    // 3. Assert
    await expect(result).toEqual('You entered: null');
  });

});
