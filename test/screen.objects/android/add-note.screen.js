import { Base } from "./base.screen";

export class AddNotesScreen extends Base {
  // Elements
  get skipBtn() {
    return $(`//android.widget.Button[@text="SKIP"]`);
  }
  get addNoteText() {
    return $(`//*[@text="Add note"]`);
  }
  get textOption() {
    return $(`//*[@text="Text"]`);
  }
  get textEditing() {
    return $(`//*[@text="Editing"]`);
  }
  get noteHeading() {
    return $(
      `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]`
    );
  }
  get noteBody() {
    return $(
      `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]`
    );
  }
  get editBtn() {
    return $(
      `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]`
    );
  }
  get viewNote() {
    return $(
      `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]`
    );
  }

  // Methods

  async saveNote() {
    await this.back();
    await this.back();
  }

  async skipTutorial() {
    await this.skipBtn.click();
    await expect(this.addNoteText).toBeDisplayed();
  }
  async noteWithName(noteName) {
    return await $(`//*[@text="${noteName}"]`);
  }
}

export const addNotesScreen = new AddNotesScreen();
