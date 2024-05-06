//priority -1
//PRIORITY NEED TO BE BELOW ZERO TO WORK!

//#### ---------------------------------SETTINGS--------------------------------- ####//
//## --------------------Tooltip-------------------- ##//
/* Toggle of default disabled items to show a fancy tooltip
*/
global.client.DefaultTooltip = true

//## --------------------Tooltip-------------------- ##//
/* Toggle of default disabled items to show a fancy tooltip
*/
global.any.enableExamples = true





//## --------------------Compat-------------------- ##//
//# -----------PneumaticCraftDatagen----------- #//
/* Allow to keep/remove any fuel quality and amadron trades from PNC
*/
global.server.datagen.pnc.keep = false

//#### ---------------------------------ItemRemover--------------------------------- ####//
/* Allow to remove completly from your modpack items
* How to add:
* - ingame </kubejs hand> and pickup the item-id
* - paste inside the list like that : -> 'minecraft:stone', <- 
* - repeat for any item you want remove
*
* What it will do:
* - it remove any recipe (possible) where the item was included
* - it remove jei visibilty of this item
*/
global.disabledItem = [
//'minecraft:stone',
]



//## --------------------Compat-------------------- ##//
//# -----------JEI NBT Cleaner----------- #//
/* Remove multiple items from other mods with NBT without remove entirely
*
*
* How to add:
* - ingame </kubejs hand> and pickup the item-id
* - paste inside the list like that : -> 'minecraft:stone', <- 
* - repeat for any item you want remove
*
* What it will do:
* - it remove any item with same id
* - it re-add it without nbt one single time
*
*/
global.clearNBT = [
//'minecraft:stone',
]




/* 1.19.2 deprecated way
§0 Black
§1 Blue
§2 Green
§3 Cyan
§4 Red
§5 Magenta
§6 Yellow
§7 Gray
§8 Dark Gray
§9 Light Blue
§a Light Green
§b Light Cyan
§c Light Red
§d Light Magenta
§e Light Yellow
§f White
.
§l Bold
§m Strikethrough
§n Underline
§o Italic
§r Reset
*/