if (global.startup.mods.pnc) {
  ServerEvents.recipes((event) => {
    global.server.recipes.compat = {
      pnc : {
        assembly: {
          drill : ()=>{},
          laser : ()=>{},
          drill_laser : ()=>{},
        }
      }
    }
    global.server.recipes.compat.pnc.assembly.drill = function drill(
      input,
      output,
      count
    ) {
      //drill recipe with sequential laser recipe will automatly unified as drill input = laser output!
      event
        .custom({
          type: "pneumaticcraft:assembly_drill",
          input: ItemOrTag(input),
          program: "drill",
          result: ItemAndCount(output, count),
        })
        .id(RegX(input + "_" + output + "_" + count));
    };
    global.server.recipes.compat.pnc.assembly.laser = function laser(
      input,
      output,
      count
    ) {
      event
        .custom({
          type: "pneumaticcraft:assembly_laser",
          input: ItemOrTag(input),
          program: "laser",
          result: ItemAndCount(output, count),
        })
        .id(RegX(input + "_" + output + "_" + count));
    };
    global.server.recipes.compat.pnc.assembly.drill_laser =
      function drill_laser(input, middle, middle_count, output, output_count) {
        drill(input, middle, middle_count);
        laser(middle, output, output_count);
      };









      
  });
}
