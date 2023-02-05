import {
    Pokemon
} from '../interface/GetPokeApi'

export default class ClassRendererHtml {

    private DarkMode:boolean = false
    private ElementList: Array<HTMLElement> = []
    public Main:HTMLElement = document.createElement('main')

    constructor() {
        this.ElementList.push(this.Main)
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

        ElementNav.appendChild(ElementUl)

        return ElementNav
    }

    public CreateLoading(): HTMLElement {

        let ElementDiv = this.CreateElement('div',true)
        let ElementImg = this.CreateElement('img',false)
        let ElementP = this.CreateElement('p',false)

        ElementDiv.classList.add('loading')

        ElementImg.setAttribute('alt', 'Carregando')
        ElementImg.setAttribute('src', '../static/img/loading.gif')
        ElementP.innerHTML = 'Carregando'

        ElementDiv.appendChild(ElementImg)
        ElementDiv.appendChild(ElementP)

        return ElementDiv
    }

    public CreateElementPokemonName(JsonPokemon:Pokemon): HTMLElement {

        let ElementDiv = this.CreateElement('div', true)
        let ElementP = this.CreateElement('p', false)

        ElementDiv.classList.add('pokemon_name')
        ElementP.innerHTML = JsonPokemon.name
        ElementDiv.appendChild(ElementP)

        return ElementDiv
    }

    public CreateElementPokemonType(JsonPokemon:Pokemon): HTMLElement {

        let ElementDiv = this.CreateElement('div', true)
        
        let PokemonElementName1:string | undefined = JsonPokemon.types[0]?.type.name
        let PokemonElementName2:string | undefined = JsonPokemon.types[1]?.type.name
        let ElementUrl:string = '../static/img/types/'

        ElementDiv.classList.add('pokemon_types')

        ElementDiv.innerHTML = 
        `
            ${PokemonElementName1 === undefined?'':`<div><img src="${ElementUrl}${PokemonElementName1}.svg" alt="${PokemonElementName1}" class="bg_${PokemonElementName1}"/><p>${PokemonElementName1}</p></div>`}
        `
        ElementDiv.innerHTML = 
        `
            ${PokemonElementName2 === undefined?'':`<div><img src="${ElementUrl}${PokemonElementName2}.svg" alt="${PokemonElementName2}" class="bg_${PokemonElementName2}"/><p>${PokemonElementName2}</p></div>`}
        `

        return ElementDiv
    }

    public CreateElementPokemonImage(JsonPokemon:Pokemon): HTMLElement {

        let ElementDiv = this.CreateElement('div', true)
        let ElementImg = this.CreateElement('img', false)

        ElementImg.setAttribute('alt', `Photo ${JsonPokemon.name}`)
        ElementImg.setAttribute('src',JsonPokemon.sprites.other['official-artwork'].front_default || '')

        ElementDiv.classList.add('pokemon_img')
        ElementDiv.classList.add('img')
        ElementDiv.appendChild(ElementImg)

        return ElementDiv
    }

    public CreateElementPokemonCart(JsonPokemon:Pokemon): HTMLElement {

        let ElementDiv = this.CreateElement('div', true)
        let ElementPokemonName = this.CreateElementPokemonName(JsonPokemon)
        let ElementPokemonImage = this.CreateElementPokemonImage(JsonPokemon)
        let ElementPokemonType = this.CreateElementPokemonType(JsonPokemon)

        let PokemonElementName1:string | undefined = JsonPokemon.types[0]?.type.name

        ElementDiv.classList.add('pokemon_cart')
        ElementDiv.classList.add(`bg_${PokemonElementName1}`)

        ElementDiv.appendChild(ElementPokemonName)
        ElementDiv.appendChild(ElementPokemonImage)
        ElementDiv.appendChild(ElementPokemonType)

        return ElementDiv
    }
}