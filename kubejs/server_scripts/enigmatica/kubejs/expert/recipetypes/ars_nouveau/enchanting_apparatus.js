onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
            reagent: '#forge:dusts/sulfur',
            sourceCost: 1000,
            output: Item.of('4x architects_palette:sunmetal_blend'),
            id: 'architects_palette:sunmetal_blend'
        },
        {
            inputs: [
                'aquaculture:worm',
                '#forge:nuggets/nebu',
                'minecraft:string',
                'thermal:phytogro',
                'thermal:phytogro',
                'minecraft:string',
                '#forge:nuggets/nebu',
                'aquaculture:worm'
            ],
            reagent: '#forge:beehives/tier_0',
            sourceCost: 5000,
            output: 'betterendforge:silk_moth_nest',
            id: `${id_prefix}silk_moth_nest`
        },
        {
            inputs: [
                'aquaculture:worm',
                'naturesaura:gold_fiber',
                'aquaculture:worm',
                'thermal:phytogro',
                'thermal:phytogro',
                'aquaculture:worm',
                'naturesaura:gold_fiber',
                'aquaculture:worm'
            ],
            reagent: '#forge:beehives/tier_0',
            sourceCost: 5000,
            output: Item.of('2x betterendforge:silk_moth_nest'),
            id: `${id_prefix}silk_moth_nest_alt`
        },
        {
            inputs: [
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend'
            ],
            reagent: 'betterendforge:silk_fiber',
            sourceCost: 1000,
            output: Item.of('4x naturesaura:gold_fiber'),
            id: `${id_prefix}gold_fiber`
        },
        {
            inputs: [
                'atum:papyrus_plant',
                '#forge:dusts/lapis',
                'atum:papyrus_plant',
                'eidolon:pewter_inlay',
                'eidolon:pewter_inlay',
                'thermal:phytogro',
                'betterendforge:andesite_pedestal',
                'thermal:phytogro'
            ],
            reagent: 'eidolon:crucible',
            sourceCost: 1000,
            output: 'botania:apothecary_default',
            id: `${id_prefix}crucible`
        },
        {
            inputs: [
                'eidolon:gold_inlay',
                '#forge:dusts/mana',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'occultism:sacrificial_bowl',
            sourceCost: 5000,
            output: 'occultism:golden_sacrificial_bowl',
            id: 'occultism:crafting/golden_sacrificial_bowl'
        },
        {
            inputs: [
                'eidolon:pewter_inlay',
                'occultism:stable_wormhole',
                'eidolon:pewter_inlay',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'eidolon:pewter_inlay',
                'occultism:otherstone_pedestal',
                'eidolon:pewter_inlay'
            ],
            reagent: 'eidolon:crucible',
            sourceCost: 5000,
            output: 'bloodmagic:soulforge',
            id: `${id_prefix}soulforge`
        },
        {
            inputs: [
                'eidolon:gold_inlay',
                '#forge:ingots/silver',
                'eidolon:gold_inlay',
                '#forge:ingots/silver',
                '#forge:ingots/silver',
                'eidolon:gold_inlay',
                '#forge:ingots/silver',
                'eidolon:gold_inlay'
            ],
            reagent: 'astralsorcery:aquamarine',
            sourceCost: 5000,
            output: 'undergarden:catalyst',
            id: 'undergarden:catalyst'
        },
        {
            inputs: [
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle'
            ],
            reagent: 'bloodmagic:holy_water_anointment',
            output: Item.of('8x eidolon:candle'),
            id: 'eidolon:candle'
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'bloodmagic:lavacrystal',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:volcanic_accumulator',
            id: `${id_prefix}volcanic_accumulator`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'thermal:phytogro',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:mana_condenser',
            id: `${id_prefix}mana_condenser`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'eidolon:fungus_sprouts',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:mycelial_sourcelink',
            id: `${id_prefix}mycelial_sourcelink`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'atum:glistering_date',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:vitalic_sourcelink',
            id: `${id_prefix}vitalic_sourcelink`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'eidolon:wooden_brewing_stand',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay',
                'eidolon:gold_inlay'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:alchemical_sourcelink',
            id: `${id_prefix}alchemical_sourcelink`
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'ars_nouveau:warding_stone',
                '#forge:ingots/gold_brass',
                '#forge:nuggets/gold_brass',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                'ars_nouveau:warding_stone',
                '#forge:ingots/gold_brass'
            ],
            reagent: '#forge:gems/mana',
            output: 'ars_nouveau:crystallizer',
            id: `${id_prefix}crystallizer`
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'ars_nouveau:warding_stone',
                '#forge:ingots/gold_brass',
                'ars_nouveau:glyph_extract',
                'ars_nouveau:glyph_extract',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder'
            ],
            reagent: 'ars_nouveau:potion_jar',
            sourceCost: 100,
            output: 'ars_nouveau:potion_melder',
            id: 'ars_nouveau:potion_melder'
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'ars_nouveau:glyph_projectile',
                'minecraft:conduit',
                '#forge:gems/mana',
                'ars_nouveau:glyph_accelerate',
                'ars_nouveau:spell_parchment',
                '#forge:gems/mana',
                '#forge:ingots/gold_brass'
            ],
            reagent: 'botania:livingwood',
            sourceCost: 6000,
            output: 'ars_nouveau:wand',
            id: 'ars_nouveau:wand'
        },
        {
            inputs: [
                'ars_nouveau:glyph_amplify',
                '#forge:storage_blocks/regalium',
                '#forge:storage_blocks/regalium',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana'
            ],
            reagent: Item.of('undergarden:utheric_sword', '{Damage:0}').weakNBT(),
            sourceCost: 6000,
            output: 'ars_nouveau:enchanters_sword',
            id: 'ars_nouveau:enchanters_sword'
        },
        {
            inputs: [
                '#forge:ingots/terminite',
                'ars_nouveau:greater_experience_gem',
                '#forge:ingots/terminite',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/terminite',
                'ars_nouveau:greater_experience_gem',
                '#forge:ingots/terminite'
            ],
            reagent: '#atum:relic_non_dirty/ring',
            sourceCost: 6000,
            output: 'ars_nouveau:ring_of_lesser_discount',
            id: 'ars_nouveau:ring_of_lesser_discount'
        },
        {
            inputs: [
                '#forge:ingots/thallasium',
                '#forge:ingots/regalium',
                '#forge:ingots/thallasium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/thallasium',
                '#forge:ingots/regalium',
                '#forge:ingots/thallasium'
            ],
            reagent: 'ars_nouveau:ring_of_lesser_discount',
            sourceCost: 6000,
            output: 'ars_nouveau:ring_of_greater_discount',
            id: 'ars_nouveau:ring_of_greater_discount'
        },
        {
            inputs: [
                '#forge:gems/aquamarine',
                'naturesaura:birth_spirit',
                '#forge:gems/aquamarine',
                '#forge:ingots/regalium',
                '#forge:ingots/regalium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: '#atum:relic_non_dirty/necklace',
            sourceCost: 6000,
            output: 'ars_nouveau:amulet_of_mana_regen',
            id: 'ars_nouveau:amulet_of_mana_regen'
        },
        {
            inputs: [
                '#forge:gems/aquamarine',
                'minecraft:conduit',
                '#forge:gems/aquamarine',
                '#forge:ingots/regalium',
                '#forge:ingots/regalium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: '#atum:relic_non_dirty/necklace',
            sourceCost: 6000,
            output: 'ars_nouveau:amulet_of_mana_boost',
            id: 'ars_nouveau:amulet_of_mana_boost'
        },
        {
            inputs: [
                'ars_nouveau:glyph_launch',
                '#atum:relic_non_dirty/brooch',
                'atum:horus_godshard',
                '#atum:relic_non_dirty/brooch',
                '#atum:relic_non_dirty/brooch',
                'quark:bottled_cloud',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            reagent: 'eidolon:basic_belt',
            sourceCost: 6000,
            output: 'ars_nouveau:belt_of_levitation',
            id: 'ars_nouveau:belt_of_levitation'
        },
        {
            inputs: [
                'minecraft:sugar',
                '#forge:crops/nether_wart',
                '#forge:rods/blaze',
                '#forge:dusts/glowstone',
                'minecraft:fermented_spider_eye',
                '#forge:dusts/redstone',
                'atum:atem_godshard',
                '#forge:feathers'
            ],
            reagent: 'eidolon:basic_belt',
            sourceCost: 6000,
            output: 'ars_nouveau:belt_of_unstable_gifts',
            id: 'ars_nouveau:belt_of_unstable_gifts'
        },
        {
            inputs: [
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock'
            ],
            reagent: '#botania:runes/mana',
            sourceCost: 6000,
            output: 'botania:mana_tablet',
            id: 'botania:mana_tablet'
        },
        {
            inputs: [
                '#resourcefulbees:resourceful_honeycomb_block',
                'minecraft:sunflower',
                'resourcefulbees:honey_fluid_bucket',
                '#botania:runes/earth',
                '#botania:runes/air',
                'resourcefulbees:honey_fluid_bucket',
                'naturesaura:aura_bloom',
                '#resourcefulbees:resourceful_honeycomb_block'
            ],
            reagent: Item.of('resourcefulbees:t1_apiary').ignoreNBT(),
            sourceCost: 5000,
            output: 'resourcefulbees:t2_apiary',
            id: 'resourcefulbees:t2_apiary'
        },
        {
            inputs: [
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:firescribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:airscribetool', '{Damage:0}').weakNBT(),
                Item.of('bloodmagic:earthscribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:waterscribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond'
            ],
            reagent: 'botania:livingwood_twig',
            sourceCost: 5000,
            output: 'bloodmagic:ritualdiviner',
            id: `${id_prefix}ritualdiviner`
        },
        {
            inputs: [
                'botania:pixie_dust',
                Item.of('naturesaura:sky_sword', '{Damage:0}').weakNBT(),
                'botania:pixie_dust',
                'atum:montu_godshard',
                '#botania:runes/muspelheim',
                'botania:pixie_dust',
                'naturesaura:token_rage',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/attack',
            id: 'pedestals:upgrades/attack'
        },
        {
            inputs: [
                'botania:pixie_dust',
                Item.of('botania:crystal_bow', '{Damage:0}').weakNBT(),
                'botania:pixie_dust',
                'atum:montu_godshard',
                '#botania:runes/muspelheim',
                'botania:pixie_dust',
                'naturesaura:token_rage',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/turret',
            id: 'pedestals:upgrades/turret'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'immersiveengineering:sawblade',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/earth',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/sawmill',
            id: 'pedestals:upgrades/sawmill'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited',
                'immersiveengineering:coil_lv',
                'immersiveengineering:coil_lv',
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/sawmill',
            sourceCost: 2000,
            output: 'pedestals:coin/rfsawmill',
            id: 'pedestals:upgrades/rfsawmill'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_fell',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/air',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/chopper',
            id: 'pedestals:upgrades/chopper'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_touch',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/earth',
                'botania:pixie_dust',
                'ars_nouveau:glyph_break',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/breaker',
            id: 'pedestals:upgrades/breaker'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_freeze',
                'botania:pixie_dust',
                '#botania:runes/fire',
                '#botania:runes/water',
                'botania:pixie_dust',
                'botania:ender_eye_block',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/cobble',
            id: 'pedestals:upgrades/cobblegen'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'minecraft:piston',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/sloth',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/compactor2',
            id: 'pedestals:upgrades/compactor2'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_craft',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/sloth',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/crafter1',
            id: 'pedestals:upgrades/crafter1'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_touch',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/earth',
                'botania:pixie_dust',
                'ars_nouveau:glyph_place_block',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/placer',
            id: 'pedestals:upgrades/placer'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_smelt',
                'botania:pixie_dust',
                'naturesaura:token_anger',
                '#botania:runes/summer',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/smelter',
            id: 'pedestals:upgrades/smelter'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited',
                'immersiveengineering:coil_lv',
                'immersiveengineering:coil_lv',
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/smelter',
            sourceCost: 2000,
            output: 'pedestals:coin/rfsmelter',
            id: 'pedestals:upgrades/rfsmelter'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'botania:corporea_spark',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/greed',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/import',
            id: 'pedestals:upgrades/import'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'botania:corporea_spark',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/greed',
                'botania:pixie_dust',
                'ars_nouveau:glyph_ender_inventory',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            // Not a typo, items are misnamed.
            output: 'pedestals:coin/enderexport',
            id: 'pedestals:upgrades/enderimport'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_harvest',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/asgard',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/harvester',
            id: 'pedestals:upgrades/harvester'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'atum:nebu_hammer',
                'botania:pixie_dust',
                'naturesaura:token_terror',
                '#botania:runes/nidavellir',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/breaker',
            sourceCost: 2000,
            output: 'pedestals:coin/quarry',
            id: 'pedestals:upgrades/quarry'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_grow',
                'botania:pixie_dust',
                'naturesaura:token_euphoria',
                '#botania:runes/spring',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/grower',
            id: 'pedestals:upgrades/grower'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:sylph_charm',
                'botania:pixie_dust',
                'naturesaura:token_euphoria',
                '#botania:runes/midgard',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/planter',
            id: 'pedestals:upgrades/planter'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'resourcefulbees:scraper',
                'botania:pixie_dust',
                'naturesaura:token_anger',
                '#botania:runes/autumn',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/harvesterhives',
            id: 'pedestals:upgrades/harvesterhives'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'quark:golden_apple_crate',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/spring',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/babymaker',
            id: 'pedestals:upgrades/babymaker'
        },
        {
            inputs: [
                'botania:pixie_dust',
                '#botania:runes/earth',
                'botania:pixie_dust',
                'create:crushing_wheel',
                'create:crushing_wheel',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/crusher',
            id: 'pedestals:upgrades/crusher'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited',
                'immersiveengineering:coil_lv',
                'immersiveengineering:coil_lv',
                'powah:capacitor_spirited',
                'thermal:rf_coil',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/crusher',
            sourceCost: 2000,
            output: 'pedestals:coin/rfcrusher',
            id: 'pedestals:upgrades/rfcrusher'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_gravity',
                'botania:pixie_dust',
                'naturesaura:token_sorrow',
                '#botania:runes/air',
                'botania:pixie_dust',
                'ars_nouveau:glyph_pickup',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/dropper',
            id: 'pedestals:upgrades/dropper'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_gust',
                'botania:pixie_dust',
                'naturesaura:token_anger',
                '#botania:runes/air',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fan',
            id: 'pedestals:upgrades/fan'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:potion_flask',
                'botania:pixie_dust',
                'naturesaura:token_anger',
                '#botania:runes/water',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/effect',
            id: 'pedestals:upgrades/effect'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'mekanism:ultimate_bin',
                'botania:pixie_dust',
                'naturesaura:token_sorrow',
                '#botania:runes/greed',
                'botania:pixie_dust',
                'ars_nouveau:glyph_amplify',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/itemtank',
            id: 'pedestals:upgrades/itemtank'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'create:brass_hand',
                'astralsorcery:resonating_gem',
                'naturesaura:token_joy',
                '#botania:runes/water',
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_aoe',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/milker',
            id: 'pedestals:upgrades/milker'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'thermal:fluid_cell',
                'astralsorcery:resonating_gem',
                'naturesaura:token_sorrow',
                '#botania:runes/greed',
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_amplify',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidtank',
            id: 'pedestals:upgrades/fluidtank'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'botania:corporea_spark',
                'astralsorcery:resonating_gem',
                '#botania:runes/air',
                '#botania:runes/water',
                'astralsorcery:resonating_gem',
                'botania:corporea_spark',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidrelay',
            id: 'pedestals:upgrades/fluidrelay'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'powah:ender_core',
                'powah:capacitor_spirited',
                '#botania:runes/air',
                '#botania:runes/fire',
                'powah:capacitor_spirited',
                'powah:ender_core',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/rfrelay',
            id: 'pedestals:upgrades/rfrelay'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'botania:corporea_spark',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/air',
                '#botania:runes/mana',
                'ars_nouveau:greater_experience_gem',
                'botania:corporea_spark',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xprelay',
            id: 'pedestals:upgrades/xprelay'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:ritual_warping',
                'botania:pixie_dust',
                'naturesaura:token_fear',
                '#botania:runes/air',
                'botania:pixie_dust',
                'ars_nouveau:glyph_exchange',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/teleporter',
            id: 'pedestals:upgrades/teleporter'
        },
        {
            inputs: [
                'quark:basalt',
                'quark:basalt',
                'quark:basalt',
                'naturesaura:token_sorrow',
                'naturesaura:token_sorrow',
                'quark:basalt',
                'quark:basalt',
                'quark:basalt'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/void',
            id: 'pedestals:upgrades/void'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_pull',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/air',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/magnet',
            id: 'pedestals:upgrades/magnet'
        },
        {
            inputs: [
                'botania:pixie_dust',
                'ars_nouveau:glyph_cut',
                'botania:pixie_dust',
                'naturesaura:token_joy',
                '#botania:runes/spring',
                'botania:pixie_dust',
                'ars_nouveau:glyph_aoe',
                'botania:pixie_dust'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/shearer',
            id: 'pedestals:upgrades/shearer'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'powah:ender_core',
                'powah:capacitor_spirited',
                '#botania:runes/air',
                '#botania:runes/fire',
                'powah:capacitor_spirited',
                'immersiveengineering:coil_hv',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/rfimport',
            id: 'pedestals:upgrades/rfimport'
        },
        {
            inputs: [
                'powah:capacitor_nitro',
                'immersiveengineering:tesla_coil',
                'powah:capacitor_nitro',
                '#botania:runes/air',
                '#botania:runes/fire',
                'powah:capacitor_nitro',
                'powah:ender_core',
                'powah:capacitor_nitro'
            ],
            reagent: 'pedestals:coin/rfexport',
            sourceCost: 2000,
            output: 'pedestals:coin/rffield',
            id: 'pedestals:upgrades/rffield'
        },
        {
            inputs: [
                'powah:capacitor_spirited',
                'powah:ender_core',
                'powah:capacitor_spirited',
                'powah:battery_spirited',
                'powah:battery_spirited',
                'powah:capacitor_spirited',
                'ars_nouveau:glyph_amplify',
                'powah:capacitor_spirited'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/rftank',
            id: 'pedestals:upgrades/rftank'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_craft',
                'astralsorcery:resonating_gem',
                'naturesaura:token_joy',
                '#botania:runes/sloth',
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_pickup',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidcrafter1',
            id: 'pedestals:upgrades/fluidcrafter1'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'botania:rosa_arcana',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_pickup',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xpgrindstone',
            id: 'pedestals:upgrades/xpgrindstone'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'create:spout',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_pickup',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xpbottler',
            id: 'pedestals:upgrades/xpbottler'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_pull',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_aoe',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xpmagnet',
            id: 'pedestals:upgrades/xpmagnet'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'pneumaticcraft:memory_stick',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_pickup',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidxpconverter',
            id: 'pedestals:upgrades/fluidxpconverter'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'pneumaticcraft:memory_stick',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_amplify',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xptank',
            id: 'pedestals:upgrades/xptank'
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:glyph_gravity',
                'ars_nouveau:greater_experience_gem',
                '#botania:runes/mana',
                '#botania:runes/vanaheim',
                'ars_nouveau:greater_experience_gem',
                'botania:corporea_spark',
                'ars_nouveau:greater_experience_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/xpdropper',
            id: 'pedestals:upgrades/xpdropper'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'botania:corporea_spark',
                'astralsorcery:resonating_gem',
                '#botania:runes/air',
                '#botania:runes/water',
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_pickup',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidimport',
            id: 'pedestals:upgrades/fluidimport'
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'botania:corporea_spark',
                'astralsorcery:resonating_gem',
                'naturesaura:token_sorrow',
                '#botania:runes/greed',
                'astralsorcery:resonating_gem',
                'ars_nouveau:glyph_aoe',
                'astralsorcery:resonating_gem'
            ],
            reagent: 'pedestals:coin/default',
            sourceCost: 2000,
            output: 'pedestals:coin/fluidpump',
            id: 'pedestals:upgrades/fluidpump'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold_brass',
                'ars_nouveau:glyph_projectile',
                '#botania:runes/air',
                '#botania:runes/air'
            ],
            reagent: Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:spell_bow',
            id: 'ars_nouveau:spell_bow'
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 100,
            output: 'ars_nouveau:novice_hood',
            id: `${id_prefix}novice_hood`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_chest', '{Damage:0}').weakNBT(),
            sourceCost: 100,
            output: 'ars_nouveau:novice_robes',
            id: `${id_prefix}novice_robes`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_legs', '{Damage:0}').weakNBT(),
            sourceCost: 100,
            output: 'ars_nouveau:novice_leggings',
            id: `${id_prefix}novice_leggings`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_boots', '{Damage:0}').weakNBT(),
            sourceCost: 100,
            output: 'ars_nouveau:novice_boots',
            id: `${id_prefix}novice_boots`
        },

        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 3000,
            output: 'ars_nouveau:apprentice_hood',
            id: `${id_prefix}apprentice_hood`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_chest', '{Damage:0}').weakNBT(),
            sourceCost: 3000,
            output: 'ars_nouveau:apprentice_robes',
            id: `${id_prefix}apprentice_robes`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_legs', '{Damage:0}').weakNBT(),
            sourceCost: 3000,
            output: 'ars_nouveau:apprentice_leggings',
            id: `${id_prefix}apprentice_leggings`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_boots', '{Damage:0}').weakNBT(),
            sourceCost: 3000,
            output: 'ars_nouveau:apprentice_boots',
            id: `${id_prefix}apprentice_boots`
        },

        {
            inputs: [
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:archmage_hood',
            id: `${id_prefix}archmage_hood`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:archmage_robes',
            id: `${id_prefix}archmage_robes`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:archmage_leggings',
            id: `${id_prefix}archmage_leggings`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_boots', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:archmage_boots',
            id: `${id_prefix}archmage_boots`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/spring',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_helmet',
            id: `${id_prefix}terrasteel_helmet`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/summer',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_chestplate',
            id: `${id_prefix}terrasteel_chestplate`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/autumn',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_leggings',
            id: `${id_prefix}terrasteel_leggings`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/winter',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_boots', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_boots',
            id: `${id_prefix}terrasteel_boots`
        },
        {
            inputs: [
                'alexsmobs:moose_antler',
                Item.of('environmental:thief_hood', '{Damage:0}').weakNBT(),
                'alexsmobs:moose_antler',
                'atum:wolf_pelt',
                'atum:wolf_pelt',
                '#forge:storage_blocks/mana',
                'naturesaura:netherite_finder',
                '#forge:storage_blocks/mana'
            ],
            reagent: 'ars_nouveau:drygmy_shard',
            sourceCost: 1000,
            output: 'ars_nouveau:drygmy_charm',
            id: `ars_nouveau:drygmy_charm`
        },
        {
            inputs: [
                'ars_nouveau:mana_bloom_crop',
                'ars_nouveau:mana_bloom',
                'ars_nouveau:mana_bloom_crop',
                'naturesaura:ancient_sapling',
                'naturesaura:ancient_sapling',
                '#forge:gems/mana',
                'botania:goddess_charm',
                '#forge:gems/mana'
            ],
            reagent: 'ars_nouveau:sylph_shards',
            sourceCost: 1000,
            output: 'ars_nouveau:sylph_charm',
            id: `ars_nouveau:sylph_charm`
        },
        {
            inputs: [
                'atum:anput_godshard',
                '#forge:ingots/arcane_gold',
                '#forge:ingots/arcane_gold',
                'naturesaura:token_fear'
            ],
            reagent: '#atum:relic_non_dirty/ring',
            sourceCost: 5000,
            output: 'naturesaura:death_ring',
            id: `${id_prefix}death_ring`
        },
        {
            inputs: [
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu'
            ],
            reagent: 'occultism:otherstone_frame',
            sourceCost: 100,
            output: 'occultism:wormhole_frame',
            id: 'occultism:crafting/wormhole_frame'
        },
        {
            inputs: [
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust'
            ],
            reagent: '#forge:gems/mana',
            sourceCost: 500,
            output: Item.of('2x occultism:otherstone_tablet'),
            id: 'occultism:crafting/otherstone_tablet'
        },
        {
            inputs: [
                '#forge:plates/electrum',
                '#forge:gems/mana_diamond',
                '#forge:plates/electrum',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                '#forge:plates/electrum',
                '#forge:gems/mana_diamond',
                '#forge:plates/electrum'
            ],
            reagent: 'betterendforge:eternal_crystal',
            sourceCost: 2000,
            output: 'botania:mana_pylon',
            id: `${id_prefix}mana_pylon`
        },
        {
            inputs: [
                'botania:glimmering_livingwood',
                'powah:crystal_spirited',
                'botania:glimmering_livingwood',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'botania:glimmering_livingwood',
                'powah:crystal_spirited',
                'botania:glimmering_livingwood'
            ],
            reagent: 'botania:mana_pylon',
            sourceCost: 4000,
            output: 'botania:natura_pylon',
            id: `${id_prefix}natura_pylon`
        },
        {
            inputs: [
                '#forge:ingots/elementium',
                'powah:crystal_nitro',
                '#forge:ingots/elementium',
                'botania:pixie_dust',
                'botania:pixie_dust',
                '#forge:ingots/elementium',
                'powah:crystal_nitro',
                '#forge:ingots/elementium'
            ],
            reagent: 'botania:natura_pylon',
            sourceCost: 8000,
            output: 'botania:gaia_pylon',
            id: `${id_prefix}gaia_pylon`
        },
        {
            inputs: [
                '#chipped:crying_obsidian',
                'atum:ra_godshard',
                '#chipped:crying_obsidian',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#chipped:crying_obsidian',
                'atum:ra_godshard',
                '#chipped:crying_obsidian'
            ],
            reagent: 'botania:gaia_pylon',
            sourceCost: 10000,
            output: 'mythicbotany:alfsteel_pylon',
            id: `${id_prefix}alfsteel_pylon`
        },
        {
            inputs: [
                'botania:mana_tablet',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                '#forge:gems/mana_diamond'
            ],
            reagent: 'ars_nouveau:ring_of_greater_discount',
            sourceCost: 500,
            output: 'botania:mana_ring',
            id: `${id_prefix}mana_ring`
        },
        {
            reagent: '#forge:ingots/terrasteel',
            output: 'botania:gaia_ingot',
            inputs: [
                'botania:life_essence',
                'atum:seth_godshard',
                'botania:life_essence',
                'atum:seth_godshard',
                'atum:seth_godshard',
                'botania:life_essence',
                'atum:seth_godshard',
                'botania:life_essence'
            ],
            sourceCost: 9000,
            id: `${id_prefix}gaia_ingot`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:mining_ring',
            inputs: [
                '#botania:runes/earth',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'bloodmagic:reagentfastminer'
            ],
            sourceCost: 500,
            id: `${id_prefix}mining_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:dodge_ring',
            inputs: [
                '#botania:runes/air',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'alexsmobs:roadrunner_feather'
            ],
            sourceCost: 500,
            id: `${id_prefix}dodge_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:swap_ring',
            inputs: ['ars_nouveau:magic_clay', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
            sourceCost: 500,
            id: `${id_prefix}swap_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:water_ring',
            inputs: [
                '#botania:runes/water',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'minecraft:heart_of_the_sea'
            ],
            sourceCost: 500,
            id: `${id_prefix}water_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:magnet_ring',
            inputs: ['botania:lens_magnet', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
            sourceCost: 500,
            id: `${id_prefix}magnet_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:aura_ring',
            inputs: [
                '#botania:runes/mana',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'naturesaura:aura_cache'
            ],
            sourceCost: 500,
            id: `${id_prefix}aura_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'botania:pixie_ring',
            inputs: [
                'botania:pixie_dust',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'naturesaura:calling_spirit'
            ],
            sourceCost: 500,
            id: `${id_prefix}pixie_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'botania:reach_ring',
            inputs: [
                '#botania:runes/pride',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                '#forge:ingots/sky'
            ],
            sourceCost: 500,
            id: `${id_prefix}reach_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'mythicbotany:fire_ring',
            inputs: [
                '#botania:runes/muspelheim',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'ars_nouveau:glyph_shield'
            ],
            sourceCost: 500,
            id: `${id_prefix}fire_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'mythicbotany:ice_ring',
            inputs: [
                '#botania:runes/niflheim',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'ars_nouveau:glyph_shield'
            ],
            sourceCost: 500,
            id: `${id_prefix}ice_ring`
        },
        {
            reagent: 'atum:atem_godshard',
            output: 'betterendforge:eternal_crystal',
            inputs: [
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/aurora',
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/ender'
            ],
            sourceCost: 5000,
            id: 'betterendforge:eternal_crystal'
        },
        {
            reagent: 'betterendforge:hydralux_petal',
            output: 'betterendforge:enchanted_petal',
            inputs: [
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal'
            ],
            sourceCost: 500,
            id: 'betterendforge:enchanted_petal'
        },

        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_helmet',
            id: 'betterendforge:crystalite_helmet'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_chestplate',
            id: 'betterendforge:crystalite_chestplate'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_leggings',
            id: 'betterendforge:crystalite_leggings'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_boots', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_boots',
            id: 'betterendforge:crystalite_boots'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_split'],
            sourceCost: 100,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:split_arrow'),
            id: 'ars_nouveau:split_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify'],
            sourceCost: 100,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:amplify_arrow'),
            id: 'ars_nouveau:amplify_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce'],
            sourceCost: 100,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:pierce_arrow'),
            id: 'ars_nouveau:pierce_arrow'
        },
        {
            inputs: [
                'eidolon:soul_shard',
                'occultism:spirit_attuned_gem',
                'eidolon:soul_shard',
                '#forge:ingots/silicon_bronze',
                '#forge:ingots/silicon_bronze',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone'
            ],
            sourceCost: 500,
            reagent: '#forge:storage_blocks/mana',
            output: 'ars_nouveau:summoning_crystal',
            id: 'ars_nouveau:summoning_crystal'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold'
            ],
            sourceCost: 1000,
            reagent: 'ars_nouveau:carbuncle_shards',
            output: 'ars_nouveau:carbuncle_charm',
            id: 'ars_nouveau:carbuncle_charm'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze'
            ],
            sourceCost: 1000,
            reagent: 'kubejs:scented_stick',
            output: 'ars_nouveau:dominion_wand',
            id: 'ars_nouveau:dominion_wand'
        },
        {
            inputs: [
                'botania:quartz_lavender',
                '#forge:gems/fluorite',
                'botania:quartz_lavender',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'botania:quartz_lavender',
                '#forge:gems/fluorite',
                'botania:quartz_lavender'
            ],
            sourceCost: 1000,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:arcane_relay_splitter',
            id: 'ars_nouveau:arcane_relay_splitter'
        },
        {
            inputs: [
                'botania:quartz_lavender',
                '#forge:gems/apatite',
                'botania:quartz_lavender',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'botania:quartz_lavender',
                '#forge:gems/apatite',
                'botania:quartz_lavender'
            ],
            sourceCost: 1000,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:relay_deposit',
            id: 'ars_nouveau:relay_deposit'
        },
        {
            inputs: [
                '#forge:gems/prismarine',
                '#forge:gems/mana',
                '#forge:gems/prismarine',
                '#forge:ingots/gold',
                '#forge:ingots/gold',
                '#forge:gems/prismarine',
                '#forge:gems/mana',
                '#forge:gems/prismarine'
            ],
            sourceCost: 1000,
            reagent: 'ars_nouveau:mana_jar',
            output: 'ars_nouveau:arcane_relay',
            id: 'ars_nouveau:arcane_relay'
        },
        {
            inputs: [
                'waystones:warp_dust',
                '#forge:gems/ender',
                'waystones:warp_dust',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'waystones:warp_dust',
                '#forge:gems/ender',
                'waystones:warp_dust'
            ],
            sourceCost: 5000,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:relay_warp',
            id: 'ars_nouveau:relay_warp'
        },
        {
            inputs: [
                'eidolon:soul_shard',
                Item.of('minecraft:potion', '{Potion:"apotheosis:knowledge"}'),
                'eidolon:soul_shard',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                'ars_nouveau:novice_spell_book',
                '#forge:ingots/osmium'
            ],
            sourceCost: 5000,
            reagent: '#forge:eggs',
            output: 'ars_nouveau:whelp_charm',
            id: 'ars_nouveau:whelp_charm'
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'create:polished_rose_quartz',
                '#forge:ingots/gold_brass',
                'ars_nouveau:spell_parchment',
                'ars_nouveau:glyph_redstone_signal',
                '#forge:ingots/gold_brass',
                'create:polished_rose_quartz',
                '#forge:ingots/gold_brass'
            ],
            sourceCost: 500,
            reagent: 'minecraft:dispenser',
            output: 'ars_nouveau:spell_turret',
            id: 'ars_nouveau:spell_turret'
        },
        {
            inputs: [
                '#forge:nuggets/tinkers_bronze',
                'minecraft:clock',
                '#forge:nuggets/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:nuggets/tinkers_bronze',
                'create:polished_rose_quartz',
                '#forge:nuggets/tinkers_bronze'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:basic_spell_turret',
            output: 'ars_nouveau:timer_spell_turret',
            id: 'ars_nouveau:timer_spell_turret'
        },
        {
            inputs: [
                '#forge:inlays/arcane_gold',
                '#forge:storage_blocks/mana',
                '#forge:inlays/arcane_gold',
                '#forge:storage_blocks/tinkers_bronze',
                '#forge:storage_blocks/tinkers_bronze',
                '#forge:inlays/arcane_gold',
                '#forge:storage_blocks/mana',
                '#forge:inlays/arcane_gold'
            ],
            sourceCost: 5000,
            reagent: 'mekanismtools:osmium_shield',
            output: Item.of('ars_nouveau:enchanters_shield', '{Damage:0}').weakNBT(),
            id: 'ars_nouveau:enchanters_shield'
        },
        {
            inputs: [
                'ars_nouveau:glyph_self',
                'atum:crystal_glass',
                'ars_nouveau:glyph_self',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:gems/mana',
                'ars_nouveau:purple_archwood_log',
                '#forge:gems/mana'
            ],
            sourceCost: 5000,
            reagent: '#forge:plates/silver',
            output: 'ars_nouveau:enchanters_mirror',
            id: 'ars_nouveau:enchanters_mirror'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_split',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            sourceCost: 75,
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:split_arrow'),
            id: `${id_prefix}split_arrow`
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_amplify',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            sourceCost: 75,
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:amplify_arrow'),
            id: `${id_prefix}amplify_arrow`
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_pierce',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            sourceCost: 75,
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:pierce_arrow'),
            id: `${id_prefix}pierce_arrow`
        },
        {
            inputs: [
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_tribute',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_wing',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_horn',
                '#forge:ingots/tinkers_bronze'
            ],
            sourceCost: 10000,
            reagent: 'ars_nouveau:summoning_crystal',
            output: 'ars_nouveau:summon_focus',
            id: 'ars_nouveau:summon_focus'
        },
        {
            inputs: [
                '#forge:nuggets/arcane_gold',
                'ars_nouveau:glyph_craft',
                '#forge:nuggets/arcane_gold',
                'architects_palette:twisted_sapling',
                'eidolon:wooden_brewing_stand',
                '#forge:nuggets/arcane_gold',
                '#forge:coins/electrum',
                '#forge:nuggets/arcane_gold'
            ],
            sourceCost: 100,
            reagent: 'ars_nouveau:wixie_shards',
            output: 'ars_nouveau:wixie_charm',
            id: 'ars_nouveau:wixie_charm'
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                '#forge:gems/mana',
                'ars_nouveau:mana_fiber',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:mana_fiber',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:mana_fiber'
            ],
            sourceCost: 200,
            reagent: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
            output: 'ars_nouveau:potion_flask',
            id: 'ars_nouveau:potion_flask'
        },

        {
            inputs: [
                'ars_nouveau:glyph_extend_time',
                '#forge:gems/mana',
                'ars_nouveau:glyph_extend_time',
                '#forge:ingots/arcane_gold',
                '#forge:ingots/arcane_gold',
                'ars_nouveau:glyph_extend_time',
                '#forge:gems/mana',
                'ars_nouveau:glyph_extend_time'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:potion_flask',
            output: 'ars_nouveau:potion_flask_extend_time',
            id: 'ars_nouveau:potion_flask_extend_time'
        },
        {
            inputs: [
                'ars_nouveau:glyph_amplify',
                '#forge:gems/mana',
                'ars_nouveau:glyph_amplify',
                '#forge:ingots/arcane_gold',
                '#forge:ingots/arcane_gold',
                'ars_nouveau:glyph_amplify',
                '#forge:gems/mana',
                'ars_nouveau:glyph_amplify'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:potion_flask',
            output: 'ars_nouveau:potion_flask_amplify',
            id: 'ars_nouveau:potion_flask_amplify'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:carbuncle_charm',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                'ars_nouveau:wilden_tribute',
                '#forge:storage_blocks/gold'
            ],
            sourceCost: 10000,
            reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT(),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:carbee_bee' }),
            id: `${id_prefix}carbee_jar`
        },
        {
            inputs: ['#forge:ingots/gold', '#forge:ingots/gold', '#forge:dusts/redstone', '#forge:dusts/redstone'],
            sourceCost: 500,
            reagent: 'eidolon:soul_shard',
            output: Item.of('2x eidolon:arcane_gold_ingot'),
            id: `${id_prefix}carbee_jar`
        },
        {
            inputs: [
                'bloodmagic:blankslate',
                'eidolon:ender_calx',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'eidolon:ender_calx',
                'bloodmagic:blankslate'
            ],
            sourceCost: 1000,
            reagent: 'botania:livingwood',
            output: Item.of('2x bloodmagic:blankrune'),
            id: `${id_prefix}blood_rune_blank`
        },

        /// Patchouli Removals
        {
            inputs: ['kubejs:altered_recipe_indicator'],
            reagent: 'kubejs:altered_recipe_indicator',
            output: 'ars_nouveau:void_jar',
            id: 'ars_nouveau:jar_of_light'
        },
        {
            inputs: ['kubejs:altered_recipe_indicator'],
            reagent: 'kubejs:altered_recipe_indicator',
            output: 'ars_nouveau:void_jar',
            id: 'ars_nouveau:void_jar'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
