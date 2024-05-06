let $MysteriousItemConversionCategory, $ConversionRecipe;

if (global.startup.mods.create) {
  /**
   *
   * @param {item} input
   * @param {item[]} output
   */
  global.startup.myst = function myst(input, output) {
    StartupEvents.postInit((event) => {
      $MysteriousItemConversionCategory = Java.loadClass(
        "com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory"
      );
      $ConversionRecipe = Java.loadClass(
        "com.simibubi.create.compat.jei.ConversionRecipe"
      );
      if (!Array.isArray(output)) output = [output];
      output.forEach((element) => {
        $MysteriousItemConversionCategory.RECIPES.add(
          $ConversionRecipe.create(input, element)
        );
      });
    });
  };
}