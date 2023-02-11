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
        
    public ApiGetAbility(value:string | number) {
        return new Promise<Ability>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/ability/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetBerry(value:string | number) {
        return new Promise<Berry>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/berry/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/berry-firmness/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetBerryFlavor(value:string | number) {
        return new Promise<BerryFlavor>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/berry-flavor/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetCharacteristic(value:string | number) {
        return new Promise<Characteristic>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/characteristic/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetContestEffect(value:string | number) {
        return new Promise<ContestEffect>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/contest-effect/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetContestType(value:string | number) {
        return new Promise<ContestType>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/contest-type/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/egg-group/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/encounter-condition/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/encounter-condition-value/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetEncounterMethod(value:string | number) {
        return new Promise<EncounterMethod>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/encounter-method/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetEvolutionChain(value:string | number) {
        return new Promise<EvolutionChain>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/evolution-chain/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/evolution-trigger/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/gender/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetGeneration(value:string | number) {
        return new Promise<Generation>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/generation/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/growth-rate/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetItem(value:string | number) {
        return new Promise<Item>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/item/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/item-attribute/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/item-category/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/item-fling-effect/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/item-pocket/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetLanguage(value:string | number) {
        return new Promise<LocationAreaEncounter>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/language/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetLocation(value:string | number) {
        return new Promise<Location>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/location/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/location-area/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetMachine(value:string | number) {
        return new Promise<Machine>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/machine/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetMove(value:string | number) {
        return new Promise<Move>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/move/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-ailment/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-battle-style/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-category/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-damage-class/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-learn-method/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/move-target/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/nature/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pal-park-area/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokeathlon-stat/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokedex/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon-color/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon-form/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon-habitat/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon-shape/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/pokemon-species/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/region/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/stat/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }    
    public ApiGetSuperContestEffect(value:string | number) {
        return new Promise<SuperContestEffect>((resolve,reject) => {

            let url:string = `https://pokeapi.co/api/v2/super-contest-effect/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/type/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/version/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
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

            let url:string = `https://pokeapi.co/api/v2/version-group/${value}`

            if (typeof(value) == 'string' && value.indexOf(this.url) != -1) {
                url = value
            }

            fetch(url,
            {
                method:'GET',
                headers:this.header
            })
            .then((response:Response) => {return response.json()})
            .then((json) => {resolve(json)})
            .catch((err:Error) => {reject(err)})
        })
    }
}