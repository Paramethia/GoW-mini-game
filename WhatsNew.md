# God of War Mini Game

#### <center><i>Alpha v1.7<i></center>

### Small changes & improvements

- Health bar will now be on by default.
- Removed health bar toggle in settings.
- Kratos will now automatically update with each weapon he holds in Sparta.
- Removed enemy health bars for some battles.
- Changed some weapon stats & prices to make them more balanced.
- Nerfed some enemies to make some battles more balanced.
- Battle area container width increased by 200 pixels.
- Kratos will now have increased speed after defeating Hermes.
- Each of Kratos' weapons will now light up according to which weapon is attacking, instead of all of them lighting up whenever any weapon attacks (only applicable to lightable weapons, of course).
- Improved enemy AI decision handling for light and heavy attacks to be more consistent.
- Gorgon, Banshee, and Medusa heavy attacks will no longer break your block.
- Zeus light attacks can no longer still apply damage while blocking.
- Hotbar will now disappear after a battle is complete.
- Made Kratos blocks still apply knockback (reduced) when attacked while blocking.

### Bug fixes

- Fixed main menu button key events still working while the options menu is open.
- Fixed SFX audio settings not applying the selected volume.
- Fixed the Smithy selling function causing orbs to appear as "undefined".
- Fixed enemies immediately chasing Kratos as a battle begins.
- Fixed Kratos' dashing/dodging sometimes causing him to continue moving in a certain direction.
- Fixed enemies not actually breaking their block when Kratos heavy attacks them.
- Fixed blocking audio not playing for kratos when he is heavy attacked while blocking.
- Fixed Kratos being able to block while held by the Underground hands in the Hades battle.

### Developer mode

The new dev mode (meant more for debugging or just seeing some hidden things) will be found in either the main-menu options or the in-game settings. When on, it will turn off your health bar and show text of your health instead, allowing you to see your exact health more precisely. It will also show Kratos' + Enemies' hitboxes, attack ranges, and other stuff.

This will of course, be off by default.

### Better main menu options

In the [previous version](https://gow-mini-game-old.vercel.app), you only had a few audio options with basically no exclusive options. There were only 3 audio options with 2 already accessible through in-game settings. Now I've added a lot more options in the main-menu: 

**More audio options**

There are now 3 more audio options. Audio options for UI, Dialogue, and _All_. With the powerful All option, you can easily make ALL audio a certain amount instead of manually making all audio the same. Otherwise, you can make each audio type a specific volume.

**Controls**

Also added controls in main menu to have a clear view of all controls for battles.

**Advanced options**

<u>Hardcore</u> <br />
There will be a new hardcore option found in the advanced options. This makes sure that your progress will be fully gone when you die (yes just one death). Off by default.

<u>Dev mode</u> <br />
The new developer mode got added in the main menu options as well.

<u>Freeplay</u> <br />
There will now be a new freeplay mode. This will basically just allow you to choose which individual enemies you want to fight instead of being forced to progress through the game in my programmed order. It will be off by default.
⚠️ _This can only be turned on once you have beat the game_

<u>Update changes</u> <br />
Also added a button to link you to the new update changes throughout the development of the game. The link will take you right here. You will read this exact update changes you are reading.

### Better inventory & hotbar system

Refactored inventory system along with the hotbar to be more dynamic. Now each slot won't only belong to a specific weapon. It will update according to your exact inventory.

## Health system change

Before, you could always increase your health to the highest (200) by defeating enemies and grinding their green orbs. Now that's changed. Your max health will now stay at 100 in the beginning. That is unless...

**Gold orbs**

There will now be gold orbs that you will collect after defeating specific enemies. Of course, the amount of orbs you will get varies for each enemy. Here's how they work:

Collect gold orbs -> increase max health

⚠️ Gold orbs are NOT grindable. You can only ever get them ONCE from certain enemies. You can increase your max health from progression only.

### Weapons claiming change

In alpha 1.6 and less, you could only get weapons from the smithy/shop. Which was kinda stupid. Now you will need to get specific weapons from specific bosses/gods.

Claws of _Hades_ from Hades
Nemean cestus from Hercules
Blade of Olympus from Zeus

Other weapons can get bought with red orbs from the smithy.

### New Smithy design

A new design for the smithy (Blood forge). With a change of some weapons that will be there along with price changes for the weapons too. Kratos will now also appear in the smithy unlike before. Kratos will now automatically update whenever he obtains a new weapon.

## New weapon 

**Arms of Sparta**

The Arms of Sparta were an addition to Kratos' arsenal in God of War: Ghost of Sparta. Kratos wielded these weapons against his enemies when he was a mortal general in the Spartan Army.

### New location

**Athens**

Athens is a Greek city that first appears in the first original God of War (2005). It is the city of Athena.

### New enemies

**Undead archer**

An undead archer is a common and usually easy foe to defeat, but when encountered in numbers, they can become quite irritating enemies to face. At close range, they can hit Kratos with their bows.

**Undead legionnaire**

Undead legionnaires are the basic type of undead soldier. They are the most common enemies in the original God of War series, as well as undead creatures in general. Which are the most common servants of the Gods and even some powerful creatures.

**Cursed legionnaire**

The cursed legionnaire is basically a stronger undead legionnaire. They appear more armored, carry larger and stronger swords, and are more skilled at fighting.

**Fallen legionnaire**

Fallen legionnaires are adorned in strong armor, and carry deadly spiked swords. Mastering fighting skills similar to that of the cursed legionnaire, although far more powerful.

### Progression update

Tn version alpha 1.6 and under, you could not automatically go to next battle. You had to manually return and choose the next battle. Now you can only do that in freeplay mode.

**New battle selection system**

When clicking a location, you will now automatically be taken to the battle of that location. After a battle is complete, there will now appear a "Next" button that you can click to move to the next battle. It will only keep appearing until the last battle _of that place_. After you complete the last battle of that location, you will have to return to Sparta move to the next location battles. The return button will also still be there for each battle completion if you want to go back to Sparta to go to the smithy for a new weapon. Once you plan to return to the location you were battling in, the battle selection system will automatically return you to the battle you were on. Otherwise it can automatically move to the next battle if your current battle was already completed. If you already finished all the battles of the location, it will choose to take you back to the first battle of the location. In case you want to grind red and/or green orbs. Don't worry though, your next location will still be unlocked.

### Multi-enemy battles

In the previous update, you could only battle ONE enemy each battle. Now this can only be done in free play mode. Though some battles throughout the progression (mostly boss or mini boss battles) will still have only one enemy you will battle. Other battles in the new progression system, will include multiple enemies. You can attack one enemy at a time (for now at least).

**Focus**

There will be a small arrow facing down "∨" on the enemy that is currently being focused. Keep an eye out for that.

You can press the F key in battles to change which enemy you are focusing on. If the enemy you are focusing on died, I made a function to automatically update the focused enemy.

This obviously won't apply if the battle only has one enemy.

### Optimization

**Images**

For faster loading times and better performance, I reduced plenty of image sizes that were unnecessarily large. This helps you preserve your data and also your performance. 

**Audio**

I changed some audio (music and ambience) from .mp3 files to .ogg files for better looping and also helping to make some audio sizes smaller.

**Project size decrease**

The previous version (Alpha 1.6) took up about 160mb. Now with all the optimization I made for Alpha 1.7 (which I mentioned above) it now takes up around 111mb. A 31% reduction in project size, despite all the new images, audio, enemies, locations, and other content added.

### Development improvement

- Refactored audio.js code to be more organized.
- Refactored audio options & settings code to be easier for when adding new audio later on.
- Refactored battle code to be a lot better. Separated engine and battle configuring + choosing code.
- Refactored enemy battle choosing code for all places.
- Better variable naming & variable definition placements in src/audio.js + comments with organisation.

###### Released 8 October 2026 (hopefully)