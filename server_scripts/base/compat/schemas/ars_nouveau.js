if (global.startup.mods.ars_nouveau) {
  ServerEvents.recipes((event) => {
    global.server.recipes.compat.ars_nouveau.enchanting_apparatus =
      function enchanting_apparatus(core, input, output, source, nbt) {
        let ingredients = [];
        for (let i = 0; i < input.length; i++) {
          ingredients.push(ItemOrTag(input[i]));
        }
        let item_core = [];
        item_core.push(ItemOrTag(core));
        event.custom({
          type: "ars_nouveau:enchanting_apparatus",
          keepNbtOfReagent: nbt,
          output: {
            item: output,
          },
          pedestalItems: ingredients,
          reagent: item_core,
          sourceCost: source,
        });
      };

    //enchanting_apparatus(input-itemstack,input-itemstack[],output-itemstack,source-integer,nbtflag-boolean)
  });
}
