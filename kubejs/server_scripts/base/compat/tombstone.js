if (global.mod.tombstone)
  ServerEvents.tags("item", (event) => {
    //event.removeAll("tombstone:voodoo_poppet_ingredients")
    //event.add("tombstone:voodoo_poppet_ingredients", <item-id>);
  });

  /*
  TOMBSTONE ITEM TAG
  tombstone:voodoo_poppet_ingredients
  tombstone:voodoo_poppet_ingredient_suffocation
  tombstone:voodoo_poppet_ingredient_burn
  tombstone:voodoo_poppet_ingredient_lightning
  tombstone:voodoo_poppet_ingredient_fall
  tombstone:voodoo_poppet_ingredient_cold
  */

  //note: if one of this item tag still missing , tombstone send on crash