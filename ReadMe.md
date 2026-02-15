# God of War mini game

<h4 align="center"><i> Alpha v1.6 </i></h4>

**_Small changes:_**

- Main theme music will now be on by default.
- Removed health potions. I dunno why I added that shi.
- Changed shop to smithy.
- You now cannot sell the blades of chaos. Because why would you.
- Changed some weapon prices and selling prices.
- Changed Medusa to Gorgan (it was meant to be that).
- Changed enemy progression a little.
- Changed some weapon stats.
- Changed a bunch of enemies' stats.
- A LOT of new sprites for Kratos. A bunch of new sprites for some enemies.
- Bunch of new sounds & replaced sounds.
- Decreased weapons & enemy damages to make battles a little longer.
- Decreased enemies' red orbs reward for defeating them.

**Bug fixes**

- Fixed weapon stats not showing up for some weapons when you have already bought a weapon from the smithy/shop.
- Fixed Kratos getting smaller after you die and restart.
- Fixed Kratos not facing the correct way when blocking sometimes.
- Fixed when the attack "animation" should end while attacking.
- Fixed enemy & Kratos' health bar not updating correctly during battle.
- Fixed Kratos' death sprite staying in the air (if you jumped) when you are killed.
- Fixed sprite sizes to be more consistent for everyone.
- Fixed Enemy still moving towards you to attack even if they are already in attacking range.
- Fixed music/ambience volume not staying on 0 (if you set it as that) when you reload the page.

**_Better weapon stats_**

Before, there was barely any stats for weapons. They all just had different damages, but all used the same cooldown, attack speed, stun time, knockback, and range. Now that's all improved for each weapon. You'll find _some_ of their new stats at the smithy (previously known as shop).

PS: I also slightly improved the stylng of the stats container.

**_New weapon_**

There is now a new weapon. The nemean cestus. They are a pair of large metal gauntlets, each resembling a snarling lion's head, that greatly increased the strength of its wielder as they are worn.

The cestus was first given to its original owner, Hercules, after he slew the Nemean Lion as one of his 12 Labours.

**_New enemies_**

_Gorgon_

I renamed the previous version's enemy (Medusa) as Gorgon 'cause it was actually meant to be Gorgon and not Medusa.

_Medusa_

I added the correct depiction of Medusa this time.

_Hades_

He's the God of the dead & the ruler of the underworld so you will find him in the underworld of course. I should've added him long ago. I was just too lazy to make the sprites.

**_Combat update_**

The combat against enemies from the [previous version](https://gow-mini-game-old.vercel.app) was really basic, and barely had variety with different enemies. The enemy AI was readable, easily adaptable, and just pretty basic overall. There was a lot of things that were making the combat not feel right. Now that is significantly improved with the following:

_Improvements & changes:_

- When opening settings (while in battle), the battle will now pause.
- There is no longer a blocking duration. You can block however long you want as long as you are holding the Q key.
- Kratos will now get stunned & knocked back. The effect varies with each enemies.
- Decreased gravity slightly for jumps to feel smoother.
- Added proper hitboxes to make attacks more accurate.
- Improved overlaping prevention thanks to the hitboxes I made.
- Kratos won't be able to push enemies as he runs into them anymore.
- Added an FPS counter to check performace.

_Light & heavy attacks:_

Kratos now has a light and heavy attack. Light attack with E key. Heavy attack with R key.
Each enemy now also has a heavy and light attack.

Heavy attacks obviously deal more damage than light, but they are also slower in return. Heavy attacks against enemies also break kratos' block so it's useless to block when getting heavy attacked. You will have to dodge to avoid damage from it. Light attacks are faster, but has less damage than heavy.

_Enemy variety_

Each enemy now has different knockbacks & stun times depending on which attack they use.
Some enemies now have unique counters/defenses they will do on you. Some will just block, one will dodge, some will do other things. You can find out each enemy ability when choosing which enemy you want to battle by pressing the new info button. There will be a little animation for you see it when you load into the underworld or Olympus.

_Better enemy AI_

Each enemy will now randomly decide their next move. "Should I block, light attack, heavy attack?". Any will be completely randomly decided without you being able to predict the next move.

Each enemy has a differnt chance of choosing light attack, heavy attack, blocking, etc.

**_Orbs_**

There will now be green & red orbs that you will collect after each enemy you defeat. Of course, the amount of orbs you will get varies for each enemy.
You will see these green and red orbs come out of the enemy after you defeat them. They will firstly spread out as they spawn, and then each of them will come & get inside you.

_Green orbs_

As I mentioned, potions are removed. They are now replaced by green orbs that increase your health after killing an enemy.

_Red orbs_

Red orbs work pretty much the same as before, use them to buy weapons if you want (you will definitely want to).

**_SFX improvement_**

SFX (sound effects) audio from the previous version was absolute sh**. Every weapon had the same sound to it when attacking. The attack and hit sounds sounded terrible as well and did not match the action that was being done which made the experience worse. That is all much better now with the following:

- Each weapon now has it's own unique attack sound (for both light & heavy attacks).
- Each of the enemy attacks (light & heavy) will also have improved attack sounds matching it's action (like sword swings, punches etc.)
- Kratos will now have different grunt sounds he will do as he is getting attacked.
- Each enemy will also have a different hit/hurting sound as you successfully attack it.

**_Loader_**

There are a lot of new images added this update.
Since this project is getting much bigger, it is time I add a loading screen to load in the images properly before you can play. Otherwise, things will look terrible like the older version.

**_Installable_**

You can now install the game directly to your device. To quickly access it instead of needing to find my link to play it.

**_Development improvement:_**

- Refactored some code.
- Removed some audio I accidentally left in ./Audio that was not being used
- Better variable naming & variable definition placements in src/audio.js + comments with organisation