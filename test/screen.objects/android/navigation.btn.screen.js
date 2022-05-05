import { Base } from "./base.screen";

class NavigationScreen extends Base {
  // elements
  get navBtn() {
    return $(
      `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]`
    );
  }

  get trashCanBtn() {
    return $(`//*[@text="Trash Can"]`);
  }
  // methods
}

export const navigationScreen = new NavigationScreen();
