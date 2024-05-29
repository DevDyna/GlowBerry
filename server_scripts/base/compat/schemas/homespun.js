/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

if (global.startup.mods.homespun) {
  global.server.recipes.compat.homespun.crushing = (
    input,
    output,
    count,
    fluid,
    amount
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "homespun:tub_crushing",
        input_item: {
          item: input,
        },
        output_item: {
          count: count,
          item: output,
        },
        fluid_stack: {
          fluid: fluid,
          amount: amount,
        },
      });
    });
  };

  global.server.recipes.compat.homespun.evaporating = (
    fluid,
    amount,
    time,
    output,
    count
  ) => {
    ServerEvents.recipes((event) => {
      event.custom({
        type: "homespun:evaporating",
        output_item: {
          item: output,
          count: count,
        },
        fluid_stack: {
          fluid: fluid,
          amount: amount,
        },
        time: time,
      });
    });
  };
}
