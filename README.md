# God of War mini game

<h4 align='center'><b><i>Alpha v1.3 & a half</i></b></h4>

**Small changes:**

- You now have to click to start the game ('Cause you have to interact with the document to trigger audio).
- Main menu settings now actually work.
- You can now click m to play/pause main menu music and escape to open or close settings.
- Removed the expansion function. Everything is grown by default.
- Slightly updated stats container design.
- Inventory now added to Sparta. Makes more sense to add it there as well.
- Reduced potion price.
- New Banshee, Medusa and Cyclops image
- Changed a few enemies' health and damage. Also removed their levels.
- Removed Kratos' exp. It was stupid to keep it there.
- You can no longer run from your enemy. Once you start a battle, you must end it.
- You now do not have to restart after finshing the game.

**Bug removals:**

- You can no longer heal in the main menu when pressing f.
- All glitchy hover effects fixed.
- Fixed weapon selling function to only sell when you have your current weapon in your inventory.
- Fixed ambience still playing while in Underworld/Olympus when pressing 'Return to main menu" button.
- Made sure that if you reload the page, after you died (without pressing the restart button), you still start from the beginning.

**Optimization**

Things are now more optimized thanks to DOM manipulation that was added.

**Notification update**

You will now get notified of every enemy you unlock.

**Battle areas**

Before, there was no exact battle area containers for the Underworld and Olympus. 
Now there is. To keep things more organized and to make things easier for future updates.

**New attack function**

A whole newly designed attack function for Kratos and every enemy. The way it was meant to be.

- You can now move Kratos (as an image for now) in battle and the canvas re-draws the image according to your position and what you are doing.
	Same with the enemies but it's limited for them due to lack of resources for them.
- Kratos and enemies get a red highlight and a little hop as an attack indicator.
- Enemy follows kratos once he gets close to them.
- Controls for Kratos added to settings.

**Development improvement**

Refactored and improved the code. It's slightly less now (almost 300 lines less) and more organized.
