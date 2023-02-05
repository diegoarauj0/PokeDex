//Basic

export interface APIResource {
    url:string
}

export interface Description {
    description:string,
    language:NamedAPIResource
}

export interface Effect {
    effect:string,
    language:NamedAPIResource
}

export interface Encounter {
    min_level:number,
    max_level:number,
    condition_values:Array<NamedAPIResource>,
    chance:number,
    method:NamedAPIResource
}

export interface FlavorText {
    flavor_text:string,
    language:NamedAPIResource,
    version:NamedAPIResource
}

export interface GenerationGameIndex {
    game_index:number,
    generation:NamedAPIResource
}

export interface MachineVersionDetail {
    machine:APIResource,
    version_group:NamedAPIResource
}

export interface Name {
    name:string,
    language:NamedAPIResource
}

export interface NamedAPIResource {
    name:string,
    url:string
}

export interface VerboseEffect {
    effect:string,
    short_effect:string,
    language:NamedAPIResource
}

export interface VersionEncounterDetail {
    version:NamedAPIResource,
    max_chance:number,
    encounter_details:Array<Encounter>
}

export interface VersionGameIndex {
    game_index:number,
    version:NamedAPIResource
}

export interface VersionGroupFlavorText {
    text:string,
    language:NamedAPIResource,
    version_group:NamedAPIResource
}
//Basic

//Berries
export interface BerryFlavorMap {
    potency:number,
    flavor:NamedAPIResource
}

export interface FlavorBerryMap {
    potency:number,
    berry:NamedAPIResource
}
//Berries
//Contests
export interface ContestName {
    name:string,
    color:string,
    language:NamedAPIResource
}
//Contests
//Encounters

//Encounters
//Evolution
export interface ChainLink {
    is_baby:boolean,
    species:NamedAPIResource,
    evolution_details:Array<EvolutionDetail>,
    evolves_to:Array<ChainLink>
}

export interface EvolutionDetail {
    item:NamedAPIResource,
    trigger:NamedAPIResource,
    gender:number,
    held_item:NamedAPIResource,
    known_move:NamedAPIResource,
    known_move_type:NamedAPIResource,
    location:NamedAPIResource,
    min_level:number,
    min_happiness:number,
    min_beauty:number,
    min_affection:number,
    needs_overworld_rain:boolean,
    party_species:NamedAPIResource,
    party_type:NamedAPIResource,
    relative_physical_stats:number,
    time_of_day:string,
    trade_species:NamedAPIResource,
    turn_upside_down:boolean
}
//Evolution
//Games
export interface PokemonEntry {
    entry_number:number,
    pokemon_species:NamedAPIResource
}
//Games
//Items
export interface ItemSprites {
    default:string
}

export interface ItemHolderPokemon {
    pokemon:NamedAPIResource,
    version_details:Array<ItemHolderPokemonVersionDetail>
}

export interface ItemHolderPokemonVersionDetail {
    rarity:number,
    version:NamedAPIResource
}
//Items
//Location
export interface EncounterMethodRate {
    version_group:NamedAPIResource,
    version_details:Array<EncounterVersionDetails>
}

export interface EncounterVersionDetails {
    rate:number,
    version:NamedAPIResource
}

export interface PokemonEncounter {
    pokemon:NamedAPIResource,
    version_details:Array<VersionEncounterDetail>
}

export interface PalParkEncounterSpecies {
    base_score:number,
    rate:number,
    pokemon_species:NamedAPIResource
}
//Location
//Move
export interface ContestComboSets {
    normal:ContestComboDetail,
    super:ContestComboDetail
}

export interface ContestComboDetail {
    use_before:Array<NamedAPIResource>,
    use_after:Array<NamedAPIResource>
}

export interface MoveFlavorText {
    flavor_text:string,
    language:NamedAPIResource,
    version_group:NamedAPIResource
}

export interface MoveMetaData {
    ailment:NamedAPIResource,
    category:NamedAPIResource,
    min_hits:number,
    max_hits:number,
    min_turns:number,
    max_turns:number,
    drain:number,
    healing:number,
    crit_rate:number,
    ailment_chance:number,
    flinch_chance:number,
    stat_chance:number
}

export interface MoveStatChange {
    change:number,
    stat:NamedAPIResource
}

export interface PastMoveStatValues {
    accuracy:number,
    effect_chance:number,
    power:number,
    pp:number,
    effect_entries:Array<VerboseEffect>,
    type:NamedAPIResource,
    version_group:NamedAPIResource
}
//Move
//Pokemon
export interface AbilityEffectChange {
    effect_entries:Array<Effect>,
    version_group:NamedAPIResource
}

export interface AbilityFlavorText {
    flavor_text:string,
    language:NamedAPIResource,
    version_group:NamedAPIResource
}

export interface AbilityPokemon {
    is_hidden:boolean,
    slot:number,
    pokemon:NamedAPIResource
}

export interface PokemonSpeciesGender {
    rate:number,
    pokemon_species:NamedAPIResource
}

export interface GrowthRateExperienceLevel {
    level:number,
    experience:number
}

export interface NatureStatChange {
    max_change:number,
    pokeathlon_stat:NamedAPIResource
}

export interface MoveBattleStylePreference {
    low_hp_preference:number,
    high_hp_preference:number,
    move_battle_style:NamedAPIResource
}

export interface NaturePokeathlonStatAffectSets {
    increase:Array<NaturePokeathlonStatAffect>
    decrease:Array<NaturePokeathlonStatAffect>
}

export interface NaturePokeathlonStatAffect {
    max_change:number,
    nature:NamedAPIResource
}

export interface PokemonAbility {
    is_hidden:boolean,
    slot:number,
    ability:NamedAPIResource,
}

export interface PokemonType {
    slot:number,
    type:NamedAPIResource
}

export interface PokemonFormType {
    slot:number,
    type:NamedAPIResource
}

export interface PokemonTypePast {
    generation:NamedAPIResource,
    types:Array<PokemonType>
}

export interface PokemonHeldItem {
    item:NamedAPIResource,
    version_details:Array<PokemonHeldItemVersion>
}

export interface PokemonHeldItemVersion {
    version:NamedAPIResource,
    rarity:number
}

export interface PokemonMove {
    move:NamedAPIResource,
    version_group_details:Array<PokemonMoveVersion>
}

export interface PokemonMoveVersion {
    move_learn_method:NamedAPIResource,
    version_group:NamedAPIResource,
    level_learned_at:number
}

export interface PokemonStat {
    stat:NamedAPIResource,
    effort:number,
    base_stat:number
}

export interface PokemonSprites {
    front_default:string,
    front_shiny:string,
    front_female:string,
    front_shiny_female:string,
    back_default:string,
    back_shiny:string,
    back_female:string,
    back_shiny_female:string,
    other:Other
}

export interface PokemonFormSprites {
    front_default:string,
    front_shiny:string,
    back_default:string,
    back_shiny:string
}

export interface AwesomeName {
    awesome_name:string,
    language:NamedAPIResource
}

export interface Genus {
    genus:string,
    language:NamedAPIResource
}

export interface PokemonSpeciesDexEntry {
    entry_number:number,
    pokedex:NamedAPIResource
}

export interface PalParkEncounterArea {
    base_score:number,
    rate:number,
    area:NamedAPIResource
}

export interface PokemonSpeciesVariety {
    is_default:number,
    pokemon:NamedAPIResource
}

export interface MoveStatAffectSets {
    increase:Array<MoveStatAffect>,
    decrease:Array<MoveStatAffect>
}

export interface MoveStatAffect {
    change:number,
    move:NamedAPIResource
}

export interface NatureStatAffectSets {
    increase:Array<NamedAPIResource>,
    decrease:Array<NamedAPIResource>
}

export interface TypePokemon {
    slot:number,
    pokemon:NamedAPIResource
}

export interface TypeRelations {
    no_damage_to:Array<NamedAPIResource>,
    half_damage_to:Array<NamedAPIResource>,
    double_damage_to:Array<NamedAPIResource>,
    no_damage_from:Array<NamedAPIResource>,
    half_damage_from:Array<NamedAPIResource>,
    double_damage_from:Array<NamedAPIResource>
}

export interface TypeRelationsPast {
    generation:NamedAPIResource,
    damage_relations:TypeRelations
}
//Pokemon
//custom
export interface Other {
    dream_world:{
        front_default:string | null,
        front_female:string | null
    },
    home:{
        front_default:string | null,
        front_female:string | null
        front_shiny:string | null,
        front_shiny_female:string | null
    },
    'official-artwork':{
        front_default:string | null,
        front_shiny:string | null
    },
} 
//custom