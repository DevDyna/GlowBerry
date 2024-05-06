//priority 10
global.startup = {
  mods: {
    farmersdelight: Platform.isLoaded("farmersdelight"),
    create: Platform.isLoaded("create"),
    tombstone: Platform.isLoaded("tombstone"),
    ten3: Platform.isLoaded("ten3"),
    mekanism: Platform.isLoaded("mekanism"),
    twilightforest: Platform.isLoaded("twilightforest"),
    homespun: Platform.isLoaded("homespun"),
    ae2: Platform.isLoaded("ae2"),
    pnc: Platform.isLoaded("pnc"),
    reactive: Platform.isLoaded("reactive"),
    bluepower: Platform.isLoaded("bluepower"),
  },
};

global.server = {
  datagen: {
    pnc: { keep: Boolean },
  },
  recipes: {
    processing: {},
    shaped : {},
    shapeless : {},
    stonecutter : {},
    compat: {},
  },
};

global.client = { DefaultTooltip: Boolean };

global.any = {
  enableExamples : Boolean
}
