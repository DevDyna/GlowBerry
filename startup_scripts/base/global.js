//priority 1
global.startup.mods = { 
  farmersdelight: Platform.isLoaded('farmersdelight'),
  create : Platform.isLoaded('create'),
  tombstone : Platform.isLoaded('tombstone'),
  ten3 : Platform.isLoaded('ten3'),
  mekanism: Platform.isLoaded('mekanism'),
  twilightforest: Platform.isLoaded('twilightforest'),
  homespun: Platform.isLoaded('homespun'),
  ae2: Platform.isLoaded('ae2'),
  pnc: Platform.isLoaded('pnc'),
  reactive: Platform.isLoaded('reactive'),
  bluepower: Platform.isLoaded('bluepower'),
};

global.client.tip(global.disabledItem,'Item Disabled')