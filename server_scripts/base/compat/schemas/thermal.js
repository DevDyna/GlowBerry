if (global.startup.mods.thermal) {

    /**
     * 
     * @param {fluid} input_fluid 
     * @param {int} input_amount 
     * @param {item|item_tag} input_item 
     * @param {fluid} result_fluid 
     */
  global.server.recipes.compat.thermal.brewer = (
    input_fluid,
    input_amount,
    input_item,
    result_fluid
  ) => {
    
    ServerEvents.recipes((event) => {
      event.custom({
        type: "thermal:brewer",
        ingredients: [
            FluidAndCount(input_fluid,input_amount),
            ItemOrTag(input_item)
        ],
        result: [
          {
            fluid: result_fluid,
          },
        ],
      });
    });
  };
}
