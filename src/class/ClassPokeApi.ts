import 
{
    Berry,
    BerryFirmness,
    BerryFlavor,

    ContestEffect,
    ContestType,
    SuperContestEffect,

    EncounterMethod,
    EncounterCondition,
    EncounterConditionValue,

    EvolutionChain,
    EvolutionTrigger,

    Generation,
    Pokedex,
    Version,
    VersionGroup,

    Item,
    ItemAttribute,
    ItemCategory,
    ItemFlingEffect,
    ItemPocket,

    Location,
    LocationArea,
    PalParkArea,
    Region,

    Machine,

    Move,
    MoveAilment,
    MoveBattleStyle,
    MoveCategory,
    MoveDamageClass,
    MoveLearnMethod,
    MoveTarget,

    Ability,
    Characteristic,
    EggGroup,
    Gender,
    GrowthRate,
    Nature,
    PokeathlonStat,
    Pokemon,
    LocationAreaEncounter,
    PokemonColor,
    PokemonForm,
    PokemonHabitat,
    PokemonShape,
    PokemonSpecies,
    Stat,
    Type

}  from '../interface/GetPokeApi'

export default class ClassPokeApi {

    public PokemonLimit:number
    private header:Headers
    private url:string

    constructor(PokemonLimit:number) {
        this.url = 'https://pokeapi.co/api/v2/'
        this.PokemonLimit = PokemonLimit
        this.header = new Headers()
        this.header.append('Content-Type', 'application/json')
    }
    //Berries
    public ApiGetBerries(value:string | number) {
        return new Promise<Berry>((resolve,reject) => {
            fetch(`${this.url}berry/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetBerryFirmness(value:string | number) {
        return new Promise<BerryFirmness>((resolve,reject) => {
            fetch(`${this.url}berry-firmness/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public GetBerryFlavor(value:string | number) {
        return new Promise<BerryFlavor>((resolve,reject) => {
            fetch(`${this.url}berry-flavor/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Berries

    //Contests
    public ApiGetContestTypes(value:string | number) {
        return new Promise<ContestType>((resolve,reject) => {
            fetch(`${this.url}contest-type/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetContestEffect(id:number | string) {
        return new Promise<ContestEffect>((resolve,reject) => {
            fetch(`${this.url}contest-effect/${id}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetSuperContestEffect(id:number | string) {
        return new Promise<SuperContestEffect>((resolve,reject) => {
            fetch(`${this.url}super-contest-effect/${id}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Contests

    //Encounters
    public ApiGetEncounterMethod(value:string | number) {
        return new Promise<EncounterMethod>((resolve,reject) => {
            fetch(`${this.url}encounter-method/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetEncounterCondition(value:string | number) {
        return new Promise<EncounterCondition>((resolve,reject) => {
            fetch(`${this.url}encounter-condition/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetEncounterConditionValue(value:string | number) {
        return new Promise<EncounterConditionValue>((resolve,reject) => {
            fetch(`${this.url}encounter-condition-value/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Encounters
    //Evolution
    public ApiGetEvolutionChain(id:number | string) {
        return new Promise<EvolutionChain>((resolve,reject) => {
            fetch(`${this.url}evolution-chain/${id}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetEvolutionTrigger(value:string | number) {
        return new Promise<EvolutionTrigger>((resolve,reject) => {
            fetch(`${this.url}evolution-trigger/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Evolution
    //Games
    public ApiGetGeneration(value:string | number) {
        return new Promise<Generation>((resolve,reject) => {
            fetch(`${this.url}generation/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokedex(value:string | number) {
        return new Promise<Pokedex>((resolve,reject) => {
            fetch(`${this.url}pokedex/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetVersion(value:string | number) {
        return new Promise<Version>((resolve,reject) => {
            fetch(`${this.url}version/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetVersionGroup(value:string | number) {
        return new Promise<VersionGroup>((resolve,reject) => {
            fetch(`${this.url}version-group/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Games
    //Items
    public ApiGetItem(value:string | number) {
        return new Promise<Item>((resolve,reject) => {
            fetch(`${this.url}item/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetItemAttribute(value:string | number) {
        return new Promise<ItemAttribute>((resolve,reject) => {
            fetch(`${this.url}item-attribute/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetItemCategory(value:string | number) {
        return new Promise<ItemCategory>((resolve,reject) => {
            fetch(`${this.url}item-category/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetItemFlingEffect(value:string | number) {
        return new Promise<ItemFlingEffect>((resolve,reject) => {
            fetch(`${this.url}item-fling-effect/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetItemPocket(value:string | number) {
        return new Promise<ItemPocket>((resolve,reject) => {
            fetch(`${this.url}item-pocket/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Items
    //Location
    public ApiGetLocation(value:string | number) {
        return new Promise<Location>((resolve,reject) => {
            fetch(`${this.url}location/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetLocationArea(value:string | number) {
        return new Promise<LocationArea>((resolve,reject) => {
            fetch(`${this.url}location-area/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPalParkArea(value:string | number) {
        return new Promise<PalParkArea>((resolve,reject) => {
            fetch(`${this.url}pal-park-area/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetRegion(value:string | number) {
        return new Promise<Region>((resolve,reject) => {
            fetch(`${this.url}region/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Location
    //Machines
    public ApiGetMachine(id:number | string) {
        return new Promise<Machine>((resolve,reject) => {
            fetch(`${this.url}machine/${id}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Machines
    //Moves
    public ApiGetMove(value:string | number) {
        return new Promise<Move>((resolve,reject) => {
            fetch(`${this.url}move/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveAilment(value:string | number) {
        return new Promise<MoveAilment>((resolve,reject) => {
            fetch(`${this.url}move-ailment/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveBattleStyle(value:string | number) {
        return new Promise<MoveBattleStyle>((resolve,reject) => {
            fetch(`${this.url}move-battle-style/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveCategory(value:string | number) {
        return new Promise<MoveCategory>((resolve,reject) => {
            fetch(`${this.url}move-category/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveDamageClass(value:string | number) {
        return new Promise<MoveDamageClass>((resolve,reject) => {
            fetch(`${this.url}move-damage-class/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveLearnMethod(value:string | number) {
        return new Promise<MoveLearnMethod>((resolve,reject) => {
            fetch(`${this.url}move-learn-method/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetMoveTarget(value:string | number) {
        return new Promise<MoveTarget>((resolve,reject) => {
            fetch(`${this.url}move-target/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Moves
    //Pokemon
    public ApiGetAbility(value:string | number) {
        return new Promise<Ability>((resolve,reject) => {
            fetch(`${this.url}ability/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetCharacteristic(id:string |number) {
        return new Promise<Characteristic>((resolve,reject) => {
            fetch(`${this.url}characteristic/${id}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetEggGroup(value:string | number) {
        return new Promise<EggGroup>((resolve,reject) => {
            fetch(`${this.url}egg-group/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetGender(value:string | number) {
        return new Promise<Gender>((resolve,reject) => {
            fetch(`${this.url}gender/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetGrowthRate(value:string | number) {
        return new Promise<GrowthRate>((resolve,reject) => {
            fetch(`${this.url}growth-rate/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetNature(value:string | number) {
        return new Promise<Nature>((resolve,reject) => {
            fetch(`${this.url}nature/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokeathlonStat(value:string | number) {
        return new Promise<PokeathlonStat>((resolve,reject) => {
            fetch(`${this.url}pokeathlon-stat/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemon(value:string | number) {
        return new Promise<Pokemon>((resolve,reject) => {

            if (Number(value) > this.PokemonLimit) {reject('limite')}
            fetch(`${this.url}pokemon/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public LocationAreaEncounter(value:string | number) {
        return new Promise<LocationAreaEncounter>((resolve,reject) => {
            fetch(`${this.url}pokemon/${value}/encounters`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemonColor(value:string | number) {
        return new Promise<PokemonColor>((resolve,reject) => {
            fetch(`${this.url}pokemon-color/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemonForm(value:string | number) {
        return new Promise<PokemonForm>((resolve,reject) => {
            fetch(`${this.url}pokemon-form/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemonHabitat(value:string | number) {
        return new Promise<PokemonHabitat>((resolve,reject) => {
            fetch(`${this.url}pokemon-habitat/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemonShape(value:string | number) {
        return new Promise<PokemonShape>((resolve,reject) => {
            fetch(`${this.url}pokemon-shape/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetPokemonSpecies(value:string | number) {
        return new Promise<PokemonSpecies>((resolve,reject) => {
            fetch(`${this.url}pokemon-species/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetStat(value:string | number) {
        return new Promise<Stat>((resolve,reject) => {
            fetch(`${this.url}stat/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }

    public ApiGetType(value:string | number) {
        return new Promise<Type>((resolve,reject) => {
            fetch(`${this.url}type/${value}`,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
    //Pokemon
}