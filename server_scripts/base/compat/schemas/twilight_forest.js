if (global.startup.mods.twilightforest) {
  ServerEvents.recipes((event) => {
    /**
     *
     * @param {item} input
     * @param {string[]} pattern like shaped recipes ['AAA','AAA','AAA']
     * @param {item} output
     * @param {int} output_count
     * @param {int} cost experience cost
     */
    global.server.recipes.compat.twilightforest.uncrafting = function uncrafting(
      input,
      pattern,
      output,
      output_count,
      cost
    ) {
      event.custom({
        type: "twilightforest:uncrafting",
        cost: cost,
        count: output_count,
        ingredient: {
          item: input,
        },
        key: {
          A: {
            item: output,
          },
        },
        pattern: pattern,
      });
    };
  });
}
