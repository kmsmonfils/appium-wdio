import { TEST_DATA } from "../../helpers/test.data";
import { addNotesScreen } from "../../screen.objects/android/add-note.screen";
import { optionsBtnScreen } from "../../screen.objects/android/options-btn.screen";
import { navigationScreen } from "../../screen.objects/android/navigation.btn.screen";
import { trashCanScreen } from "../../screen.objects/android/trash-can.screen";

describe("Add Notes", () => {
  before(async () => {
    await addNotesScreen.resetState();
    await addNotesScreen.skipTutorial();
  });

  it("Add a note, save changes & verify note", async () => {
    await addNotesScreen.addNoteText.click();
    await addNotesScreen.textOption.click();

    await expect(addNotesScreen.textEditing).toBeDisplayed();

    // Add note title
    await addNotesScreen.noteHeading.setValue(TEST_DATA.NOTE_HEADER_NAME);
    await addNotesScreen.noteBody.setValue(TEST_DATA.NOTE_BODY_CONTENT);

    // Save the changes
    await addNotesScreen.saveNote();

    // asssertion
    await expect(addNotesScreen.editBtn).toBeDisplayed();
    await expect(addNotesScreen.viewNote).toHaveText(TEST_DATA.NOTE_BODY_CONTENT);
  });

  it("Delete Note", async () => {
    await addNotesScreen.back();
    await expect(addNotesScreen.noteWithName(TEST_DATA.NOTE_HEADER_NAME)).toBeDisplayed();
    const addedNote = await addNotesScreen.noteWithName(TEST_DATA.NOTE_HEADER_NAME);
    await addedNote.click();
    await optionsBtnScreen.optionsBtn.click();
    await optionsBtnScreen.deleteBtn.click();

    await optionsBtnScreen.acceptAlert();

    await navigationScreen.navBtn.click();
    await navigationScreen.trashCanBtn.click();
    await expect(trashCanScreen.noteWithName(TEST_DATA.NOTE_HEADER_NAME)).toBeDisplayed();
  });
});
