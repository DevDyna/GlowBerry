/*  
    ##DEFAULT RECIPE CLEANER##
    #How it work:
    +------------------------------------------------------------+
    | it remove (where possible) default recipes that other mods |
    | could add on datagen by adding a item-tag                  |
    +------------------------------------------------------------+

    #How to use:
    +------------------------------------------------------------+
    | write the item or itemtag inside the list and reload ,     |
    | now the item have this *ability*                           |
    +------------------------------------------------------------+

    #All tags:
    +--------------------------------------------------------------------------+
    | > output   ->   remove item as result                                    |
    | > input    ->   remove item as ingredient                                |
    | > any      ->   remove item as result or ingredient                      |
    +--------------------------------------------------------------------------+

    +---------------------------+
    |      input     output     |
    |    ┌--------┐  ┌---┐      |
    |      [][][]               |
    |      [][][]  => []        |
    |      [][][]               |   
    |    └---------------┘      |
    |           any             |
    +---------------------------+

    #Example:
    +------------------------------------------------------------------------+
    |  event.add("glowberry:input", ['minecraft:stone','minecraft:dirt']);   |
    +------------------------------------------------------------------------+

  */

//BLOCKS ARE ITEMS!
ServerEvents.tags("item", (event) => {
  //event.add("glowberry:input", ['minecraft:stone','minecraft:dirt']);
});


/*  HOW TO USE RECIPE SCHEMAS AND MORE
Example using the most basic recipe -> [Nuggets to Ingot & viceversa] -> global.server.recipes.shapeless.nineToOne

Step 1 : How to read it

    +---------------------+
    |     [global]        |
    |        ↑            |
    |    base keyname     |
    +---------------------+------+
    |     global.[server]        |
    |                ↑           |
    |            side keyname    |
    +----------------------------+--------+
    |     global.server.[recipes]         |
    |                      ↑              |
    |                 type keyname        |
    +-------------------------------------+--------+
    |     global.server.recipes.[shapeless]        |
    |                               ↑              |
    |                        type recipe keyname   |
    +----------------------------------------------+--------+
    |     global.server.recipes.shapeless.[nineToOne()]     |
    |                                         ↑             |
    |                                   function keyname    |
    +-------------------------------------------------------+-------+
    |     global.server.recipes.shapeless.nineToOne([...])          |
    |                                                 ↑             |
    |                                             parameters        |
    +---------------------------------------------------------------+
Step 2 : How to use (highly recommended to use PROBEJS)

[..].nineToOne() require two parameters : <ingot-id> + <nugget-id> like "minecraft:iron_ingot" -> 9x "minecraft:iron_nugget"
so to add it you need to insert inside brackets them separated by comma

  result :
  [..].nineToOne("minecraft:iron_ingot","minecraft:iron_nugget")


    What you can see using JEI/REI/EMI/TMI/NEI/RECIPEBOOK/<insert here mod name that still missing>

    +----------------+
    |   info-panel   |
    +----------------+
    |0 -> iron nugget|
    |1 -> iron ingot |
    +----------------+

                crafting result with iron ingot
                  |
    [0][0][0]     ↓
    [0][0][0] -> [1]
    [0][0][0]
        ↑
    crafting grid with 9x iron nugget

                crafting result with 9x iron nugget
                  |
    [ ][ ][ ]     ↓
    [ ][1][ ] -> [0]
    [ ][ ][ ]
        ↑
    crafting grid with a iron ingot

Your recipe was successful created!

To use mod schemas tou can see on https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/.example.js#L22


*/
