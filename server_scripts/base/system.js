ServerEvents.tags("item", (event) => {
  //remove all item tag from disabled items
  event.removeAllTagsFrom(global.disabledItem);
  //remove all recipes from disabled items
  event.add("glowberry:any", global.disabledItem);
  event.add("glowberry:clear_nbt", global.hiddenItems);
});