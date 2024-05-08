//priority 10

//------------------------------------------------------------------------------------------//
/**
 *
 * @param {item[]} items
 * @param {item} result
 */
global.server.recipes.shaped.shapex = (items, result) => {
  ServerEvents.recipes((event) => {
    event
      .shaped(result, ["ABC", "DEF", "GHI"], {
        A: items[0],
        B: items[1],
        C: items[2],
        D: items[3],
        E: items[4],
        F: items[5],
        G: items[6],
        H: items[7],
        I: items[8],
      })
      .id(RegX(items + "_" + result).replace(/[0-9\s]/g, ""));
  });
};
//------------------------------------------------------------------------------------------//

/*
    012
    345
    678
*/
//shaped_plus([item_1,item_2],[[0,2,3,5],[1,4]],item_3)

/**
 *
 * @param {item[]} item_input item id on item[x] will be placed on slot[x]
 * @param {int[]} slot_input crafting slot id
 * @param {item} output
 */
global.server.recipes.shaped.shaped_plus = (item_input, slot_input, output) => {
  ServerEvents.recipes((event) => {
    let recipe = [[], [], []];
    for (let i = 0; i < slot_input.length; i++) {
      for (let j = 0; j < slot_input[i].length; j++) {
        //set on recipe index of array[[],[],[]] of array[] item_input of index i
        recipe[Math.floor(slot_input[i][j] / 3)][
          slot_input[i][j] - 3 * Math.floor(slot_input[i][j] / 3)
        ] = item_input[i];
      }
    }
    let id = "";
    for (let i = 0; i < item_input.length; i++) {
      id = id + item_input[i] + "_" + slot_input[i].length;
    }
    event.shaped(output, recipe).id(RegX(id + output));
  });
};

//------------------------------------------------------------------------------------------//

/**
 *
 * @param {item[]} inputs [1,2,3,4,5,6,7,8,9] or just 9x -item- to full all slots
 * @param {item} output result
 */
global.server.recipes.shapeless.RecipeHelper = (inputs, output) => {
  ServerEvents.recipes((event) => {
    event
      .shapeless(output, inputs)
      .id(RegX(inputs + "_" + output).replace(/\s/g, "_"));
  });
};
//------------------------------------------------------------------------------------------//

/**
 *
 * @param {item} nugget when array , ingot will be optional
 * @param {item} ingot
 */
global.server.recipes.shapeless.nine_to_one = (nugget, ingot) => {
  ServerEvents.recipes((event) => {
      event.shapeless("9x " + nugget, ingot);
      event.shapeless(ingot, "9x " + nugget);

  });
};

//------------------------------------------------------------------------------------------//

/**
 *
 * @param {item[]} output
 * @param {item[]} input
 */
global.server.recipes.stonecutter.MultiCutting = (output, input) => {
  ServerEvents.recipes((event) => {
    for (let j = 0; j < input.length; j++) {
      for (let i = 0; i < output.length; i++) {
        event
          .stonecutting(output[i], input[j])
          .id(
            RegX(input[j] + "_n" + i + "_" + output[i].replace(/[0-9\s]/g, ""))
          );
      }
    }
  });
};
//------------------------------------------------------------------------------------------//
