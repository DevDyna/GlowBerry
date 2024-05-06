if (global.startup.mods.homespun) {
  global.server.recipes.compat = {
    homespun : {
      crushing: ()=>{},
      evaporating: ()=>{}
    }
  }
  ServerEvents.recipes((event) => {
    global.server.recipes.compat.homespun.crushing = function crushing(
      input,
      output,
      count,
      fluid,
      amount
    ) {
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
    };

    global.server.recipes.compat.homespun.evaporating = function evaporating(
      fluid,
      amount,
      time,
      output,
      count
    ) {
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
    };
  });
}
