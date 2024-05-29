/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

if (global.startup.mods.mysticalagriculture) {
  /**
   *
   * @param {item|itemtag} input
   * @param {item[]} essences
   * @param {int[]} counts item count of essences based on same index
   * @param {item[]|itemtag[]} items
   * @param {item} output
   */
  global.server.recipes.compat.mysticalagriculture.Awakening = (
    input,
    essences,
    counts,
    items,
    output
  ) => {
    ServerEvents.recipes((event) => {
      let list = [];
      items.forEach((item) => {
        list.push(ItemOrTag(item));
      });

      let xp = [];
      essences.forEach((item, index) => {
        xp.push(ItemAndCount(item, counts[index]));
      });

      event.custom({
        type: "mysticalagriculture:awakening",
        essences: xp,
        input: ItemOrTag(input),
        ingredients: list,
        result: {
          item: output,
        },
      });
    });
  };

  /**
   *
   * @param {item[]} items
   * @param {int[]} counts
   * @param {string} enchant like "minecraft:infinity"
   */
  global.server.recipes.compat.mysticalagriculture.Enchanter = (
    items,
    counts,
    enchant
  ) => {
    ServerEvents.recipes((event) => {
      let list = [];
      items.forEach((item, index) => {
        list.push(ItemAndCount(item, counts[index]));
      });

      event.custom({
        type: "mysticalagriculture:enchanter",
        ingredients: list,
        enchantment: enchant,
      });
    });
  };

  /**
   *
   * @param {item|itemtag} input
   * @param {item} output
   * @param {float} chance
   */
  global.server.recipes.compat.mysticalagriculture.SoulExtraction = (
    input,
    output,
    chance
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "mysticalagriculture:soul_extraction",
        input: ItemOrTag(input),
        output: {
          type: output,
          souls: chance,
        },
      });
    });
  };

  /**
   * @param {item|itemtag} input
   * @param {item[]|itemtag[]} ingredients
   * @param {item} output
   */
  global.server.recipes.compat.mysticalagriculture.Infusion = (
    input,
    ingredients,
    output
  ) => {
    ServerEvents.recipes((event) => {
      let list = [];
      ingredients.forEach((item) => {
        list.push(ItemOrTag(item));
      });

      event.custom({
        type: "mysticalagriculture:infusion",
        input: ItemOrTag(input),
        ingredients: list,
        result: {
          item: output,
        },
      });
    });
  };

  /**
   * @param {item|itemtag} input
   * @param {item} output
   */
  global.server.recipes.compat.mysticalagriculture.Reprocessor = (
    input,
    output
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "mysticalagriculture:reprocessor",
        input: ItemOrTag(input),
        result: {
          item: output,
        },
      });
    });
  };
}
