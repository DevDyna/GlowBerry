//priority 10

// STARTUP INITIALIZATION
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
    thermal : Boolean,
    botanypots : Boolean,
    mysticalagriculture: Boolean,
    expatternprovider : Boolean,
  },
};

//SERVER INITIALIZATION
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
      thermal: {
        brewer: Function,
      },
      botanypots:{
        AddSoil:Function,
        AddInteraction:Function,
        AddFertilizer:Function,
        AddSeed:Function
      },
      mysticalagriculture:{

      }
    },
  },
  Utils:{
    compat:{
      extendedae2:{
        infinityDisk : Function,
        customInfinityDisk : Function
      }
    }
  }
};

//MOD ENABLE FLAGS
//global.startup.mods.modname = Platform.isLoaded("mod-id");
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
global.startup.mods.thermal = Platform.isLoaded("thermal");
global.startup.mods.botanypots = Platform.isLoaded("botanypots");
global.startup.mods.mysticalagriculture = Platform.isLoaded("mystical_agriculture");
global.startup.mods.extendedae2 = Platform.isLoaded("expatternprovider");

//CLIENT INITIALIZATION
global.client = { DefaultTooltip: Boolean };

//CORE
global.any = {
  enableExamples: Boolean,
};