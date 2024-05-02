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


