/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

if (global.startup.mods.pnc) {
  global.server.recipes.compat.pnc.assembly.drill = (input, output, count) => {
    ServerEvents.recipes((event) => {
      //drill recipe with sequential laser recipe will automatly unified as drill input = laser output!
      event
        .custom({
          type: "pneumaticcraft:assembly_drill",
          input: ItemOrTag(input),
          program: "drill",
          result: ItemAndCount(output, count),
        })
        .id(RegX(input + "_" + output + "_" + count));
    });
  };
  global.server.recipes.compat.pnc.assembly.laser = (input, output, count) => {
    ServerEvents.recipes((event) => {
      event
        .custom({
          type: "pneumaticcraft:assembly_laser",
          input: ItemOrTag(input),
          program: "laser",
          result: ItemAndCount(output, count),
        })
        .id(RegX(input + "_" + output + "_" + count));
    });
  };
  global.server.recipes.compat.pnc.assembly.drill_laser = (
    input,
    middle,
    middle_count,
    output,
    output_count
  ) => {
    drill(input, middle, middle_count);
    laser(middle, output, output_count);
  };
}
