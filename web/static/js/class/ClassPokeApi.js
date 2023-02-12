export default class ClassPokeApi {
    constructor(PokemonLimit) {
        this.url = 'https://pokeapi.co/api/v2/';
        this.PokemonLimit = PokemonLimit;
        this.header = new Headers();
        this.header.append('Content-Type', 'application/json');
    }
    ApiGetAbility(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/ability/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetBerry(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/berry/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetBerryFirmness(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/berry-firmness/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetBerryFlavor(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/berry-flavor/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetCharacteristic(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/characteristic/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetContestEffect(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/contest-effect/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetContestType(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/contest-type/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEggGroup(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/egg-group/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEncounterCondition(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/encounter-condition/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEncounterConditionValue(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/encounter-condition-value/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEncounterMethod(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/encounter-method/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEvolutionChain(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/evolution-chain/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetEvolutionTrigger(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/evolution-trigger/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetGender(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/gender/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetGeneration(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/generation/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetGrowthRate(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/growth-rate/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetItem(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/item/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetItemAttribute(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/item-attribute/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetItemCategory(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/item-category/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetItemFlingEffect(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/item-fling-effect/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetItemPocket(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/item-pocket/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetLanguage(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/language/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetLocation(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/location/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetLocationArea(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/location-area/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMachine(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/machine/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMove(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveAilment(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-ailment/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveBattleStyle(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-battle-style/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveCategory(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-category/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveDamageClass(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-damage-class/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveLearnMethod(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-learn-method/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetMoveTarget(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/move-target/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetNature(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/nature/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPalParkArea(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pal-park-area/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokeathlonStat(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokeathlon-stat/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokedex(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokedex/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemon(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemonColor(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon-color/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemonForm(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon-form/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemonHabitat(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon-habitat/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemonShape(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon-shape/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetPokemonSpecies(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/pokemon-species/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetRegion(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/region/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetStat(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/stat/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetSuperContestEffect(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/super-contest-effect/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetType(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/type/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetVersion(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/version/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
    ApiGetVersionGroup(value) {
        return new Promise((resolve, reject) => {
            let url = `https://pokeapi.co/api/v2/version-group/${value}`;
            if (typeof (value) == 'string' && value.indexOf(this.url) != -1) {
                url = value;
            }
            fetch(url, {
                method: 'GET',
                headers: this.header
            })
                .then((response) => { return response.json(); })
                .then((json) => { resolve(json); })
                .catch((err) => { reject(err); });
        });
    }
}
