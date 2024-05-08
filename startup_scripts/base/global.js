//priority 10
global.startup = {
  mods: {
    farmersdelight: Boolean,
    create: Boolean,
    tombstone: Boolean,
    ten3: Boolean,
    mekanism: Boolean,
    twilightforest: Boolean,
    homespun: Boolean,
    ae2: Boolean,
    pnc: Boolean,
    reactive: Boolean,
    bluepower: Boolean,
    ars_nouveau: Boolean,
  },
};

global.server = {
  datagen: {
    pnc: { keep: Boolean },
  },
  recipes: {
    processing: {
      vanilla_smelt: Function,
    },
    shaped: {
      shapex: Function,
      shaped_plus: Function,
    },
    shapeless: {
      nine_to_one: Function,
      RecipeHelper: Function,
    },
    stonecutter: {
      MultiCutting: Function,
    },
    compat: {
      pnc: {
        assembly: {
          drill: Function,
          laser: Function,
          drill_laser: Function,
        },
      },
      ars_nouveau: {
        enchanting_apparatus: Function,
      },
      twilightforest: {
        uncrafting: Function,
      },
      reactive: {
        transmute: Function,
      },
      homespun: {
        crushing: Function,
        evaporating: Function,
      },
      create: {
        ItemApplicator: Function,
      },
      bluepower: {
        alloy: Function,
      },
      ae2: {
        charger: Function,
        entropy: Function,
        inscriber: Function,
        transform: Function,
      },
    },
  },
};

global.client = { DefaultTooltip: Boolean };

global.any = {
  enableExamples: Boolean,
};

global.startup.mods.farmersdelight = Platform.isLoaded("farmersdelight");
global.startup.mods.create = Platform.isLoaded("create");
global.startup.mods.tombstone = Platform.isLoaded("tombstone");
global.startup.mods.ten3 = Platform.isLoaded("ten3");
global.startup.mods.mekanism = Platform.isLoaded("mekanism");
global.startup.mods.twilightforest = Platform.isLoaded("twilightforest");
global.startup.mods.homespun = Platform.isLoaded("homespun");
global.startup.mods.ae2 = Platform.isLoaded("ae2");
global.startup.mods.pnc = Platform.isLoaded("pneumaticcraft");
global.startup.mods.reactive = Platform.isLoaded("reactive");
global.startup.mods.bluepower = Platform.isLoaded("bluepower");
global.startup.mods.ars_nouveau = Platform.isLoaded("ars_nouveau");
