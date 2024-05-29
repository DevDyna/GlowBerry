/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

global.server.datagen.pnc = {
  utils: {
    fuels: [
      "biodiesel",
      "cofh_creosote",
      "cofh_refined_fuel",
      "cofh_tree_oil",
      "hydrogen",
      "ethylene",
      "crude_oil",
      "diesel",
      "ethanol",
      "gasoline",
      "kerosene",
      "lpg",
    ],
    amadron_trades: [
      "assembly_program_drill",
      "assembly_program_drill_laser",
      "assembly_program_laser",
      "diesel_to_emerald",
      "emerald_to_lubricant",
      "emerald_to_oil",
      "gasoline_to_emerald",
      "kerosene_to_emerald",
      "lpg_to_emerald",
      "lubricant_to_emerald",
      "oil_to_emerald",
      "pcb_blueprint",
    ],
  },
};


if (global.startup.mods.pnc) {
  ServerEvents.highPriorityData((event) => {
    if (!global.server.datagen.pnc.keep) {
      global.server.datagen.pnc.utils.fuels.forEach((data) => {
        event.addJson(
          `pneumaticcraft:recipes/pneumaticcraft_fuels/${data}`,
          {}
        );
      });

      global.server.datagen.pnc.utils.amadron_trades.forEach((data) => {
        event.addJson(`pneumaticcraft:recipes/amadron/${data}`, {});
      });
    }

    /**
     *
     * @param {fluid} fuel
     * @param {int} air_per_bucket
     * @param {float} burn_rate
     * @param {itemtag} tag
     * @param {int} amount
     */
    global.server.recipes.compat.pnc.fuel_quality = function fuel_quality(
      fuel,
      air_per_bucket,
      burn_rate,
      tag,
      amount
    ) {
      event.addJson(
        `pneumaticcraft:recipes/pneumaticcraft_fuels/` +
          fuel.replace(/[^a-zA-Z0-9_ ]/g, ""),
        {
          type: "pneumaticcraft:fuel_quality",
          air_per_bucket: air_per_bucket,
          burn_rate: burn_rate,
          fluid: {
            type: "pneumaticcraft:fluid",
            amount: amount,
            tag: tag,
          },
        }
      );
    };

    /**
     *
     * @param {int} level_rarity 1 -> 50% | 2 -> 25% | 3 -> 15% | 4 -> 7% | 5 -> 3%
     * @param {string} type_in
     * @param {item|fluid} input
     * @param {int} count_in
     * @param {string} type_out
     * @param {item|fluid} output
     * @param {int} count_out
     * @param {boolean} persist
     */
    global.server.recipes.compat.pnc.amadron_trades = function amadron(
      level_rarity,
      type_in,
      input,
      count_in,
      type_out,
      output,
      count_out,
      persist
    ) {
      event.addJson(
        "pneumaticcraft:recipes/amadron/" +
          (input + "_" + output).replace(/[^a-zA-Z0-9_ ]/g, ""),
        {
          type: "pneumaticcraft:amadron",
          input: {
            type: type_in,
            amount: count_in,
            id: input,
          },
          level: level_rarity,
          output: {
            type: type_out,
            amount: count_out,
            id: output,
          },
          static: persist,
        }
      );
    };
  });
}
