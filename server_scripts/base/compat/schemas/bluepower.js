/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

if (global.startup.mods.bluepower) {
  //alloy_smelting bluepower
  //
  //		WARNING: MORE THAT 1 TYPE CAUSE ISSUES FROM BLUEPOWER
  //
  /*----------------------------------------------------------------------------------------------*/
  global.server.recipes.compat.bluepower.alloy = (
    inputs_name,
    inputs_count,
    output_name,
    output_count
  ) => {
    ServerEvents.recipes((event) => {
      let ingredients = [];

      for (let i = 0; i < inputs_name.length; i++) {
        ingredients.push(ItemOrTagAndCount(inputs_name[i], inputs_count[i]));
      }

      event
        .custom({
          type: "bluepower:alloy_smelting",
          ingredients: ingredients,
          result: {
            item: output_name,
            count: output_count,
          },
        })
        .id(
          RegX(
            inputs_name +
              "_" +
              inputs_count +
              "_" +
              output_name +
              "_" +
              output_count
          )
        );
    });
  };
}
