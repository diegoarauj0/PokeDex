import ClassPokeApi from './ClassPokeApi'

import {
    Pokemon,
} from '../interface/GetPokeApi'

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

    public CreateElementPokemonName(Id:number,PokeApi:ClassPokeApi): Promise<HTMLElement> {
        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ElementP = this.CreateElement('p', false)
            ElementDiv.classList.add('pokemon_name')

            try 
            {
                let Pokemon = await PokeApi.ApiGetPokemon(String(Id))
        
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

    public CreateElementPokemonType(Id:number,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_types')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(String(Id))

                let ElementUrl:string = './static/img/types/'
        
                Pokemon.types.map((Types) => {
                    ElementDiv.innerHTML += 
                    `
                        <div>
                            <img src="${ElementUrl}${Types.type.name}.svg" alt="${Types.type.name}" class="bg_${Types.type.name}"/>
                            <p>${Types.type.name}</p>
                        </div>`
                })

            }
            catch(err) {

            }
            
            resolve(ElementDiv)
        })
    }

    public CreateElementPokemonImage(Id:number,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_img')
            ElementDiv.classList.add('img')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(String(Id))

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

    public CreateElementPokemonCart(Id:number,PokeApi:ClassPokeApi): Promise<HTMLElement> {

        return new Promise(async(resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ElementPokemonName = await this.CreateElementPokemonName(Id,PokeApi)
            let ElementPokemonImage = await this.CreateElementPokemonImage(Id,PokeApi)
            let ElementPokemonType = await this.CreateElementPokemonType(Id,PokeApi)
    
            ElementDiv.classList.add('pokemon_cart')

            ElementDiv.appendChild(ElementPokemonName)
            ElementDiv.appendChild(ElementPokemonImage)
            ElementDiv.appendChild(ElementPokemonType)
    
            resolve(ElementDiv)

        })
    }

    public CreateElementPokemonStats(Id:number,PokeApi:ClassPokeApi): Promise<HTMLElement> {
        
        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            ElementDiv.classList.add('pokemon_stats')

            try
            {
                let Pokemon = await PokeApi.ApiGetPokemon(String(Id))

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

    public CreateElementPokemonView(Id:number,PokeApi:ClassPokeApi,Event:{Next:() => void,Previous:() => void}): Promise<HTMLElement> {

        return new Promise(async (resolve,reject) => {

            let ElementDiv = this.CreateElement('div', true)
            let ButtonNext = this.CreateElement('button', true)
            let ButtonPrevious = this.CreateElement('button', true)
            let ElementDivControl = this.CreateElement('div',false)
            let ElementPokemonName = await this.CreateElementPokemonName(Id,PokeApi)
            let ElementPokemonImage = await this.CreateElementPokemonImage(Id,PokeApi)
            let ElementPokemonType = await this.CreateElementPokemonType(Id,PokeApi)
            let ElementPokemonStats = await this.CreateElementPokemonStats(Id,PokeApi)
            
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

            resolve(ElementDiv)
        })
    }
}