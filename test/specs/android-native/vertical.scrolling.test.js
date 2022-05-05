describe("Android Native Feature Tests", () => {
  beforeEach(async () => {
    await driver.reset();
  });
  it("Access an Activity directly", async () => {
    await $(`~App`).click();
    await $(`~Activity`).click();

    // scroll to the end (not stable if element gets move)
    // await $(
    //   `android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)`
    // );

    //scrollTextIntoView - more stable
    // Will be scrolling page from top to button and to the top again to find the element
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")`
    ).click();
    // await $(`~Secure Surfaces`).click();

    await expect($(`~Secure Dialog`)).toExist();
  });

  it("Horizontal scrolling", async () => {
    await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

    // Horizontal scrolling
    // Will scroll once horizontally
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`
    );
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()`
    );
  });

  it("40.Excersice", async () => {
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

    const currentDate = await $(
      `//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]`
    );
    await expect(currentDate).toExist();
    const todaysDate = await currentDate.getText();
    await $(`~change the date`).click();

    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`
    );

    await expect($(`~10 June 2022`)).toExist();
    await $(`~10 June 2022`).click();

    await $(`//android.widget.Button[@resource-id="android:id/button1"]`).click();
    await expect(currentDate.getText()).not.toEqual(todaysDate);
    await driver.pause(3000);
  });
});
