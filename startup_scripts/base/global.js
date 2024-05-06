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

global.server.EasyId = true
global.client.tip(global.disabledItem,'Item Disabled')

global.nc = { energy: 1.0, speed: 1.0, rad: 0.0 }; //global value for NC

global.dye = [
  "cyan",
  "white",
  "light_gray",
  "black",
  "red",
  "green",
  "brown",
  "blue",
  "purple",
  "orange",
  "magenta",
  "light_blue",
  "yellow",
  "lime",
  "pink",
  "gray",
];

// global.whitelistGasses = [
// ];

global.disabledItem = [];


/* 
#MODLIST#
ae2
bluepower
integrateddynamics
mekanism
nuclearcraft
pneumaticcraft
reactive
ten3
thermal
thoriumreactors
tombstone
create 
farmersdelight
*/





