if (global.startup.mods.reactive) {
  ServerEvents.recipes((event) => {
    /**
     *
     * @param {item} input
     * @param {item} output
     * @param {reactive.elements} elements [caustic] [soul] [body] [light] [mind] [verdant]
     * @param {int} min
     * @param {int} cost
     */
    global.server.recipes.compat.reactive.transmute = function transmute(
      input,
      output,
      elements,
      min,
      cost
    ) {
      event.custom({
        type: "reactive:transmutation",
        reactant: ItemOrTag(input),
        product: ItemOrTag(output),
        reagents: elements,
        min: min,
        cost: cost,
      });
    };
  });
}
