describe.skip("Android Native Feature Tests", () => {

  it("Access an Activity directly", async () => {
    // access activity
    await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");
    // assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working with Dialog Boxes", async () => {
    await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

    // click on first dialog
    const shortMessageBtn = await $(
      `//android.widget.Button[@resource-id="io.appium.android.apis:id/two_buttons"]`
    );
    await shortMessageBtn.click();

    // Assertion alert message is visible
    const alertMessage = await $(
      `//android.widget.TextView[@resource-id="android:id/alertTitle"]`
    );
    await expect(alertMessage).toExist();

    // accept Alert
    // await driver.acceptAlert();

    // accept Alert
    // await driver.dismissAlert();

    console.log(`ALERT TEXT --> ${await driver.getAlertText()}`);
    
    const okBtn = await $(`//android.widget.Button[@resource-id="android:id/button1"]`);
    await okBtn.click();

    // assertion - alert box is no longer visible
    await expect(alertMessage).not.toExist();
  });
});
