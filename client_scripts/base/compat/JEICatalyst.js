const $jei = {"pnc":{},"ars":{},"mow":{}}

$jei.pnc = Java.loadClass('me.desht.pneumaticcraft.common.thirdparty.jei.RecipeTypes')
$jei.ars = Java.loadClass('com.hollingsworth.arsnouveau.client.jei.JEIArsNouveauPlugin')
$jei.mow = Java.loadClass('com.mowmaster.pedestals.Compat.JEI.JEIPedestalsRecipeTypes')

JEIAddedEvents.registerRecipeCatalysts(jei =>{

	jei.data.addRecipeCatalyst(Item.of('pneumaticcraft:small_tank', '{BlockEntityTag:{SavedTanks:{Tank:{Amount:32000,FluidName:"pneumaticcraft:plastic"}}}}'),$jei.pnc.PLASTIC_SOLIDIFYING)

	jei.data.addRecipeCatalyst('pneumaticcraft:yeast_culture_bucket',$jei.pnc.YEAST_CRAFTING)
	jei.data.addRecipeCatalyst('minecraft:sugar',$jei.pnc.YEAST_CRAFTING)
	
	jei.data.addRecipeCatalyst('pneumaticcraft:etching_acid_bucket',$jei.pnc.ETCHING_TANK)
	
	jei.data.addRecipeCatalyst('ars_nouveau:arcane_pedestal',$jei.ars.IMBUEMENT_RECIPE_TYPE)
	jei.data.addRecipeCatalyst('ars_nouveau:source_jar',$jei.ars.IMBUEMENT_RECIPE_TYPE)

	jei.data.addRecipeCatalyst('ars_nouveau:arcane_pedestal',$jei.ars.ENCHANTING_APP_RECIPE_TYPE)
	jei.data.addRecipeCatalyst('ars_nouveau:arcane_core',$jei.ars.ENCHANTING_APP_RECIPE_TYPE)
	jei.data.addRecipeCatalyst('ars_nouveau:source_jar',$jei.ars.ENCHANTING_APP_RECIPE_TYPE)

	jei.data.addRecipeCatalyst('pedestals:block_pedestal',$jei.mow.COBBLE_GEN_RECIPE)

})
