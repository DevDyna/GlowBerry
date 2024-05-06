JEIEvents.hideItems((event) => {
  event.hide(global.disabledItem);
  event.hide(global.clearNBT);
});

//show items without nbt
JEIEvents.addItems((event) => {
  global.clearNBT.forEach((item) => {
    event.add(item);
  });
});
