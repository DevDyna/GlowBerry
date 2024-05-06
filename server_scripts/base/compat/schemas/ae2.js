if (global.startup.mods.ae2){
ServerEvents.recipes(event => {
	
  global.server.recipes.compat.ae2.charger = function charger(input,output){
    event.custom({  
      "type": "ae2:charger",
      "ingredient": {
        "item": input
      },
      "result": {
        "item": output
      }
      }).id(RegX(input + "_" + output))
  }

   /**
   *
   * @param {string} mode heat | cool
   * @param {string} type_input block | fluid
   * @param {item|block} input_id
   * @param {string} type_output block | fluid | drops
   * @param {item|block} output_id
   */
   global.server.recipes.compat.ae2.entropy = function entropy(
    mode,
    type_input,
    input_id,
    type_output,
    output_id
  ) {
    let md, t_in, t_out;
    switch (mode) {
      case "heat" || "cool":
        md = mode;
        break;
      default:
        console.log("ERROR , Wrong Mode ->" + mode);
    }

    switch (type_input) {
      case "block":
        t_in = {
          block: {
            id: input_id,
          },
        };
        break;
      case "fluid":
        t_in = {
          fluid: {
            id: input_id,
          },
        };
        break;
      default:
        console.log("ERROR , Wrong Type Input ->" + type_input);
    }

    switch (type_output) {
      case "block":
        t_out = {
          fluid: {
            id: output_id,
          },
        };
        break;
      case "fluid":
        t_out = {
          fluid: {
            id: output_id,
          },
        };
        break;
      case "drops":
        t_out = {
          drops: [
            {
              id: output_id,
            },
          ],
        };
        break;
      default:
        console.log("ERROR , Wrong Type Output ->" + type_output);
    }

    event.custom({
      type: "ae2:entropy",
      input: t_in,
      mode: mode,
      output: t_out,
    });
  };






  
})}