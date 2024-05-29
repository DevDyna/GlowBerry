/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

if (global.startup.mods.botanypots) {
  /**
   * Define a new Soil block useable on bottom slot of botany pots
   * @param {item|itemtag} item_soil define the item soil
   * @param {string} category (optional) name like tag to link multiple soils on multiple seeds
   * @param {float} growthModifier (optional) just a grow modifier
   * @param {item} custom_display (optional) custom block display to customize your rendering of soil
   */
  global.server.recipes.compat.botanypots.AddSoil = (
    item_soil,
    category,
    growthModifier,
    custom_display
  ) => {
    ServerEvents.recipes((event) => {
      if (typeof category == undefined) category = [];
      if (typeof growthModifier == undefined) growthModifier = 1.0;
      if (typeof custom_display == undefined) custom_display = item_soil;
      event.custom({
        type: "botanypots:soil",
        input: ItemOrTag(item_soil),
        display: {
          block: custom_display,
        },
        categories: category,
        growthModifier: growthModifier,
      });
    });
  };

  /**
   *
   * @param {item|itemtag} handItem item used on interaction
   * @param {item|itemtag} soilInput (optional)
   * @param {item|itemtag} seedInput (optional)
   * @param {item} soilOutput (optional)
   * @param {item} seedOutput (optional)
   * @param {item[]} itemDropList item list resulted after interaction
   * @param {int[]} itemCountList item count list resulted after interaction
   * @param {string} sound (optional) like "minecraft:item.hoe.till"
   * @param {string} soundCategory (optional) like "blocks"
   */
  global.server.recipes.compat.botanypots.AddInteraction = (
    handItem,
    soilInput,
    seedInput,
    soilOutput,
    seedOutput,
    itemDropList,
    itemCountList,
    sound,
    soundCategory
  ) => {
    ServerEvents.recipes((event) => {
      let list = [];
      itemDropList.forEach((item, index) => {
        list.push(ItemAndCount(item, itemCountList[index]));
      });

      let obj = {
        type: "botanypots:pot_interaction",
        held_ingredient: ItemOrTag(handItem),
        sound: {
          sound: sound,
          category: soundCategory,
        },
        drops: list,
      };

      if (typeof soilInput != undefined)
        obj.soil_ingredient = ItemOrTag(soilInput);

      if (typeof seedInput != undefined)
        obj.seed_ingredient = ItemOrTag(seedInput);
      if (typeof soilOutput != undefined)
        obj.soil_output = ItemOrTag(soilOutput);
      if (typeof seedOutput != undefined)
        obj.seed_output = ItemOrTag(seedOutput);

      if (typeof sound == undefined) sound = "minecraft:item.hoe.till";
      if (typeof soundCategory == undefined) soundCategory = "blocks";
      event.custom(obj);
    });
  };
  /**
   *
   * @param {item|itemtag} item item used on click action
   * @param {int} min_growth
   * @param {int} max_growth
   */
  global.server.recipes.compat.botanypots.AddFertilizer = (
    item,
    min_growth,
    max_growth
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "botanypots:fertilizer",
        ingredient: ItemOrTag(item),
        min_growth: min_growth,
        max_growth: max_growth,
      });
    });
  };

  /**
   *
   * @param {item|itemtag} itemSeed
   * @param {string[]} categories
   * @param {int} growthTicks
   * @param {item[]} dropItems item list
   * @param {int[]} dropCounts item count list
   * @param {float[]} dropChances item chance list
   * @param {int[]} dropMinRolls min loot table roll list
   * @param {int[]} dropMaxRolls max loot table roll list
   * @param {json} display [how to use](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/botanyPots.js#L158)
   * @param {int} lightlevel (optional)
   */
  global.server.recipes.compat.botanypots.AddSeed = (
    itemSeed,
    categories,
    growthTicks,
    dropItems,
    dropCounts,
    dropChances,
    dropMinRolls,
    dropMaxRolls,
    display,
    lightlevel
  ) => {
    ServerEvents.recipes((event) => {
      let drop = [];
      dropItems.forEach((item, index) => {
        drop.push({
          chance: dropChances[index],
          output: ItemAndCount(item, dropCounts[index]),
          minRolls: dropMinRolls[index],
          maxRolls: dropMaxRolls[index],
        });
      });

      let obj = {
        type: "botanypots:crop",
        seed: ItemOrTag(itemSeed),
        categories: categories,
        growthTicks: growthTicks,
        display: display,
        drops: drop,
      };

      if (typeof lightlevel != undefined) obj.lightlevel = lightlevel;

      event.custom(obj);
    });
  };
}

/*
# Simple 1
{
    "block": <block-id>
}


# Simple 2
{
    "block": <block-id>,
    "renderFluid": <boolean>
}


# Aging
*
*  Pregenerated transition on phase based on AGE blockstate/property

{
"type": "botanypots:aging",
"block": <block-id>
}


# Transition
*
* Allow to make custom transitions on phases
* For more info -> https://github.com/Darkhax-Minecraft/BotanyPots/wiki/Datapack-Information#botanypotstransitional

{
    "type": "botanypots:transitional",
    "phases": [
      {
        "block": "minecraft:cocoa",
        "properties": {
          "age": "0"
        },
        "rotation": "X_270",
        "offset": [
          0,
          -0.1,
          0
        ]
      },
      {
        "block": "minecraft:cocoa",
        "properties": {
          "age": "1"
        },
        "rotation": "X_270",
        "offset": [
          0,
          -0.1,
          0
        ]
      },
      {
        "block": "minecraft:cocoa",
        "properties": {
          "age": "2"
        },
        "rotation": "X_270",
        "offset": [
          0,
          -0.1,
          0
        ]
      }
    ]
}

*/
