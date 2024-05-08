if (global.startup.mods.reactive) {
  /**
   *
   * @param {item} input
   * @param {item} output
   * @param {reactive.elements} elements [caustic] [soul] [body] [light] [mind] [verdant]
   * @param {int} min
   * @param {int} cost
   */
  global.server.recipes.compat.reactive.transmute = (
    input,
    output,
    elements,
    min,
    cost
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "reactive:transmutation",
        reactant: ItemOrTag(input),
        product: ItemOrTag(output),
        reagents: elements,
        min: min,
        cost: cost,
      });
    });
  };
}
