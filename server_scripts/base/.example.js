//priority -1
if(global.any.enableExamples){

ServerEvents.recipes((event) => {
    event.remove({})
})

//vanilla recipes utils
global.server.recipes.shaped.shapex(['minecraft:dirt','minecraft:stone'],'minecraft:bedrock')

global.server.recipes.shaped.shaped_plus(['minecraft:bedrock','minecraft:dirt'],[[1,2],[3,4]],'minecraft:cobblestone')

global.server.recipes.shapeless.nine_to_one('minecraft:iron_block','minecraft:copper_block')

global.server.recipes.shapeless.RecipeHelper(['minecraft:bookshelf','minecraft:deepslate'],'minecraft:gravel')

global.server.recipes.stonecutter.MultiCutting(['minecraft:stone','minecraft:dirt'],['minecraft:sand'])


//compat recipes utils

global.server.recipes.compat.create.ItemApplicator('minecraft:stone','minecraft:blaze_rod','minecraft:white_concrete')

}