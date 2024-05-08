if (global.startup.mods.create) {
  /**
   *
   * @param {block|block[]} block block to click
   * @param {item|item[]} item item to click
   * @param {block|block[]} result block to place
   */
  global.server.recipes.compat.create.ItemApplicator = (
    block,
    item,
    result
  ) => {
    ServerEvents.recipes((event) => {
      if (!Array.isArray(block)) block = [block];
      if (!Array.isArray(item)) item = [item];
      if (!Array.isArray(result)) result = [result];

      block.forEach((a) => {
        item.forEach((b) => {
          result.forEach((c) => {
            event.custom({
              type: "create:item_application",
              ingredients: [
                {
                  item: a,
                },
                {
                  item: b,
                },
              ],
              results: [
                {
                  item: c,
                },
              ],
            });
          });
        });
      });
    });
  };
}
