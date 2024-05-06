if (global.startup.mods.create) {
  global.server.recipes.compat = {
    create : {
      ItemApplicator: ()=>{}
    }
  }

  ServerEvents.recipes((event) => {
    /**
     *
     * @param {block[]} block block to click
     * @param {item[]} item item to click
     * @param {block[]} result block to place
     */
    global.server.recipes.compat.create.ItemApplicator =
      function ItemApplicator(block, item, result) {
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
      };
  });
}
