import 
{
    APIResource,
    BerryFlavorMap,
    ContestName,
    Description,
    Effect,
    Encounter,
    FlavorBerryMap,
    FlavorText,
    GenerationGameIndex,
    MachineVersionDetail,
    Name,
    NamedAPIResource,
    VerboseEffect,
    VersionEncounterDetail,
    VersionGameIndex,
    VersionGroupFlavorText,
    ChainLink,
    EvolutionDetail,
    ItemHolderPokemon,
    ItemHolderPokemonVersionDetail,
    ItemSprites,
    PokemonEntry,
    EncounterMethodRate,
    PokemonEncounter,
    PalParkEncounterSpecies,
    ContestComboSets,
    AbilityEffectChange,
    MoveFlavorText,
    MoveMetaData,
    PastMoveStatValues,
    MoveStatChange,
    AbilityFlavorText,
    AbilityPokemon,
    PokemonSpeciesGender,
    GrowthRateExperienceLevel,
    NatureStatChange,
    MoveBattleStylePreference,
    NaturePokeathlonStatAffectSets,
    PokemonAbility,
    AwesomeName,
    ContestComboDetail,
    EncounterVersionDetails,
    Genus,
    MoveStatAffect,
    MoveStatAffectSets,
    NaturePokeathlonStatAffect,
    NatureStatAffectSets,
    PalParkEncounterArea,
    PokemonFormSprites,
    PokemonFormType,
    PokemonHeldItem,
    PokemonHeldItemVersion,
    PokemonMove,
    PokemonMoveVersion,
    PokemonSpeciesDexEntry,
    PokemonSpeciesVariety,
    PokemonSprites,
    PokemonStat,
    PokemonType,
    PokemonTypePast,
    TypePokemon,
    TypeRelations,
    TypeRelationsPast
} from './TypePokeApi'

//Berries
export interface Berry {
    id:number,
    name:string,
    growth_time:number,
    max_harvest:number,
    natural_gift_power:number,
    size:number,
    smoothness:number,
    soil_dryness:number,
    firmness:NamedAPIResource,
    flavors:Array<BerryFlavorMap>,
    item:NamedAPIResource,
    natural_gift_type:NamedAPIResource
}

export interface BerryFirmness {
    id:number,
    name:string,
    berries:Array<NamedAPIResource>,
    names:Array<Name>,
}

export interface BerryFlavor {
    id:number,
    name:string,
    berries:Array<FlavorBerryMap>,
    contest_type:NamedAPIResource,
    names:Array<Name>
}
//Berries
//Contests
export interface ContestType {
    id:number,
    name:string,
    berry_flavor:NamedAPIResource,
    names:Array<ContestName>
}

export interface ContestEffect {
    id:number,
    appeal:number,
    jam:number,
    effect_entries:Array<Effect>,
    flavor_text_entries:Array<FlavorText>
}

export interface SuperContestEffect {
    id:number,
    appeal:number,
    flavor_text_entries:Array<FlavorText>,
    moves:Array<NamedAPIResource>
}
//Contests
//Encounters
export interface EncounterMethod {
    id:number,
    name:string,
    order:number,
    names:Array<Name>
}

export interface EncounterCondition {
    id:number,
    name:string,
    names:Array<Name>
    values:Array<NamedAPIResource>
}

export interface EncounterConditionValue {
    id:number,
    name:string,
    condition:NamedAPIResource,
    names:Array<Name>
}
//Encounters
//Evolution
export interface EvolutionChain {
    id:number,
    baby_trigger_item:NamedAPIResource,
    chain:ChainLink
}

export interface EvolutionTrigger {
    id:number,
    name:string,
    names:Array<Name>
    pokemon_species:Array<NamedAPIResource>
}
//Evolution
//Games
export interface Generation {
    id:number,
    name:string,
    abilities:Array<NamedAPIResource>,
    names:Array<Name>,
    main_region:NamedAPIResource,
    moves:Array<NamedAPIResource>,
    pokemon_species:Array<NamedAPIResource>,
    types:Array<NamedAPIResource>,
    version_groups:Array<NamedAPIResource>
}

export interface Pokedex {
    id:number,
    name:string,
    is_main_series:boolean,
    descriptions:Array<Description>,
    names:Array<Name>,
    pokemon_entries:Array<PokemonEntry>,
    region:NamedAPIResource,
    version_groups:Array<NamedAPIResource>
}

export interface Version {
    id:number,
    name:string,
    names:Array<Name>,
    version_groups:NamedAPIResource
}

export interface VersionGroup {
    id:number,
    name:string,
    order:number,
    generation:NamedAPIResource,
    move_learn_methods:Array<NamedAPIResource>,
    pokedexes:Array<NamedAPIResource>,
    regions:Array<NamedAPIResource>,
    versions:Array<NamedAPIResource>
}
//Games
//Items
export interface Item {
    id:number,
    name:string,
    cost:number,
    fling_power:number,
    fling_effect:NamedAPIResource,
    attributes:Array<NamedAPIResource>,
    category:NamedAPIResource,
    effect_entries:Array<VerboseEffect>,
    flavor_text_entries:Array<VersionGroupFlavorText>,
    game_indices:Array<GenerationGameIndex>,
    names:Array<Name>,
    sprites:ItemSprites,
    held_by_pokemon:Array<ItemHolderPokemon>,
    baby_trigger_for:APIResource,
    machines:Array<MachineVersionDetail>
}

export interface ItemAttribute {
    id:number,
    name:string,
    items:Array<NamedAPIResource>,
    names:Array<Name>,
    descriptions:Array<Description>
}

export interface ItemCategory {
    id:number,
    name:string,
    items:Array<NamedAPIResource>,
    names:Array<Name>,
    pocket:NamedAPIResource
}

export interface ItemFlingEffect {
    id:number,
    name:string,
    effect_entries:Array<Effect>
    items:Array<NamedAPIResource>,
}

export interface ItemPocket {
    id:number,
    name:string,
    categories:Array<NamedAPIResource>,
    names:Array<Name>
}
//Items
//Location
export interface Location {
    id:number,
    name:string,
    region:NamedAPIResource,
    names:Array<Name>,
    game_indices:Array<GenerationGameIndex>,
    areas:Array<NamedAPIResource>
}

export interface LocationArea {
    id:number,
    name:string,
    game_index:number,
    encounter_method_rates:Array<EncounterMethodRate>,
    location:NamedAPIResource,
    names:Array<Name>,
    pokemon_encounters:Array<PokemonEncounter>
}

export interface PalParkArea {
    id:number,
    name:string,
    names:Array<Name>,
    pokemon_encounters:Array<PalParkEncounterSpecies>
}

export interface Region {
    id:number,
    locations:Array<NamedAPIResource>,
    name:string,
    names:Array<Name>,
    main_generation:NamedAPIResource,
    pokedexes:Array<NamedAPIResource>,
    version_groups:Array<NamedAPIResource>
}
//Location
//Machines
export interface Machine {
    id:number,
    item:NamedAPIResource,
    move:NamedAPIResource,
    version_group:NamedAPIResource
}
//Machines
//moves
export interface Move {
    id:number,
    name:string,
    accuracy:number,
    effect_chance:number,
    pp:number,
    priority:number,
    power:number,
    contest_combos:ContestComboSets,
    contest_type:NamedAPIResource,
    contest_effect:APIResource,
    damage_class:NamedAPIResource,
    effect_entries:Array<VerboseEffect>,
    effect_changes:Array<AbilityEffectChange>,
    learned_by_pokemon:Array<NamedAPIResource>,
    flavor_text_entries:Array<MoveFlavorText>,
    generation:NamedAPIResource,
    machines:Array<MachineVersionDetail>,
    meta:MoveMetaData,
    names:Array<Name>,
    past_values:Array<PastMoveStatValues>,
    stat_changes:Array<MoveStatChange>,
    super_contest_effect:APIResource,
    target:NamedAPIResource,
    type:NamedAPIResource
}

export interface MoveAilment {
    id:number,
    name:string,
    moves:Array<NamedAPIResource>,
    names:Array<Name>
}

export interface MoveBattleStyle {
    id:number,
    name:string,
    names:Array<Name>
}

export interface MoveCategory {
    id:number,
    name:string,
    moves:Array<NamedAPIResource>,
    descriptions:Array<Description>
}

export interface MoveDamageClass {
    id:number,
    name:string,
    descriptions:Array<Description>,
    moves:Array<NamedAPIResource>,
    names:Array<Name>
}

export interface MoveLearnMethod {
    id:number,
    name:string,
    descriptions:Array<Description>,
    names:Array<Name>,
    version_groups:Array<NamedAPIResource>
}

export interface MoveTarget {
    id:number,
    name:string,
    descriptions:Array<Description>,
    moves:Array<NamedAPIResource>,
    names:Array<Name>
}
//moves
//pokemon
export interface Ability {
    id:number,
    name:string,
    is_main_series:boolean,
    generation:NamedAPIResource,
    names:Array<Name>,
    effect_entries:Array<VerboseEffect>,
    effect_changes:Array<VerboseEffect>,
    flavor_text_entries:Array<AbilityFlavorText>,
    pokemon:Array<AbilityPokemon>
}

export interface Characteristic {
    id:number,
    gene_modulo:number,
    possible_values:Array<number>
}

export interface EggGroup {
    id:number,
    name:string,
    names:Array<Name>,
    possible_values:Array<NamedAPIResource>
}

export interface Gender {
    id:number,
    name:string,
    pokemon_species_details:Array<PokemonSpeciesGender>,
    required_for_evolution:Array<NamedAPIResource>
}

export interface GrowthRate {
    id:number,
    name:string,
    formula:string,
    descriptions:Array<Description>,
    levels:Array<GrowthRateExperienceLevel>,
    pokemon_species:Array<NamedAPIResource>
}

export interface Nature {
    id:number,
    name:string,
    decreased_stat:NamedAPIResource,
    increased_stat:NamedAPIResource,
    hates_flavor:NamedAPIResource,
    likes_flavor:NamedAPIResource,
    pokeathlon_stat_changes:Array<NatureStatChange>,
    move_battle_style_preferences:Array<MoveBattleStylePreference>,
    names:Array<Name>
}

export interface PokeathlonStat {
    id:number,
    name:string,
    names:Array<Name>,
    affecting_natures:NaturePokeathlonStatAffectSets
}

export interface Pokemon {
    id:number,
    name:string,
    base_experience:number,
    height:number,
    is_default:boolean,
    order:number,
    weight:number,
    abilities:Array<PokemonAbility>,
    forms:Array<NamedAPIResource>,
    game_indices:Array<VersionGameIndex>,
    held_items:Array<PokemonHeldItem>,
    location_area_encounters:string,
    moves:Array<PokemonMove>,
    past_types:Array<PokemonTypePast>,
    sprites:PokemonSprites,
    species:NamedAPIResource,
    stats:Array<PokemonStat>,
    types:Array<PokemonType>
}

export interface LocationAreaEncounter {
    location_area:NamedAPIResource,
    version_details:Array<VersionEncounterDetail>
}

export interface PokemonColor {
    id:number,
    name:string,
    names:Array<Name>,
    pokemon_species:Array<NamedAPIResource>
}

export interface PokemonForm {
    id:number,
    name:string,
    order:number,
    form_order:number,
    is_default:boolean,
    is_battle_only:boolean,
    is_mega:boolean,
    form_name:string,
    pokemon:NamedAPIResource,
    types:Array<PokemonFormType>,
    sprites:PokemonFormSprites,
    version_group:NamedAPIResource,
    names:Array<Name>,
    form_names:Array<Name>
}

export interface PokemonHabitat {
    id:number,
    name:string,
    names:Array<Name>,
    pokemon_species:Array<NamedAPIResource>
}

export interface PokemonShape {
    id:number,
    name:string,
    awesome_names:Array<AwesomeName>,
    names:Array<Name>,
    pokemon_species:Array<NamedAPIResource>
}

export interface PokemonSpecies {
    id:number,
    name:string,
    order:number,
    gender_rate:number,
    capture_rate:number,
    base_happiness:number,
    is_baby:boolean
    is_legendary:boolean,
    is_mythical:boolean,
    hatch_counter:number,
    has_gender_differences:boolean,
    forms_switchable:boolean,
    growth_rate:NamedAPIResource,
    pokedex_numbers:Array<PokemonSpeciesDexEntry>,
    egg_groups:Array<NamedAPIResource>,
    color:NamedAPIResource,
    shape:NamedAPIResource,
    evolves_from_species:NamedAPIResource,
    evolution_chain:NamedAPIResource,
    habitat:NamedAPIResource,
    generation:NamedAPIResource,
    names:Array<Name>,
    pal_park_encounters:Array<PalParkEncounterArea>,
    flavor_text_entries:Array<FlavorText>,
    form_descriptions:Array<Description>,
    genera:Array<Genus>,
    varieties:Array<PokemonSpeciesVariety>
}

export interface Stat {
    id:number,
    name:string,
    game_index:number,
    is_battle_only:boolean,
    affecting_moves:MoveStatAffectSets,
    affecting_natures:NatureStatAffectSets,
    characteristics:Array<APIResource>,
    move_damage_class:NamedAPIResource,
    names:Array<Name>
}

export interface Type {
    id:number,
    name:string,
    damage_relations:TypeRelations,
    past_damage_relations:Array<TypeRelationsPast>,
    game_indices:Array<GenerationGameIndex>,
    generation:NamedAPIResource,
    move_damage_class:NamedAPIResource,
    names:Array<Name>,
    pokemon:Array<TypePokemon>,
    moves:Array<NamedAPIResource>
}
//pokemon