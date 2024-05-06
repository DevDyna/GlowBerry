//ServerEvents.recipes((event) => {
/*
*	Template file of how to replace any recipe using forge item tags
*		to unify ingots , blocks , dusts and nuggets when need
*
*		ALL ITEM ID ARE TEMPLATE , YOU NEED TO ADAPT TO USE ON OWN MODPACK BEFORE ENABLE
*
*/
//   let unify = {
//     type: [
//       "lead",
//       "tin",
//       "tungsten",
//       "electrum",
//       "bronze",
//       "silver",
//       "zinc",
//       "steel",
//     ],
//     block: [
//       "thermal:lead_block",
//       "thermal:tin_block",
//       "bluepower:tungsten_block",
//       "thermal:electrum_block",
//       "thermal:bronze_block",
//       "thermal:silver_block",
//       "bluepower:zinc_block",
//       "mekanism:block_steel",
//     ],
//     ingot: [
//       "thermal:lead_ingot",
//       "thermal:tin_ingot",
//       "bluepower:tungsten_ingot",
//       "thermal:electrum_ingot",
//       "mekanism:ingot_bronze",
//       "thermal:silver_ingot",
//       "bluepower:zinc_ingot",
//       "mekanism:ingot_steel",
//     ],
//     nugget: [
//       "thermal:lead_nugget",
//       "thermal:tin_nugget",
//       "bluepower:tungsten_nugget",
//       "thermal:electrum_nugget",
//       "thermal:bronze_nugget",
//       "thermal:silver_nugget",
//       "bluepower:zinc_nugget",
//       "mekanism:nugget_steel",
//     ],
//     dust: [
//       "thermal:lead_dust",
//       "thermal:tin_dust",
//       "bluepower:tungsten_dust",
//       "thermal:electrum_dust",
//       "thermal:bronze_dust",
//       "thermal:silver_dust",
//       "bluepower:zinc_dust",
//       "mekanism:dust_steel",
//     ],
//   };

//   for (let i = 0; i < unify.type.length; i++) {
//     event.replaceInput(
//       { input: "#forge:nuggets/" + unify.type[i] },
//       "#forge:nuggets/" + unify.type[i],
//       unify.nugget[i]
//     );
//     event.replaceOutput(
//       { output: "#forge:nuggets/" + unify.type[i] },
//       "#forge:nuggets/" + unify.type[i],
//       unify.nugget[i]
//     );
//     event.replaceInput(
//       { input: "#forge:ingots/" + unify.type[i] },
//       "#forge:ingots/" + unify.type[i],
//       unify.ingot[i]
//     );
//     event.replaceOutput(
//       { output: "#forge:ingots/" + unify.type[i] },
//       "#forge:ingots/" + unify.type[i],
//       unify.ingot[i]
//     );
//     event.replaceInput(
//       { input: "#forge:storage_blocks/" + unify.type[i] },
//       "#forge:storage_blocks/" + unify.type[i],
//       unify.block[i]
//     );
//     event.replaceOutput(
//       { output: "#forge:storage_blocks/" + unify.type[i] },
//       "#forge:storage_blocks/" + unify.type[i],
//       unify.block[i]
//     );
//     event.replaceInput(
//       { input: "#forge:dusts/" + unify.type[i] },
//       "#forge:dusts/" + unify.type[i],
//       unify.dust[i]
//     );
//     event.replaceOutput(
//       { output: "#forge:dusts/" + unify.type[i] },
//       "#forge:dusts/" + unify.type[i],
//       unify.dust[i]
//     );
//   }
//});
