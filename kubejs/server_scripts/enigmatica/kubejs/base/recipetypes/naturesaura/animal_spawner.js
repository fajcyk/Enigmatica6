onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/naturesaura/animalspawner/';
    recipes = [
        {
            inputs: ['naturesaura:birth_spirit', 'emendatusenigmatica:arcane_gem', 'naturesaura:gold_leaf'],
            entity: 'ars_nouveau:carbuncle',
            aura: 100000,
            time: 100,
            id: `${id_prefix}carbuncle`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'emendatusenigmatica:arcane_gem', 'naturesaura:ancient_sapling'],
            entity: 'ars_nouveau:sylph',
            aura: 100000,
            time: 100,
            id: `${id_prefix}sylph`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'emendatusenigmatica:arcane_gem', 'naturesaura:token_joy'],
            entity: 'ars_nouveau:drygmy',
            aura: 100000,
            time: 100,
            id: `${id_prefix}drygmy`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:cod', 'minecraft:iron_bars'],
            entity: 'quark:crab',
            aura: 30000,
            time: 40,
            id: `${id_prefix}crab`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:spider_eye', 'minecraft:lily_pad'],
            entity: 'quark:frog',
            aura: 30000,
            time: 40,
            id: `${id_prefix}frog`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:leather', 'minecraft:coal'],
            entity: 'quark:foxhound',
            aura: 150000,
            time: 120,
            id: `${id_prefix}foxhound`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'industrialforegoing:fertilizer'],
            entity: 'alexsmobs:cockroach',
            aura: 30000,
            time: 40,
            id: `${id_prefix}cockroach`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'minecraft:brown_mushroom'],
            entity: 'alexsmobs:cockroach',
            aura: 150000,
            time: 120,
            id: `${id_prefix}cockroach_2`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:iron_bee',
                    BeeType: 'iron',
                    Color: '#ffcc99'
                }).weakNBT(),
                'resourcefulbees:iron_honeycomb',
                'naturesaura:infused_iron_block'
            ],
            entity: 'resourcefulbees:infused_bee',
            aura: 400000,
            time: 320,
            id: `${id_prefix}infused_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:gold_bee',
                    BeeType: 'gold',
                    Color: '#ffdc00'
                }).weakNBT(),
                'resourcefulbees:gold_honeycomb',
                'naturesaura:tainted_gold_block'
            ],
            entity: 'resourcefulbees:tainted_bee',
            aura: 500000,
            time: 400,
            id: `${id_prefix}tainted_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:gold_bee',
                    BeeType: 'gold',
                    Color: '#ffdc00'
                }).weakNBT(),
                'resourcefulbees:tainted_honeycomb',
                'naturesaura:sky_ingot'
            ],
            entity: 'resourcefulbees:sky_bee',
            aura: 600000,
            time: 480,
            id: `${id_prefix}sky_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'farmersdelight:cabbage_leaf',
                'simplefarming:lettuce',
                'minecraft:carrot'
            ],
            entity: 'minecraft:rabbit',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/rabbit'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'astralsorcery:nocturnal_powder'],
            entity: 'minecraft:phantom',
            aura: 200000,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:feather', 'minecraft:jungle_sapling'],
            entity: 'minecraft:parrot',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/parrot'
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'undergarden:gloom_o_lantern',
                'undergarden:inky_stew',
                'eidolon:fungus_sprouts'
            ],
            entity: 'alexsmobs:mungus',
            aura: 150000,
            time: 120,
            id: `${id_prefix}mungus`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#aquaculture:turtle', 'minecraft:seagrass'],
            entity: 'minecraft:turtle',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/turtle'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:brown_wool', 'minecraft:wheat'],
            entity: 'environmental:yak',
            aura: 50000,
            time: 60,
            id: `${id_prefix}yak`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
