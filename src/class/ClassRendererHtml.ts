import ClassPokeApi from './ClassPokeApi'

import {
    ChainLink,
    EvolutionDetail,
    NamedAPIResource,
} from '../interface/TypePokeApi'

export default class ClassRendererHtml {

    private DarkMode:boolean = false
    private ElementList: Array<HTMLElement> = []
    public Main:HTMLElement = document.createElement('main')

    constructor() {
        this.ElementList.push(this.Main)
        this.Main.classList.add('main')
        this.AddMode(this.Main)
    }

    public InvertMode(): void {
        this.DarkMode = !this.DarkMode
        this.ElementList.map((Element) => {this.AddMode(Element)})
    }

    private AddMode(Element:HTMLElement): void {
        Element.classList.remove('mode_dark')
        Element.classList.remove('mode_light')
        Element.classList.add(this.DarkMode?'mode_dark':'mode_light')
        return
    }

    public CreateElement(Tag:string,Save:boolean): HTMLElement {

        let Element = document.createElement(Tag)
        if (Save) {
            this.AddMode(Element)
            this.ElementList.push(Element)
        }
        return Element
    }

    public CreateElementHeader(Title:string): HTMLElement {

        let ElementHeader = this.CreateElement('header',true)
        let ElementH1 = this.CreateElement('h1',false)

        ElementH1.innerHTML = Title
        ElementHeader.appendChild(ElementH1)
        ElementHeader.classList.add('header')

        return ElementHeader
    }

    public CreateElementNav(Option:Array<{Text:string, Events:Array<{Name:string, Func:EventListenerOrEventListenerObject}>}>): HTMLElement {

        let ElementNav = this.CreateElement('nav',true)
        let ElementUl = this.CreateElement('ul',false)

        Option.map((Option) => {
            
            let ElementLi = this.CreateElement('li',false)
            let ElementButton = this.CreateElement('button',false)

            ElementButton.innerHTML = Option.Text
            ElementLi.appendChild(ElementButton)

            Option.Events.map((Event) => {
                ElementButton.addEventListener(Event.Name, Event.Func)
            })

            ElementUl.appendChild(ElementLi)
        })

        ElementNav.classList.add('nav')
        ElementNav.appendChild(ElementUl)

        return ElementNav
    }

    private CreateElementImageErr(): HTMLElement {


        let ElementImg = this.CreateElement('img',false)

        ElementImg.classList.add('err')

        ElementImg.setAttribute('alt', 'err 404')
        ElementImg.setAttribute('src', './static/img/err404.png')

        ElementImg.innerHTML += '<!--https://pixabay.com/pt/users/2funki4wheelz-2863996/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1513925-->'

        return ElementImg
    }

    public CreateLoading(): HTMLElement {

        let ElementDiv = this.CreateElement('div',true)
        let ElementImg = this.CreateElement('img',false)
        let ElementP = this.CreateElement('p',false)

        ElementDiv.classList.add('loading')

        ElementImg.setAttribute('alt', 'Carregando')
        ElementImg.setAttribute('src', './static/img/loading.gif')
        ElementP.innerHTML = 'Carregando'

        ElementDiv.appendChild(ElementImg)
        ElementDiv.appendChild(ElementP)

        return ElementDiv
    }

    public CreateElementPokemonName(value:string | number,PokeApi:ClassPokeApi): Promise<HTMLElement> {
        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ElementP = this.CreateElement('p', false)
            ElementDiv.classList.add('pokemon_name')

            try 
            {
                let Pokemon = await PokeApi.ApiGetPokemon(value)
        
                ElementP.innerHTML = `${Pokemon.name}#${Pokemon.id}`
                ElementDiv.appendChild(ElementP)
        
            }
            catch(err) {
        
                ElementP.innerHTML = 'Nome não encontrado'
                ElementDiv.appendChild(ElementP)
            }

            resolve(ElementDiv)
        })
    }

    public CreateElementPokemonType(value:string | number,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_types')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(value)

                let ElementUrl:string = './static/img/types/'
        
                Pokemon.types.map((Types) => {
                    ElementDiv.innerHTML += 
                    `
                        <div>
                            <img src="${ElementUrl}${Types.type.name}.svg" alt="${Types.type.name}" class="bg_${Types.type.name}"/>
                            <!--https://github.com/duiker101/pokemon-type-svg-icons#readme-->
                            <p>${Types.type.name}</p>
                        </div>`
                })

            }
            catch(err) {

            }
            
            resolve(ElementDiv)
        })
    }

    public CreateElementPokemonImage(value:string | number ,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_img')
            ElementDiv.classList.add('img')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(value)

                let ElementImg = this.CreateElement('img', false)
                let ElementButton = this.CreateElement('button', false)
                let PokemonImageShiny:boolean = true
        
                ElementDiv.classList.add(`bg_${Pokemon.types[0]?.type.name || ''}`)

                ElementImg.setAttribute('alt', `Photo ${Pokemon.name}`)
                ElementImg.setAttribute('src',Pokemon.sprites.other['official-artwork'].front_default || '')
        
                ElementButton.innerHTML = 'ShinyMode'
        
                ElementButton.addEventListener('click', () => {
                    PokemonImageShiny = !PokemonImageShiny
        
                    if (PokemonImageShiny) {
                        ElementImg.setAttribute('src',Pokemon.sprites.other['official-artwork'].front_default || '')
                        return
                    }
                    ElementImg.setAttribute('src',Pokemon.sprites.other['official-artwork'].front_shiny || '')
                })
        
                ElementDiv.appendChild(ElementButton)
                ElementDiv.appendChild(ElementImg)
            }
            catch(err) {

                let ElementImg = this.CreateElementImageErr()
                ElementDiv.appendChild(ElementImg)
            }
    
            resolve(ElementDiv)
        })
    }

    public CreateElementPokemonCart(value:string | number,PokeApi:ClassPokeApi, EventClick:EventListenerOrEventListenerObject): Promise<HTMLElement> {

        return new Promise(async(resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ElementButtonView = this.CreateElement('button',false)
            let ElementPokemonName = await this.CreateElementPokemonName(value,PokeApi)
            let ElementPokemonImage = await this.CreateElementPokemonImage(value,PokeApi)
            let ElementPokemonType = await this.CreateElementPokemonType(value,PokeApi)
    
            ElementDiv.classList.add('pokemon_cart')

            ElementButtonView.innerHTML = 'View'

            ElementButtonView.addEventListener('click', EventClick)
            ElementPokemonName.appendChild(ElementButtonView)
            ElementDiv.appendChild(ElementPokemonName)
            ElementDiv.appendChild(ElementPokemonImage)
            ElementDiv.appendChild(ElementPokemonType)
    
            resolve(ElementDiv)

        })
    }

    public CreateElementPokemonStats(value:string | number,PokeApi:ClassPokeApi): Promise<HTMLElement> {
        
        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_stats')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(value)

                let ElementTable = this.CreateElement('table',true)
                let ElementThead = this.CreateElement('thead',false)
                let ElementTbody = this.CreateElement('tbody', false)
                let ElementTrName = this.CreateElement('tr', false)
                let ElementTrStat = this.CreateElement('tr', false)
        
                Pokemon.stats.map((Stats) => {
                    let ElementTh = this.CreateElement('th', false)
                    let ElementTd = this.CreateElement('td', false)
        
                    ElementTh.innerHTML = Stats.stat.name
                    ElementTd.innerHTML = String(Stats.base_stat)
        
                    ElementTrName.appendChild(ElementTh)
                    ElementTrStat.appendChild(ElementTd)
                })
        
                ElementThead.appendChild(ElementTrName)
                ElementTbody.appendChild(ElementTrStat)
        
                ElementTable.appendChild(ElementThead)
                ElementTable.appendChild(ElementTbody)
        
                ElementDiv.appendChild(ElementTable)
        
            }
            catch(err) {
                
            }

            resolve(ElementDiv)
        })
    }

    public CreateElementPokemonView(value:string | number,PokeApi:ClassPokeApi,Event:{Next:() => void,Previous:() => void}): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ButtonNext = this.CreateElement('button', true)
            let ButtonPrevious = this.CreateElement('button', true)
            let ElementDivControl = this.CreateElement('div',false)
            let ElementPokemonName = await this.CreateElementPokemonName(value,PokeApi)
            let ElementPokemonImage = await this.CreateElementPokemonImage(value,PokeApi)
            let ElementPokemonType = await this.CreateElementPokemonType(value,PokeApi)
            let ElementPokemonStats = await this.CreateElementPokemonStats(value,PokeApi)
            let ElementEvolutionChain = await this.CreateElementEvolutionChain(value,PokeApi)
            
            
            ElementDiv.classList.add('view')
            ElementDivControl.classList.add('pokemon_button_view')

            ButtonNext.innerHTML = 'Proximo'
            ButtonPrevious.innerHTML = 'Anterior'

            ButtonNext.addEventListener('click', Event.Next)
            ButtonPrevious.addEventListener('click', Event.Previous)

            ElementDivControl.appendChild(ButtonPrevious)
            ElementDivControl.appendChild(ButtonNext)

            ElementDiv.appendChild(ElementPokemonImage)
            ElementDiv.appendChild(ElementPokemonName)
            ElementDiv.appendChild(ElementDivControl)
            ElementDiv.appendChild(ElementPokemonType)
            ElementDiv.appendChild(ElementPokemonStats)
            ElementDiv.appendChild(ElementEvolutionChain)

            resolve(ElementDiv)
        })
    }

    public CreateElementEvolutionChain(value:string | number,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async (resolve) => {

            let ElementDiv = this.CreateElement('div',false)
            let PokemonSpecies = await PokeApi.ApiGetPokemonSpecies(value)

            let EvolutionChainUrl:string = PokemonSpecies.evolution_chain.url

            let PokemonEvolutionChain = await PokeApi.ApiGetEvolutionChain(EvolutionChainUrl)

            ElementDiv.classList.add('evolutions')
            ElementDiv.appendChild(await this.CreatePokemonBoxEvolution(PokemonEvolutionChain.chain,PokeApi))

            resolve(ElementDiv)
        })

    }

    private CreatePokemonBoxEvolution(Chain:ChainLink,PokeApi:ClassPokeApi): Promise<HTMLElement>  {
        return new Promise(async (resolve) => {

            let CreateDescription = (Detail:EvolutionDetail): HTMLElement => {
                let ElementDescription = this.CreateElement('div',true)

                ElementDescription.classList.add('pokemon_description')

                if (Detail.gender != null ) {
                    let Gender:string = ''
                    switch (Detail.gender) {
                        case 1:
                            Gender = 'Feminino'
                            break
                        case 2:
                            Gender = 'Masculino'
                            break
                    }

                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon precisa ser do género ${Gender}</p>
                    </div>`
                }
                if (Detail.held_item != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon precisa estar segundo um(a) ${String(Detail.held_item.name)}</p>
                    </div>`
                }
                if (Detail.item != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Você precisa dar um(a) ${String(Detail.item.name)}</p>
                    </div>`
                }
                if (Detail.known_move != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa Aprender o Ataque ${String(Detail.known_move.name)}</p>
                    </div>`
                }
                if (Detail.known_move_type != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa Aprender um Ataque do Tipo ${String(Detail.known_move_type.name)}</p>
                    </div>`
                }
                if (Detail.location != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Você precisa estar na(o) ${String(Detail.location.name)}</p>
                    </div>`
                }
                if (Detail.min_affection != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa de ter ${String(Detail.min_affection)} Pontos De Carinho</p>
                    </div>`
                }
                if (Detail.min_beauty != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa de ter ${String(Detail.min_beauty)} Pontos De Beleza</p>
                    </div>`
                }
                if (Detail.min_happiness != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa ter ${String(Detail.min_happiness)} Pontos de Felicidade</p>
                    </div>`
                }
                if (Detail.min_level != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Level Necessário ${String(Detail.min_level)}</p>
                    </div>`
                }
                if (Detail.needs_overworld_rain == true) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Precisa estar chovendo</p>
                    </div>`
                }
                /*if (Detail.party_species != null) {
                }*/
                if (Detail.party_type != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Você precisa de um pokemon do tipo ${String(Detail.min_level)} na sua equipe</p>
                    </div>`
                }
                if (Detail.relative_physical_stats != null) {
                    let Stats:string = ''
                    switch (Detail.relative_physical_stats) {
                        case 1:
                            Stats = 'Ataque Superior a Defesa'
                            break
                        case 0:
                            Stats = 'Ataque Igual a Defesa'
                            break
                        case -1:
                            Stats = 'Defesa Superior o Ataque'
                            break
                    }
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Precisa ter ${String(Stats)}</p>
                    </div>`
                }
                if (Detail.time_of_day != '') {

                    let time_of_day:string = ''

                    switch (Detail.time_of_day) {
                        case 'day':
                            time_of_day = 'dia'
                            break
                        case 'night':
                            time_of_day = 'noite'
                            break
                    }
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Precisa estar de ${time_of_day}</p>
                    </div>`
                }
                if (Detail.trade_species != null) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>Pokemon Trocado deve ser um ${Detail.trade_species.name}</p>
                    </div>`
                }
                if (Detail.turn_upside_down == true) {
                    ElementDescription.innerHTML += `
                    <div class="pokemon_description_item">
                        <p>3ds precisa estar de cabeça para baixo</p>
                    </div>`
                } 

                return ElementDescription
            }

            let EvolutionType: 
            {
                [key: string]: (Detail:EvolutionDetail) => Promise<HTMLElement>
            } = 
            {
                'level-up':(Detail) => {

                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML += '<p>Evolução por level, (level up)</p>'
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    })

                },
                'use-item':(Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução por item, (use-item)</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    })
                },
                'trade':(Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução por troca, (trade)</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    })
                },
                'shed': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução cabana, (shed)</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'spin': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Giro, (spin) <a href="https://bulbapedia.bulbagarden.net/wiki/Sweet" target="_blank">o que e giro?</a></p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'tower-of-darkness': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Completar um objetivo, Termine a <a href="https://bulbapedia.bulbagarden.net/wiki/Tower_of_Darkness" target="_blank">tower-of-darkness</a> com seu pokemon</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'tower-of-waters': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Completar um objetivo, Termine a <a href="https://bulbapedia.bulbagarden.net/wiki/Tower_of_Waters" target="_blank">tower-of-waters</a> com seu pokemon</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'three-critical-hits': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Ataque, Acerte tres ataque critico (three-critical-hits)</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'take-damage': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Dano, Seu pokemon tem que perde vida (take damage)</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'other': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Não Definida, (other) Não tenho Informação de como evoluir esse pokemon ;-; <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon">bulbagarden</a></p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'agile-style-move': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Ataque, (agile style move) Movimento estilo ágil</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'strong-style-move': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Ataque, (strong style move) movimento de estilo forte</p>`
                        ElementEvolutionDetails.innerHTML += ElementDescription.innerHTML

                        resolve(ElementEvolutionDetails)
                    
                    })
                },
                'recoil-damage': (Detail) => {
                    return new Promise(async (resolve) => {
                        let ElementEvolutionDetails = this.CreateElement('div',false)
                        let ElementDescription = CreateDescription(Detail)

                        ElementEvolutionDetails.innerHTML = `<p>Evolução Por Dano, (recoil damage) Seu pokemon tem que perde vida</p>`
                        ElementEvolutionDetails.appendChild(ElementDescription)

                        resolve(ElementEvolutionDetails)
                    
                    })
                }
            }
            
            let ElementDiv = this.CreateElement('div', true)
            let ElementTypeEvolution = this.CreateElement('div',false)
            let NextEvolution = this.CreateElement('div',false)

            Chain.evolves_to.map(async (value) => {
                NextEvolution.appendChild(await this.CreatePokemonBoxEvolution(value,PokeApi))
            })

            ElementDiv.classList.add('evolution_pokemon')
            NextEvolution.classList.add('evolution_next')
            ElementTypeEvolution.classList.add('evolution_description')

            if (Chain.evolution_details[0] != undefined && EvolutionType[Chain.evolution_details[0].trigger.name] != undefined) {
                ElementTypeEvolution = await EvolutionType[Chain.evolution_details[0].trigger.name](Chain.evolution_details[0])
            }

            let ApiGetPokemonUrl = Chain.species.url.replace('pokemon-species','pokemon')

            let ElementPokemonName = await this.CreateElementPokemonName(ApiGetPokemonUrl,PokeApi)
            let ElementPokemonImage = await this.CreateElementPokemonImage(ApiGetPokemonUrl,PokeApi)

            let ElementDivPokemon = this.CreateElement('div',false)
            ElementDivPokemon.classList.add('evolution_pokemon_information')
            ElementDivPokemon.appendChild(ElementPokemonName)
            ElementDivPokemon.appendChild(ElementTypeEvolution)
            ElementDivPokemon.appendChild(ElementPokemonImage)
            ElementDiv.appendChild(ElementDivPokemon)
            ElementDiv.appendChild(NextEvolution)

            resolve(ElementDiv)
        })
    }  

    public CreateElementItemImagem(value:string | number,PokeApi:ClassPokeApi): Promise<HTMLElement>  {
        return new Promise(async (resolve) => {

            let ElementDiv = this.CreateElement('div', true)
            let ElementImg = this.CreateElement('img', false)
            let ElementUrl:string = './static/img/items/'
            let name:string

            if (typeof(value) == 'number' || !isNaN(Number(value))) {let item = await PokeApi.ApiGetItem(value); name = item.name}
            else {name = value}

            ElementImg.setAttribute('src',`${ElementUrl}${name}.png`)
            ElementImg.setAttribute('slt',`Photo ${name}`)
            ElementImg.innerHTML = '<!--https://forums.pokemmo.com/index.php?/topic/56376-mod-hd-items/-->' 
            ElementDiv.appendChild(ElementImg)

            resolve(ElementDiv)
        })
    }
}

function SetTime(time:number): Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}