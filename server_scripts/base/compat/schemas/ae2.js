if (global.startup.mods.ae2) {
  /**
   *
   * @param {item} input
   * @param {output} output
   */
  global.server.recipes.compat.ae2.charger = (input, output) => {
    ServerEvents.recipes((event) => {
      event
        .custom({
          type: "ae2:charger",
          ingredient: {
            item: input,
          },
          result: {
            item: output,
          },
        })
        .id(RegX(input + "_" + output));
    });
  };

  /**
   *
   * @param {string} mode heat | cool
   * @param {string} type_input block | fluid
   * @param {item|block} input_id
   * @param {string} type_output block | fluid | drops
   * @param {item|block} output_id
   */
  global.server.recipes.compat.ae2.entropy = (
    mode,
    type_input,
    input_id,
    type_output,
    output_id
  ) => {
    ServerEvents.recipes((event) => {
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
    });
  };

  /**
   *
   * @param {'press'|'inscribe'} type_mode press dont use item
   * @param {item[]} input middle top bottom
   * @param {item} output
   */
  global.server.recipes.compat.ae2.inscriber = (type_mode, input, output) => {
    ServerEvents.recipes((event) => {
      switch (input.length) {
        case 1:
          event
            .custom({
              type: "ae2:inscriber",
              ingredients: {
                middle: {
                  item: input[0],
                },
              },
              mode: type_mode,
              result: {
                item: output,
              },
            })
            .id(RegX(type_mode + "_" + input + "_" + output));
          break;
        case 2:
          event
            .custom({
              type: "ae2:inscriber",
              ingredients: {
                middle: {
                  item: input[0],
                },
                top: {
                  item: input[1],
                },
              },
              mode: type_mode,
              result: {
                item: output,
              },
            })
            .id(RegX(type_mode + "_" + input + "_" + output));
          break;
        case 3:
          event
            .custom({
              type: "ae2:inscriber",
              ingredients: {
                bottom: {
                  item: input[2],
                },
                middle: {
                  item: input[0],
                },
                top: {
                  item: input[1],
                },
              },
              mode: type_mode,
              result: {
                item: output,
              },
            })
            .id(RegX(type_mode + "_" + input + "_" + output));
          break;
        default:
          throw "ERROR INSCRIBER RECIPES";
      }
    });
  };

  /**
   *
   * @param {"explosion"|"fluid"} type
   * @param {item[]} input only 2 items accept
   * @param {item} output
   * @param {int} count
   * @param {liquid} fluid optional when type = explosion
   */
  global.server.recipes.compat.ae2.transform = (
    type,
    input,
    output,
    count,
    fluid
  ) => {
    ServerEvents.recipes((event) => {
      let type_rec, items;

      switch (type) {
        case "fluid":
          type_rec = { type: type, tag: fluid };
          break;
        case "explosion":
          type_rec = { type: type };
          break;
        default:
          console.log("ERROR Wrong ae2 trasform type ->" + type);
      }

      switch (input.length) {
        case 1:
          items = [
            {
              item: input[0],
            },
          ];
          break;
        case 2:
          items = [
            {
              item: input[0],
            },
            {
              item: input[1],
            },
          ];
          break;
        default:
          console.log("ERROR Wrong input trasform items ->" + input);
      }

      event.custom({
        type: "ae2:transform",
        circumstance: type_rec,
        ingredients: items,
        result: {
          count: count,
          item: output,
        },
      });
    });
  };
}
