JEIEvents.hideItems((event) => {
  event.hide(global.disabledItem);
  event.hide(global.clearNBT);
  event.hide(global.uselessItems);
});

// const $MekanismJEI = Java.loadClass("mekanism.client.jei.MekanismJEI");
// JEIEvents.hideCustom((event) => {
//   event.get($MekanismJEI.TYPE_GAS).hide(global.whitelistGasses);
//   event.get($MekanismJEI.TYPE_INFUSION).hideAll();
//   event.get($MekanismJEI.TYPE_PIGMENT).hideAll();
//   event.get($MekanismJEI.TYPE_SLURRY).hideAll();
// });
//show items without nbt
JEIEvents.addItems((event) => {
  global.clearNBT.forEach((item) => {
    event.add(item);
  });
});
