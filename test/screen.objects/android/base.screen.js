export class Base {
  // Elements

  // Methods
  async resetState() {
    await driver.reset();
  }
  async back() {
    await driver.back();
  }
  async forward() {
    await driver.forward();
  }
  async acceptAlert() {
    await driver.acceptAlert();
  }
}
