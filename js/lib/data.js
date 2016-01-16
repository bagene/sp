//DMC.controller('charController', [
//    '$scope',
//    function($scope){
//        $scope.char = 1;
//        $scope.chars = [
//            {
//                charid:0,
//                name:'Dante',
//                desc:"Dante is the protagonist of the rebooted portion of the Devil May Cry series. He is a demon-angel hybrid known as a Nephilim, who lives as a demon hunting vigilante. He is counted by the officials of his hometown of Limbo City as a member of an organization of 'terrorists', and is being pursued by both national and worldwide authorities. Dante himself is a young and rebellious social outcast. He lives and fights in Limbo City, where demons seemingly influence every aspect of the world and the social condition of the humans living there.",
//                app:"Dante stands at around six feet and with a more rounded face, a small scar going across his right eyebrow and cheek, and wider jaw than he was in the TGS 2010 trailer, as the character model was updated to resemble the actor portraying him, Tim Phillipps, and his eye color seems to be grey-blue. His hair is black, with the sides of his head shaved, forming a mohawk out of the hair at the top of his head, tapering off into a point at the nape of his neck. As the game progresses, the hair at the back of his head can be seen changing permanently white. He also sports a strange glowing tattoo on his back between his shoulder blades. In one trailer, this tattoo glows briefly and heals scars he has on his back, and during gameplay it can be seen through his coat as he switches to an angelic or demonic weapon, which is also accompanied by a blue or red color.His attire consists of a black, 3/4-length, hooded leather jacket with red interior linings and the British Union flag sewn on the left arm, a gray tanktop, black fingerless gloves, black faded jeans, black military boots, and a necklace reminiscent of half of the Perfect Amulet that features prominently throughout the series. His sword is slung over his back favoring his left hand, and his pistols are placed in holsters at the back of his waist, under his coat. Dante also seems to be ambidextrous, favoring either hand for melee attacks with his weapons.When Dante uses Devil Trigger, his hair is flushed completely white, his coat becomes bright red, his eyes become red with white irises and small vein-like cracks run across his skin. These effects fade when Devil Trigger deactivates, but after his final battle his hair remained white permanently.",
//                img:"img/dante.png",
//                imgface:"img/danteface.png"
//            },
//
//            {
//                charid:1,
//                name:'Vergil',
//                desc:"Vergil is the leader of 'The Order' and twin brother of Dante in DmC: Devil May Cry. As Dante's younger brother, he is a Nephilim born to the demon Sparda and the angel Eva. He opposes Mundus's tyrannical rule over humanity, and enlists his brother's help in gaining revenge on the demon king for tearing their family apart. After Mundus' defeat, Vergil reveals his dark intentions, thus becoming the final boss in the game. He is also the protagonist of 'Vergils Downfall', an additional DLC chapter for the game that picks up where the story of the main game ends.",
//                app:"As Dante's twin, he bears a close resemblance to his brother, and has blue-gray eyes, and their facial structure is modeled after Dante's voice actor, Tim Phillips. However, while Dante's hair is black, Vergil's is white. He wears a dark coat with a long tail on the right side, and a collar with a larger left side. There is a blue band on the left bicep of the coat, which also has blue, ornate scrollwork sewn into the left side of the upper back, and a blue lining. Vergil's hands are covered by white gloves, and he wears blue dress slacks, with black leather shoes. When out in public, he often hides his silver hair underneath a black homburg with curled brim sides. He also wears his half of their mother's amulet, a pendant identical to Dante's, albeit blue in coloring.When issuing videos for The Order, Vergil wears a silver mask with a menacing, toothy grin quite similar to Jester's face from Devil May Cry 3 and uses a voice distorter.After becoming corrupt, Vergil's appearance is similar to that of his original counterpart's 'corrupt Vergil' his hair becomes unkept and swept back, his skin pales, showing some of its veins, and though he loses his pupils and his irises become orange, these changes are eclipsed by the bright light his eyes radiate. His coat, while remaining black, acquires a white tint in the collar, and his sleeves and hands constantly emit a white aura.Interstingly, his facial features are very similar to that of his classic counterpart's helmetless Nelo Angelo appearance.",
//                img:"img/vergil.png",
//                imgface:"img/vergilface.png"
//            },
//
//            {
//                charid:2,
//                name:'Kat',
//                desc:"Kat is an important member of the Order in DmC: Devil May Cry, and serves as Dante's guide for much of the game. She is able to see into Limbo as well as project her astral form into that side-dimension, and is also familiar with several Wiccan spells.",
//                app:"Kat is a girl with a pale complexion and grey-green eyes. She wears a blue hoodie with an orange body, which she keeps up over her head while on missions, hiding her short brown hair. She has three necklaces, the longest having a silver pendant, and wears denim short-shorts, along with thick, knee-high socks and brown boots. She has a stencils tube slung over her back, used in her tagging with spray paint that hangs off of her waist. She has several mystic-designed tattoos on her arms and forehead.",
//                img:"img/kat.png",
//                imgface:"img/katface.png"
//            },
//
//            {
//                charid:3,
//                name:'Sparda',
//                desc:"Sparda is a major supporting character in DmC: Devil May Cry. Although he has been captured long before the events of the game, his decision to father children with an angel is a driving force behind many of the character's motives, from those who once knew him to those he left behind.",
//                app:"Sparda's portrait depicts a man of regality and sophistication. In the photograph he is attired in a red frock coat with a pauldron on the left shoulder, and a strap running across his chest from right to left. His hair is dark gray, with a strip of silver in his bangs showing his age. The portrait is torn over Sparda's face, so no features are known, other than that he is light-skinned. Sparda is also seen with Rebellion, and stands next to a shield bearing the crest tattooed on Dante's back.While living with Eva, however, Sparda wears modern clothes, including a simple white shirt and slacks.In his true form, Sparda retains his human appearance, but has a pair of horns on his head.",
//                img:"img/sparda.png",
//                imgface:"img/spardaface.png"
//            },
//
//            {
//                charid:4,
//                name:'Eva',
//                desc:"Eva is the mother of Dante and Vergil in DmC: Devil May Cry. She is an angel who fell in love with Sparda.",
//                app:"Unlike her classic counterpart, the Eva of DmC: Devil May Cry has wavy red hair instead of straight blonde hair. Rather than wearing a majestic gothic dress, Eva is usually depicted wearing a simple white sundress.",
//                img:"img/eva.png",
//                imgface:"img/evaface.png"
//            },
//
//            {
//                charid:5,
//                name:'Phienas',
//                desc:"Phineas is a supporting character in DmC: Devil May Cry. Despite being a demon, he was imprisoned for not supporting Mundus, and longs to see the demon king overthrown.",
//                app:"Phineas is an elderly, balding demon with indigo skin and gaunt features. He has pointed ears, a small mustache and beard, and wears exquisite robes. The right half of his forehead is comprised of a mechanical device with a lens in it, which allows him to not only see, but to see the 'truth' and thus make his way through the madness that is Limbo.Phineas is quite wise and averse to violence, although he supports Dante's own urge to avenge his family and gives him advice on how to hurt the demon lord. Despite being a demon, he laments the genocide of the Nephilim, and encourages Dante to mature in his powers.",
//                img:"img/phienas.png",
//                imgface:"img/phienasface.png"
//            },
//
//            {
//                charid:6,
//                name:'Mundus',
//                desc:"Mundus is the primary antagonist of DmC: Devil May Cry. He is a Demon King of immense power who is the ruler of all demons and most humans. He watches the city through the CCTV system connected to a wall of video monitors in his large office.",
//                app:"In his human form, Mundus is a tall, bald man with a scarification tattoo of a third eye on his forehead, and he wears a dapper suit with gold pins on the shoulders. His grey eyes glow in the dark, his right one lacks a pupil, and he has a scar on his lower lip and chin. Mundus often speaks menacingly to a video image of Dante as he watches his exploits throughout the city.",
//                img:"img/mundus.png",
//                imgface:"img/mundusface.png"
//            },
//
//            {
//                charid:7,
//                name:'Lilith',
//                desc:"Lilith is a character in DmC: Devil May Cry. She is a powerful demon who serves as Mundus mistress, and also runs 'Devils Dalliance', a popular nightclub that Dante frequents. As she is carrying Mundus Spawn, Dante and Vergil target her as a hostage to exchange to Mundus when he kidnaps Kat.",
//                app:"Lilith disguises herself as a woman with long blond hair and high cheekbones with large lips, but her hair is actually a wig and her skin is a loose pelt sewn together on her neck and back, which she often has to tighten. She uses heavy make up and wears a tight, lavender cocktail dress with a short skirt, and long, black opera-length gloves. She is also pregnant with Mundus' child, often patting her stomach speaking about what they should do. The demon spawn gestating in her womb makes violent responses, thrusting itself beyond her abdomen and growling. When she fights Dante, her baby emerges out of the threads on her back and sucks her into its belly.As a demon lord, Lilith is able to manipulate Limbo and pull victims into it. In combat, however, she is rather weak, and is defenseless when her baby is not fighting and she is pulled out of its belly.",
//                img:"img/lilith.png",
//                imgface:"img/lilithface.png"
//            },
//
//            {
//                charid:8,
//                name:'Hunter',
//                desc:"The Hunter is the first boss that Dante faces in DmC: Devil May Cry. He is one of many demons employed by Mundus as bounty hunters.",
//                app:"The Hunter resembles an excessively large primate with gangly proportions, dark gray skin, and black fur. A deep scar runs down the center of his face, and his nose is completely gone, with only a large, open nasal cavity remaining. He wears a metal harness over his torso, and has a strap on his right leg to hold his grappling gun.",
//                img:"img/hunter.png",
//                imgface:"img/hunterface.png"
//            },
//
//            {
//                charid:9,
//                name:'Succubus',
//                desc:"Succubus is one of the bosses that Dante fights in DmC: Devil May Cry. She is a 1200-year-old demon in service to Mundus who lies within a temple beneath the Virility soda factory. She produces the 'secret ingredient' of the drink, which causes it to make humans weaker and more docile.",
//                app:"Succubus is a giant, female succubus that resides underneath the Virility factor, producing the 'secret ingredient' which is really her own secretions. When entering the warehouse in limbo, the crates have various texts on them, such as 'SUTPIDITY', 'OBESITY', 'CONSUME', and 'POISON'.  After fighting waves of enemies, Kat's Egg Timer will allow Dante to reach the door to reach the mixing room before entering Succubus temple. Upon meeting her, Dante calls her the 'secret ingredient' to Virility. She and Dante continue a small dialogue wherein she recalls him as the 'son of Sparda and Eva the whore' and says that she is 1200 years old before the two start cussing back and forth at each other. Succubus then vomits at Dante and the battle begins shortly afterward.",
//                img:"img/poison.png",
//                imgface:"img/poisonface.png"
//            }
//        ];
//
//        $scope.changeChar = function(charno){
//           $scope.char = charno;
//        }
//    }
//]);

//DMC.controller('itemsController', [
//    '$scope',
//    function($scope){
//        $scope.items = [
//            {
//                name:'Small Vital Star',
//                desc:"Restores five units of Dante's Health. (Max 10)",
//                cost:"200",
//                img:"img/smallvitalstar.png"
//            },
//
//            {
//                name:'Large Vital Star',
//                desc:"Restores all of Dante's Health. (Max 10)",
//                cost:"400,600",
//                img:"img/largevitalstar.png"
//            },
//
//            {
//                name:'Small Devil Trigger Star',
//                desc:"Restores some of Dante's Devil Trigger. (Max 10)",
//                cost:"200",
//                img:"img/smalldevilstar.png"
//            },
//
//            {
//                name:'Large Devil Trigger Star',
//                desc:"Restores all of Dante's Devil Trigger. (Max 10)",
//                cost:"400",
//                img:"img/largedevilstar.png"
//            },
//
//            {
//                name:'Secret Door Key',
//                desc:"Can be used to open secret doors.",
//                cost:"N/A",
//                img:"img/keys.png"
//            },
//
//            {
//                name:'Health Cross Fragment',
//                desc:"Collect four to create a Health Cross.",
//                cost:"N/A",
//                img:"img/healthcrossfragment.png"
//            },
//
//            {
//                name:'Health Cross',
//                desc:"Collect four to create a Health Cross.",
//                cost:"1,000 , 2,000 , 3,500 , 5,000 , 7,500 , 10,000",
//                img:"img/healthcross.png"
//            },
//
//            {
//                name:'Devil Trigger Cross',
//                desc:"Increases Dante's maximum Devil Trigger by 20%. (Max 3)",
//                cost:"1,000 , 5,000 , 10,000",
//                img:"img/devilcrossfragment.png"
//            }
//        ];
//
//        $scope.orbs = [
//            {
//                name:'Red Orbs',
//                desc:"Red Orbs are obtained from slain enemies and destructible pieces of the environment. These orbs are used to purchase Consumables from the Item Shop.",
//                img:"img/redorb.png"
//            },
//
//            {
//                name:'White Orbs',
//                desc:"White Orbs are obtained from slain enemies and end mission bonuses. These orbs fill the upgrade bar, which is then used at the Upgrade Shop to purchase new Abilities and combos.",
//                img:"img/whiteorb.png"
//            },
//
//            {
//                name:'Green Orbs',
//                desc:"Green Orbs are obtained from slain enemies and green pods on walls. They will fill up a portion of your health bar automatically, but they're not as common as the other orbs, wth the exception of the Gold Orb being the rarest.",
//                img:"img/greenorb.png"
//            },
//
//            {
//                name:'Gold Orbs',
//                desc:"Gold Orbs can be purchased from the Item Shop for 400 Red Orbs, or found during a mission. These orbs can be used upon death to resurrect Dante.Unlike the other two orbs, only three Gold Orbs can be held at one time.",
//                img:"img/goldorb.png"
//            }
//        ];
//    }
//]);

//DMC.controller('abilitiesController', [
//    '$scope',
//    function($scope){
//        $scope.anotherGoodOne = 'https://www.youtube.com/watch?v=18-xvIjH8T4';
//        $scope.ability = 0;
//        $scope.changeAbility = function(abilityno){
//            $scope.ability = abilityno;
//        }
//        $scope.abilities = [
//            {
//                id:0,
//                name:'Jump',
//                desc:"Jump is one of three basic Abilities Dante will know from the start of the game. Just as the name implies, this ability allows Dante to Jump.",
//                video:"https://www.youtube.com/watch?v=lVx4V3QXZvE"
//            },
//            {
//                id:1,
//                name:'Double Jump',
//                desc:"Double Jump is an upgrade to the original Jump Ability. Like Jump, Double Jump is available from the start of the game.This ability summons a demonic platform allowing Dante to jump a second time in the air. All you need to do is click Jump two times.",
//                video:"https://www.youtube.com/watch?v=aSST_OQNnvE"
//            },
//            {
//                id:2,
//                name:'Enemy Step',
//                desc:"Enemy Step is an upgrade to the original Jump Ability. This ability becomes available during Mission 1.The Enemy Step ability allows Dante to jump off enemy while in the air. Doing so resets aerial abilities such as Double Jump and Aerial Evade. All you need to do is click Jump when above an enemy.",
//                video:"https://www.youtube.com/watch?v=DnfPRiNkAN4"
//            },
//            {
//                id:3,
//                name:'Evade',
//                desc:"Evade is one of three basic Abilities Dante will know from the start of the game. Just as the name implies, this is a simple dodge or evade maneuver. It can be done on the ground or in mid-air. Performing a perfect evade will add to the Style Points.",
//                video:"https://www.youtube.com/watch?v=nyGSw5vKNDc"
//            },
//            {
//                id:4,
//                name:'Demon Evade',
//                desc:"Fueled by adrenaline, Dante's damage output is boosted after the precisely timed, last minute demon evade. This ability is available during Mission 2.The second level of Demon Evade is an increased damage bonus.",
//                video:"https://www.youtube.com/watch?v=4hXPLrTAO_E"
//            },
//            {
//                id:5,
//                name:'Angel Evade',
//                desc:"Dante phases through Limbo,, granting additional evade distance and invulnerable time. This ability is available during Mission 2.This second level of Angel Evade is an increased phase distance.",
//                video:"https://www.youtube.com/watch?v=SYY6edNsIyU"
//            },
//            {
//                id:6,
//                name:'Angel Boost',
//                desc:"Angel Boost is an Ability that allows Dante to propel himself forward while in mid-air. This ability is reminiscent of the Trickster Style in Devil May Cry 3: Dante's Awakening. Dante will need to utilize this technique while traversing the ever changing City. It's very useful when combined with the Ophion Angel Lift ability.",
//                video:"https://www.youtube.com/watch?v=8U-Eu6jCbXw"
//            },
//            {
//                id:7,
//                name:'Ophion Angel Lift',
//                desc:"Ophion Angel Lift is an ability where Dante throws the Ophion Whip to grapple enemies or objects, and lift him towards them. Look for blue circles in the environment that can be grappled with this ability. This ability will become available during Mission 2.",
//                video:"https://www.youtube.com/watch?v=E9pA6pGkusM"
//            },
//            {
//                id:8,
//                name:'Payoff',
//                desc:"Ophion Angel Lift can be upgraded to a new ability called Payoff. Payoff allows Dante to follow up a successful angel lift with a timed uppercut that launches enemies into the air. Timing is important to execute the move successfully. Click the same button just before impact.Payoff, Level 2 is increased damage.",
//                video:"https://www.youtube.com/watch?v=RnqxsTZKGrI"
//            },
//            {
//                id:9,
//                name:'Ophion Demon Pull',
//                desc:"Ophion Demon Pull is an Ability that allows Dante to throw out the Ophion Whip to grapple enemies or objects and pull them towards him. Look for red circles in the environment that can be grappled with this ability. This ability will become available during Mission 2.",
//                video:"https://www.youtube.com/watch?v=Azaujn5FZMc"
//            },
//            {
//                id:10,
//                name:'Kicker',
//                desc:"Ophion Demon Pull can be upgraded to a new ability called Kicker. Kicker allows Dante to follow up a successful demon pull with a timed kick. Timing is important to execute the move successfully. Click the same button just before impact.Kicker, Level 2 is increased damage.",
//                video:"https://www.youtube.com/watch?v=eCcm9girytM"
//            },
//            {
//                id:11,
//                name:'Leap',
//                desc:"Leap is an ability made available after learning Ophion Demon Pull and Ophion Angel Lift. Instead of being an upgrade of those abilities, it's sort of its own ability.This ability allows Dante to leap off his Angel Lift or Demon Pull target when he arrives. Press the jump button just before impact to perform the leap.",
//                video:"https://www.youtube.com/watch?v=b12e5otgFA0"
//            },
//            {
//                id:12,
//                name:'Devil Trigger',
//                desc:"Devil Trigger is a manifestation of Dante's true power. Unleashed, it sends the world into chaos, throwing surrounding enemies helplessly into the air. Dante's health will regenerate, and his damage and armor will increase. Bonus Style Points will also be awarded for aerial combat. This Ability becomes available during Mission 9.Devil Trigger can only be used once the Devil Trigger gauge is above the minimum threshold. Once active, the gauge will slowly drain. Fill the gauge with Devil Trigger Stars, or increases the maximum gauge by 20% by using Devil Trigger Crosses.",
//                video:"https://www.youtube.com/watch?v=8ycCUW9zyMU"
//            },
//            {
//                id:13,
//                name:'Orb Harvester',
//                desc:"Orb Harvester is an Amazon Pre-Order Bonus Ability. This allows Dante to obtain more Red Orbs in combat, as well as having a larger radius of collecting.",
//                video:"https://www.youtube.com/watch?v=csPWlZ1sfO0"
//            },
//            {
//                id:14,
//                name:'Item Finder',
//                desc:"Item Finder is a Best Buy Pre-Order Bonus Ability. This allows Dante to find the three types of Collectibles throughout the environment.",
//                video:"https://www.youtube.com/watch?v=dyCjrn8VvlI"
//            }
//
//        ];
//    }
//]);

//DMC.controller('weaponsController', [
//    '$scope',
//    function($scope){
//        $scope.weapons = [
//            {
//                weaponid:0,
//                name:'Rebellion',
//                desc:"Rebellion is Dante's trademark sword, and the default weapon at the beginning of DmC: Devil May Cry. Rebellion was given as a memento to Dante by his father Sparda, even in the reboot as mentioned by Vergil.Dante's sword strikes a perfect balance between power and speed, making it incredibly versatile.Although Rebellion is technically a Demon Sword, it will not count towards overall demon weapon kills.",
//                weapontype:0,
//                weaponpic:'img/rebellion.png'
//            },
//            {
//                weaponid:1,
//                name:'Arbiter',
//                desc:"Arbiter is the first Demonic weapons at the disposal of Dante.This weapon is a slow, powerful axe capable of dealing large amounts of damage at the cost of attack speed. Arbiter is especially effective against shields.",
//                weapontype:0,
//                weaponpic:'img/arbiter.png'
//            },
//            {
//                weaponid:2,
//                name:'Eryx',
//                desc:"Eryx is a powerful set of gauntlets that are capable of dealing massive damage to a single target. Each attack can be charged for greater effect.Slower than Rebellion, but faster than Arbiter, it is the best CQC weapon for Dante when encountering powerful foes, or environmental obstacles. These guys will smash any red crystals you see in Limbo.To cycle through available demonic weapons, press Right on the D-pad.",
//                weapontype:0,
//                weaponpic:'img/eryx.png'
//            },
//            {
//                weaponid:3,
//                name:'Osiris',
//                desc:"Osiris is the first Angelic weapons available for Dante.It is a scythe that is very light with a blue aura representing its Angelic nature. Compared to Rebellion, it is much faster, but also deals less damage. It's particularly useful against larger crowds. It becomes more powerful when fed with demon energy.",
//                weapontype:1,
//                weaponpic:'img/osiris.png'
//            },
//            {
//                weaponid:4,
//                name:'Aquila',
//                desc:"Aquila is a lightning fast, dual wielded Angelic weapon. Their long range, and sweeping attacks, make them devastating against large groups of weak enemies. Aquila can quickly take down the barriers of Witches. These are also needed to help collect all Collectibles.Aquila is the name of a Christian Mercenary, along with his wife Pricilla, written in the New Testament. The two are strong figures in the Christian faith. Aquila is also the name of a constellation, and means Eagle in Latin. The constellation itself depicts and eagle carrying Zeus' lightning bolts.",
//                weapontype:1,
//                weaponpic:'img/aquila.png'
//            },
//            {
//                weaponid:5,
//                name:'Ebony and Ivory',
//                desc:"Ebony and Ivory are Dante's trusty high caliber pistols. They are capable of maintaining high rates of fire against a single target. Unlike Rebellion, Ebony & Ivory automatically lock on to a target when fired.",
//                weapontype:2,
//                weaponpic:'img/ebonyandivory.png'
//            },
//            {
//                weaponid:6,
//                name:'Revenant',
//                desc:"Revenant is a powerful shotgun, useful for clearing crowds of enemies, and dealing high damage at close range.",
//                weapontype:2,
//                weaponpic:'img/revenant.png'
//            },
//            {
//                weaponid:7,
//                name:'Kablooey',
//                desc:"The Kablooey is firearm that fires explosive needles. These needles stick into enemies, and must be manually detonated. Multiple shots can be fired before detonating. The more shots, the more damage.",
//                weapontype:2,
//                weaponpic:'img/kablooey.png'
//            }
//        ];
//        $scope.weaponshow = false;
//        $scope.weapon = 0;
//        $scope.changeWeapon = function(weaponno){
//            $scope.weapon = weaponno;
//            $scope.weaponshow = true;
//        }
//
//        $scope.upgrades = [
//            {
//                upgradeid:0,
//                weaponid:0,
//                name:'Hacker',
//                desc:"A quick succession of four slashes. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=JS4JWXjtDyU'
//            },
//            {
//                upgradeid:1,
//                weaponid:0,
//                name:'Death Coil',
//                desc:"Damages enemies surrounding Dante, and clubs a final target with massive force. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=Czyj3kH_iRs'
//            },
//            {
//                upgradeid:2,
//                weaponid:0,
//                name:'Hightime',
//                desc:"A powerful upward strike that launches enemies skyward. Holding the button will allow Dante to follow the enemy into the air. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=HKW32XZ88k0'
//            },
//            {
//                upgradeid:3,
//                weaponid:0,
//                name:'Aerial Rave',
//                desc:"A multistrike combo that juggles airborne enemies. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=lvpgXKOaAoo'
//            },
//            {
//                upgradeid:4,
//                weaponid:0,
//                name:'Helmbreaker',
//                desc:"A devestating overhead strike that slams an enemy into the ground. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=KV772WzExYg'
//            },
//            {
//                upgradeid:5,
//                weaponid:0,
//                name:'Roulette',
//                desc:"A deadly spin that lifts Dante, and his target, higher into the air. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=PjEDpzNsm1Y'
//            },
//            {
//                upgradeid:6,
//                weaponid:0,
//                name:'Drive',
//                desc:"Release a powerful shockwave of devil energy toward distant foes. Charge the attack for more power. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=JCD_HGBobAY'
//            },
//            {
//                upgradeid:7,
//                weaponid:0,
//                name:'Overdrive',
//                desc:"Adds 2 additional shockwaves to the Drive attack. After Drive only.",
//                upgradevideo:'https://www.youtube.com/watch?v=63RFUSVOv5c'
//            },
//            {
//                upgradeid:8,
//                weaponid:0,
//                name:'Stinger',
//                desc:"Cover great distance with a high speed, lunging stab. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=1DzvkjrOBZI'
//            },
//            {
//                upgradeid:9,
//                weaponid:0,
//                name:'Trillion Stabs',
//                desc:"A blinding flurry of lightning fast stabs. After Stinger only.",
//                upgradevideo:'https://www.youtube.com/watch?v=-SazbCiPO8o'
//            },
//            {
//                upgradeid:10,
//                weaponid:1,
//                name:'Judgement',
//                desc:"A slow, powerful, 3 hit combo. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=Jhz7cXV2zLg'
//            },
//            {
//                upgradeid:11,
//                weaponid:1,
//                name:'Trinity Smash',
//                desc:"Dante focuses his demon energy and unleashes a formidable, triple damage, strike. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=FwLJwTTXgBU'
//            },
//            {
//                upgradeid:12,
//                weaponid:1,
//                name:'Tremor',
//                desc:"Smashes the axe into the floor with power enough to crack the earth. Enemies standing on the fault line are launched into the air. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=Kv4ZWLwA65o'
//            },
//            {
//                upgradeid:13,
//                weaponid:1,
//                name:'Aerial Flush',
//                desc:"Hurl the axe at targets below Dante. The weight of the axe makes it impossible to aim this attack upwards. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=62_YPGxYzsc'
//            },
//            {
//                upgradeid:14,
//                weaponid:1,
//                name:'Drop',
//                desc:"Drop from the sky with a thunderous strike that cracks the earth. Enemies standing on the fault line are launched into the air. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=rMRuhIfLb8E'
//            },
//            {
//                upgradeid:15,
//                weaponid:1,
//                name:'Flush',
//                desc:"Hurl the axe head at distant targets. The weight of the axe makes it impossible to aim this attack upwards.",
//                upgradevideo:'https://www.youtube.com/watch?v=J_b8LwOXitM'
//            },
//            {
//                upgradeid:16,
//                weaponid:2,
//                name:'Brawler',
//                desc:"Unleash 3 brawling punches at a single target. Hold the button to increase the damage of each punch. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=REusfykyIjs'
//            },
//            {
//                upgradeid:17,
//                weaponid:2,
//                name:'Slam',
//                desc:"Slam a fist into the ground, shaking the earth and staggering surrounding enemies. Hold the button to charge the attack for increased damage. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=ERoInm1kL2E'
//            },
//            {
//                upgradeid:18,
//                weaponid:2,
//                name:'Uppercut',
//                desc:"An uppercut infused with demonic power. Hold button to increase damage and cause Dante to follow the enemy into the air. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=JAMee3a-ZsU'
//            },
//            {
//                upgradeid:19,
//                weaponid:2,
//                name:'Showdown',
//                desc:"A powerful blow that pounds an enemy into the ground, while leaving Dante airborne. Hold the attack button to charge the attack for increased damage. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=6TC56LMO92U'
//            },
//            {
//                upgradeid:20,
//                weaponid:2,
//                name:'Stomp',
//                desc:"Plummet down with earth shattering speed and power. Surrounding enemies are pushed back. Hold the attack button to charge the attack for greater effect. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=89ErO3FcGKg'
//            },
//            {
//                upgradeid:21,
//                weaponid:2,
//                name:'Snake Eye',
//                desc:"Step back to evade an enemy attack, then counter with a right hook. Hold the attack button to increase the damage of the punch. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=NfKPDB1b8VE'
//            },
//            {
//                upgradeid:22,
//                weaponid:3,
//                name:'Karma',
//                desc:"A whirlwind of blades that slashes at enemies surrounding Dante. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=xMehtfXraqI'
//            },
//            {
//                upgradeid:23,
//                weaponid:3,
//                name:'Cleaver',
//                desc:"Dante weaves the scythe around his body, cutting at enemies in front, and all around, him. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=_tLcdaucAHE'
//            },
//            {
//                upgradeid:24,
//                weaponid:3,
//                name:'Prop',
//                desc:"Spin the scythe like a propeller, juggling enemies on its blade. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=_3o-FkaNSfI'
//            },
//            {
//                upgradeid:25,
//                weaponid:3,
//                name:'Shredder',
//                desc:"Continue slicing and dicing enemies with this extension to Prop. After Prop only. Hold button to extend the length of the move",
//                upgradevideo:'https://www.youtube.com/watch?v=7pAWHsga1sE'
//            },
//            {
//                upgradeid:26,
//                weaponid:3,
//                name:'Hanger',
//                desc:"An aerial combo of wide, sweeping attacks. Capable of juggling multiple airborne enemies. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=E1Sbw-G63ec'
//            },
//            {
//                upgradeid:27,
//                weaponid:3,
//                name:'Double Up',
//                desc:"Spins the scythe above Dante's head like rotor blades; lifting him, and surrounding enemies, higher into the air. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=4jsJzSC0_RY'
//            },
//            {
//                upgradeid:28,
//                weaponid:3,
//                name:'Rake',
//                desc:"Hook enemies below Dante and yank them into the air. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=3-ZJehLOrZg'
//            },
//            {
//                upgradeid:29,
//                weaponid:3,
//                name:'Raze',
//                desc:"Raise Dante and surrounding enemies in a sweeping, sky bound, hurricane. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=S4NoSM_dkeQ'
//            },
//            {
//                upgradeid:30,
//                weaponid:3,
//                name:'Streak',
//                desc:"A forward lunging attack that ends with a sweeping spin. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=z2XPX8vE4Vg'
//            },
//            {
//                upgradeid:31,
//                weaponid:4,
//                name:'Killer',
//                desc:"A storm of thrown blades that slices, and herds, enemies surrounding Dante. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=gz-wXJe5dwY'
//            },
//            {
//                upgradeid:32,
//                weaponid:4,
//                name:'Buy In',
//                desc:"Yank surrounding enemies towards Dante, positioning them for follow up attacks. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=vcoddawS2yI'
//            },
//            {
//                upgradeid:33,
//                weaponid:4,
//                name:'Round Trip',
//                desc:"Send forth a spinning blade that traps enemies caught within it. increased lifetime. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=ALwVJ3nl7Ss'
//            },
//            {
//                upgradeid:34,
//                weaponid:4,
//                name:'Skirmish',
//                desc:"Effortlessly juggle groups of airborne enemies. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=JtlYnA946mw'
//            },
//            {
//                upgradeid:35,
//                weaponid:4,
//                name:'Aerial Buy In',
//                desc:"Snatch surrounding enemies, and yank them into the air, towards Dante. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=On48Vpjzbog'
//            },
//            {
//                upgradeid:36,
//                weaponid:4,
//                name:'Caliber',
//                desc:"A swift aerial dash towards a focused target. Air Attack.",
//                upgradevideo:'https://www.youtube.com/watch?v=DdylphDuo7U'
//            },
//            {
//                upgradeid:37,
//                weaponid:4,
//                name:'Tornado',
//                desc:"Slice through enemies as Dante whips forward in a spinning tornado. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=Z3HVZ0QsQY0'
//            },
//            {
//                upgradeid:38,
//                weaponid:4,
//                name:'Big Slick',
//                desc:"Focus an aerial target, and leap up towards him. Grounded targets in front of Dante are also dragged up. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=T9u-KPS5V-g'
//            },
//            {
//                upgradeid:39,
//                weaponid:5,
//                name:'Shoot',
//                desc:"Dante fires his dual wielded pistols with lightning speed, at a single target.",
//                upgradevideo:'https://www.youtube.com/watch?v=SVIOXiv62yk'
//            },
//            {
//                upgradeid:40,
//                weaponid:5,
//                name:'Ricoshot',
//                desc:"Infuses a bullet with demonic power. Shots bounce back and fourth between targets. Longer charges increase the number of potential bounces.",
//                upgradevideo:'https://www.youtube.com/watch?v=ay7apl0wUHs'
//            },
//            {
//                upgradeid:41,
//                weaponid:5,
//                name:'Rainstorm',
//                desc:"Dante spirals out of the sky, showering an area beneath him with bullets as he descends. (Air Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=VC2z-56brCY'
//            },
//            {
//                upgradeid:42,
//                weaponid:5,
//                name:'Inverse Rainstorm',
//                desc:"A barrage of bullets spray targets above Dante as he spirals into the air. (Ground Attack)",
//                upgradevideo:'https://www.youtube.com/watch?v=t_ujr5OQ5Zc'
//            },
//            {
//                upgradeid:43,
//                weaponid:6,
//                name:'Shoot',
//                desc:"A powerful buckshot with a wide spread. Delivers high damage at close range.",
//                upgradevideo:'https://www.youtube.com/watch?v=9TOM7T6Zr7c'
//            },
//            {
//                upgradeid:44,
//                weaponid:6,
//                name:'Charge Shot',
//                desc:"Powers up a shot into a demonic bomb. When released, the bomb sticks to enemies and explodes shortly after",
//                upgradevideo:'https://www.youtube.com/watch?v=lz_n0hJP9D8'
//            },
//            {
//                upgradeid:45,
//                weaponid:6,
//                name:'Fireworks',
//                desc:"Flip the shotgun around with style and flare, shooting 3 times at enemies surrounding Dante.",
//                upgradevideo:'https://www.youtube.com/watch?v=g5CTFMgQ4f4'
//            },
//            {
//                upgradeid:46,
//                weaponid:7,
//                name:'Shoot',
//                desc:"Fires demonic darts that embed themselves into enemies. The darts have no effect until detonated.",
//                upgradevideo:'https://www.youtube.com/watch?v=knlHLqK9Kfk'
//            },
//            {
//                upgradeid:47,
//                weaponid:7,
//                name:'Detonate',
//                desc:"Detonates all darts currently embedded in enemies.",
//                upgradevideo:'https://www.youtube.com/watch?v=UHo4sEVjZTY'
//            }
//        ];
//
//        $scope.upgrade = 0;
//        $scope.changeUpgrade = function(upgradeno){
//            $scope.upgrade = upgradeno;
//        }
//    }
//]);

//DMC.controller('walkthroughController', [
//    '$scope',
//    function($scope){
//        $scope.test = "https://www.youtube.com/watch?v=dyCjrn8VvlI";
//
//        $scope.missions = [
//            {
//                missionno:0,
//                name:'Found',
//                sypno:"Found is the first mission in DmC: Devil May Cry. The mission opens with Dante waking up with a hangover and a girl named Kat arriving at his trailer to warn him of demons pursuing him. The mission contains one Key, one Secret Door, and six Lost Souls.The mission opens with an introduction of the main villian Mundus (under the false name Kyle Ryder), displaying his taste for world control. He mentions a 'loose end', the son of Sparda, Dante, who could ruin his plan. Dante is then shown, passed out in bed with a newcast displaying images of The Order. A knock on Dante's trailer introduces Kat, who claims that Dante is being pursued by demons, one of which being the powerful Hunter Demon.Dante is pulled into Limbo and must fight through waves of Lesser Stygians and groups of Bathos and must fight through the city streets. The mission spans through the pier, carnival grounds, and a haunted house before culminating with a boss battle against the Hunter Demon.",
//                video:'https://www.youtube.com/watch?v=dGAGQOvYI8Q'
//            },
//            {
//                missionno:1,
//                name:'Home Truths',
//                sypno:"Home Truths is the second mission of DmC: Devil May Cry. Dante and Kat travel to meet the head of The Order, Vergil, who tells Dante that he isn't human and attempts to recruit him to his cause. Dante explores the Paradise Mansion while in Limbo revealing moments of his past. The mission contains two Keys, Two Secret Doors, and nine Lost Souls.Kat and Dante travel to meet Vergil, the head of The Order. Vergil asks Dante about his past and reveals some information about his own. Vergil claims that Dante isn't human, and that the two of them should team up to help defeat the demons. Dante is reluctant to commit to the cause, but Vergil intrigues him by offering to answer some questions of just who he is.Dante, Vergil, and Kat travel to Paradise, an abandoned mansion that was once Dante's home. Kat opens a portal to Limbo for Dante to enter. Dante then travels through the mansion, triggering flashbacks to his past. Dante will receive both the Arbiter and the Osiris weapons. ",
//                video:'https://www.youtube.com/watch?v=FKSfZy1fx68'
//            },
//            {
//                missionno:2,
//                name:'Bloodline',
//                sypno:"Bloodline is the third mission in DmC: Devil May Cry. The mission begins with Vergil speaking to Dante about their common enemy and their potential to defeat him. The mission contains One Key, One Secret Door, and Three Lost Souls.Vergil speaks to Dante about their enemy, Mundus. Vergil shares the story of Sparda's betrayal and how the two brothers have the power to destroy the demon king. The two are spotted by a demon, however, and Dante is promptly pulled into Limbo.Dante fights various demons, including Devil Spiders, Shielded Bathos, Death Knights, and more. Dante follows Kat through the streets. Dante obtains the Angel Boost ability in this level.",
//                video:'https://www.youtube.com/watch?v=0QrUOGFbGoc'
//            },
//            {
//                missionno:3,
//                name:'Under Watch',
//                sypno:"Under Watch is the fourth mission of DmC: Devil May Cry. Kat is leading Dante to the Virility factory, but gets pulled into Limbo at the beginning of the mission and must escape. The mission contains two Keys, two Secret Doors, and eight Lost Souls.Dante gets pulled into Limbo, and must explore the streets while defeating demons.Dante will get spotted by various cameras which trigger waves of demons to appear.",
//                video:'https://www.youtube.com/watch?v=LADp65gtXUo'
//            },
//            {
//                missionno:4,
//                name:'Virility',
//                sypno:"Virility is the fifth mission of DmC: Devil May Cry. Kat and Dante reached the Virility facility, where she sets down a rift and opens a gate to Limbo for Dante. Dante and Kat infiltrate the Virility plant and work their way toward stopping people from drinking Slurm. The mission contains two Keys, two Secret Doors, and six Lost Souls.",
//                video:'https://www.youtube.com/watch?v=lc4je_c7n_k'
//            },
//            {
//                missionno:5,
//                name:'Secret Ingredient',
//                sypno:"Secret Ingredient is the sixth mission in DmC: Devil May Cry. The mission contains one Key, one Secret Door, and two Lost Souls.Not only can you get the A man with guts and honor Achievement / Trophy here, but you can also help Dante cut up the Succubus Boss.",
//                video:'https://www.youtube.com/watch?v=IhtrPzHNcUo'
//            },
//            {
//                missionno:6,
//                name:'Overturn',
//                sypno:"Overturn is the seventh mission in DmC: Devil May Cry. The mission contains three Keys, two Secret Doors, and eight Lost Souls.Dante and Kat meet up with Vergil and begin their assault on the tower.",
//                video:'https://www.youtube.com/watch?v=HBdmvGPrjSk'
//            },
//            {
//                missionno:7,
//                name:'Eyeless',
//                sypno:"Eyeless is the eighth mission in DmC: Devil May Cry. The mission contains one Key, two Secret Doors, and five Lost Souls.You get a little help by acquiring an eye for a friend and you continue making your way to the final boss.",
//                video:'https://www.youtube.com/watch?v=_y37axawcy4'
//            },
//            {
//                missionno:8,
//                name:'Devil Inside',
//                sypno:"Devil Inside is the ninth mission of DmC: Devil May Cry. The mission contains one Key, one Secret Door, and two Lost Souls.Dante is still making his way to the boss and he's really really close now! Watch him get to the tower.",
//                video:'https://www.youtube.com/watch?v=iLzkNEqKYas'
//            },
//            {
//                missionno:9,
//                name:'Bad News',
//                sypno:"Bad News is the tenth mission of DmC: Devil May Cry. The level contains no collectables.Dante finally gets to the boss. Watch the Bob Barbas boss fight, one of the coolest boss fights in the game.",
//                video:'https://www.youtube.com/watch?v=qRF9XQUqKnI'
//            },
//            {
//                missionno:10,
//                name:'The Order',
//                sypno:"The Order is the eleventh mission in DmC: Devil May Cry. The mission contains one Key, one Secret Door, and seven Lost Souls.Yet again Dante is the star and this time he's killed Bob Barbas. However Kat is in trouble and he needs to get to her to make sure she is okay.",
//                video:'https://www.youtube.com/watch?v=stBCwghySJI'
//            },
//            {
//                missionno:11,
//                name:'Under Siege',
//                sypno:"Under Siege is the twelfth level of DmC: Devil May Cry. The level contains no collectables.Kat is in big trouble and from limbo Dante must help her escape. He also needs to help Vergil save some data.",
//                video:'https://www.youtube.com/watch?v=clM2wL5CrHo'
//            },
//            {
//                missionno:12,
//                name:'Devils Dalliance',
//                sypno:"Devil's Dalliance is the thirteenth mission in DmC: Devil May Cry. The mission contains one Key, two Secret Doors, and seven Lost Souls.Kat is held prisoner and Dante needs to decide if he's going to fulfill Mundus' demands or come up with another plan.",
//                video:'https://www.youtube.com/watch?v=nxkwpezdCjU'
//            },
//            {
//                missionno:13,
//                name:'Last Dance',
//                sypno:"Last Dance is the fourteenth mission in DmC: Devil May Cry. The mission contains zero collectables.Dante takes on the Devil Spawn Boss and pummels him into the ground.This entire mission is a boss battle against Mundus' Spawn. This boss is a big, baby-like creature with several eyes on the outside and the mother, Lilith, on the inside.",
//                video:'https://www.youtube.com/watch?v=UkXcw-nEuaI'
//            },
//            {
//                missionno:14,
//                name:'The Trade',
//                sypno:"The Trade is the fifteenth mission of DmC: Devil May Cry. The mission contains two Keys.Dante and Vergil make a trade to get Kat back. What could go wrong? This is also where you can easily get the Looks like it's your lucky day achievement / trophy, and the Where does the time go achievement / trophy.",
//                video:'https://www.youtube.com/watch?v=FRej8gbpBkI'
//            },
//            {
//                missionno:15,
//                name:'The Plan',
//                sypno:"The Plan is the sixteenth mission of DmC: Devil May Cry. The mission contains one Key, two Secret Doors, and nine Lost Souls.Dante works his way into Mundus' stronghold so he can get to the hellgate. You can also get the Now my coat's all charred Achievement / Trophy.",
//                video:'https://www.youtube.com/watch?v=OvBO_XK24WE'
//            },
//            {
//                missionno:16,
//                name:'Furnace of Souls',
//                sypno:"Furnace of Souls is the seventeenth mission in DmC: Devil May Cry. The mission contains one Key, two Secret Doors, and nine Lost Souls.Dante navigates the Furnace of Souls to get to the hellgate and take down Mundus. You can get the Every hero has a weakness Achievement / Trophy here also.",
//                video:'https://www.youtube.com/watch?v=DRw1KsRtLJI'
//            },
//            {
//                missionno:17,
//                name:'Demons Den',
//                sypno:"Demon's Den is the eighteenth mission of DmC: Devil May Cry. The mission contains one Key, one Secret Door, and three Lost souls.Of course there's some puzzles that need to be solved before facing Mundus. Don't forget to grab you collectibles and enjoy the dialogue between Dante and Vergil.",
//                video:'https://www.youtube.com/watch?v=0bN0b6V3LQo'
//            },
//            {
//                missionno:18,
//                name:'Face of The Demon',
//                sypno:"Face of the Demon is the nineteenth mission in DmC: Devil May Cry. The mission contains no collectables.Dante takes on Mundus in this boss fight.Much of this mission is nothing but using Ophion Angel Lift and Ophion Demon Pull. The first few Angel Lifts will be done along side cut scenes, just after Mundus smashes the building you are standing on. Next, you'll need to jump onto Mundu's hand and use a few Angel Lifts until you come to one Demon Pull.When you have the ability to actually walk, use the Demon Pull any time you see a red ring. Smash the red crystal with Eryx, and smash the red door with Arbiter. Another cut scene will play where you need to use the Angel Lift ability before Mundus' flamethrower reaches you. Then the real battle begins.",
//                video:'https://www.youtube.com/watch?v=fUMzFln5EF4'
//            },
//            {
//                missionno:19,
//                name:'The End',
//                sypno:"The End is the twentieth and final mission of DmC: Devil May Cry. The mission contains no collectables.The REAL ending! Dante takes on Vergil and this is how you beat him.This final battle against Vergil will require style over simple brute force. If anything, it's like fighting a tougher Dreamrunner.",
//                video:'https://www.youtube.com/watch?v=rNAoC4q3fHc'
//            }
//        ];
//
//        $scope.mission = 0;
//        $scope.showprev = false;
//        $scope.shownext = true;
//        $scope.prevmission = function(){
//            $scope.mission = $scope.mission - 1;
//            if($scope.mission <= 0){
//                $scope.showprev = false;
//            }else if($scope.mission > 0 && $scope.mission < 19){
//                $scope.shownext = true;
//                $scope.showprev = true;
//            }
//        }
//        $scope.nextmission = function(){
//            $scope.mission = $scope.mission + 1;
//            if($scope.mission >= 19){
//                $scope.shownext = false;
//            }else if($scope.mission > 0 && $scope.mission < 19){
//                $scope.shownext = true;
//                $scope.showprev = true;
//            }
//        }
//    }
//]);