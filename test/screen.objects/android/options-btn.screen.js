import { Base } from "./base.screen";

class OptionsButtonScreen extends Base {
  get optionsBtn() {
    return $(`~More`);
  }

  get deleteBtn() {
    return $(`//*[@text="Delete"]`);
  }
}

export const optionsBtnScreen = new OptionsButtonScreen();
