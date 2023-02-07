import ClassPokeApi from "./class/ClassPokeApi.js"
import ClassScreen from "./class/ClassScreen.js"
import ClassRendererHtml from "./class/ClassRendererHtml.js"

import {
    SaveScreen,
    CreateScreen
} from './interface/TypeScreen'

var PokeApi = new ClassPokeApi(898)
var Screen = new ClassScreen()
var RendererHtml = new ClassRendererHtml()
var ViewId:number = 1

type FuncMain = {FuncExit:() => void, FuncOpen:() => void, FuncOpenOne:() => void}

class ClassApp {

    Header:HTMLElement
    Nav:HTMLElement
    NavList:Array<{Text:string, Events:Array<{Name:string, Func:EventListenerOrEventListenerObject}>}> = []

    constructor() {
        this.AddScreen()
        this.Header = RendererHtml.CreateElementHeader('PokeDex')
        this.Nav = RendererHtml.CreateElementNav(this.NavList)
        this.HtmlCreation()

        var Query:string = window.location.search.substring(1)
        var QueryArray:Array<any> = Query.split('&')
        var Params:Array<{name:string, value:string}> = []

        QueryArray.map((Query) => {
            Params.push({ name:Query.substring(0,Query.indexOf('=')), value:Query.substring(Query.indexOf('=') + 1)})
        })

        let Resulte = Params.filter((Param) => {return Param.name == 'id'})[0]

        if (Resulte != undefined) {
            ViewId = Number(Resulte.value)
            Screen.OpenScreen('View')
        } else {
            Screen.OpenScreen('PokeDex')
        }
    }
    
    private AddScreen(): void {

        Screen.CreateScreen({Id:'PokeDex', Name:'PokeDex',FuncMain:this.ScreenPokeDex})
        this.NavList.push({Text:'PokeDex',Events:[{Name:'click',Func:()=>{Screen.OpenScreen('PokeDex')}}]})

        Screen.CreateScreen({Id:'View', Name:'View',FuncMain:this.ScreenView})
        this.NavList.push({Text:'View',Events:[{Name:'click',Func:()=>{Screen.OpenScreen('View')}}]})
    }

    private HtmlCreation(): void {

        RendererHtml.Main.appendChild(this.Header)
        this.Header.appendChild(this.Nav)
        document.body.appendChild(RendererHtml.Main)
    }

    private ScreenPokeDex(): FuncMain {

        let PokemonCartLoading:boolean = false
        let RendererBreak:boolean = false
        let ScrollPart:number = 10

        let ElementPokeDex = RendererHtml.CreateElement('section', true)
        ElementPokeDex.classList.add('pokedex')

        function RendererListPokemonCart(limit:number): Promise<void> {

            return new Promise(async (resolve) => {

                if (PokemonCartLoading) return
    
                PokemonCartLoading = true
                let id:number = ElementPokeDex.querySelectorAll('.pokemon_cart').length + 1
    
                for (let c:number = 0; c <= limit ;c ++) {

                    if (RendererBreak) break
    
                    id = ElementPokeDex.querySelectorAll('.pokemon_cart').length + 1

                    await PokeApi.ApiGetPokemon(String(id))
                    .then(async (Pokemon) => {

                        let PokemonCart = await RendererHtml.CreateElementPokemonCart(id,PokeApi)
                        PokemonCart.addEventListener('click', () => {
                            ViewId = Pokemon.id
                            Screen.OpenScreen('View')
                        })

                        ElementPokeDex.appendChild(PokemonCart)
                    })
                    .catch((err) => {
                        console.log(err)
                        RendererBreak = true               
                        return
                    })
    
                }
                resolve()
                RendererBreak = false
                PokemonCartLoading = false
            })
        }

        let FuncExit = function(): void {
            RendererHtml.Main.removeChild(ElementPokeDex)
        }

        let FuncOpen = async function() {
            RendererHtml.Main.appendChild(ElementPokeDex)

            let ListPokemonCart:number = ElementPokeDex.querySelectorAll('.pokemon_cart').length + 1

            if (ListPokemonCart < ScrollPart) {
                await RendererListPokemonCart(ScrollPart)
            }
        }

        let FuncOpenOne = async function() {
            //sem css isso n funciona ;-;
            /*RendererHtml.Main.addEventListener('scroll', async () => {

                if (Screen.GetScreenNow?.Id !== 'PokeDex') return
                await SetTime(120)

                let InformationMain = RendererHtml.Main.getBoundingClientRect()
                let InformationPokeDex = ElementPokeDex.getBoundingClientRect()
    
                if (InformationMain.bottom + (InformationMain.bottom / 4) >= InformationPokeDex.bottom) {
                    console.log('2')  
                }
            })*/
        }

        return {FuncExit, FuncOpen, FuncOpenOne}
    }

    private ScreenView(): FuncMain {

        let PokemonViewLoading = false

        let ElementView = RendererHtml.CreateElement('section', true)
        ElementView.classList.add('view')

        function RendererPokemonView(id:number) {
            return new Promise<void>(async (resolve) => {

                if (PokemonViewLoading) return
                PokemonViewLoading = true

                ElementView.innerHTML = ''

                let ButtonNext = RendererHtml.CreateElement('button', true)
                let ButtonPrevious = RendererHtml.CreateElement('button', true)
                let ElementDivControl = RendererHtml.CreateElement('div',false)
                ElementDivControl.classList.add('pokemon_button_view')

                ElementDivControl.appendChild(ButtonNext)
                ElementDivControl.appendChild(ButtonPrevious)

                ButtonNext.innerHTML = 'Proximo'
                ButtonPrevious.innerHTML = 'Anterior'

                ButtonNext.addEventListener('click', () => {
                    if (ViewId >= PokeApi.PokemonLimit) return
                    ViewId ++
                    RendererPokemonView(ViewId)
                })
                ButtonPrevious.addEventListener('click', () => {
                    if (ViewId == 1) return
                    ViewId --
                    RendererPokemonView(ViewId)
                })

                await PokeApi.ApiGetPokemon(String(id))
                .then(async (Pokemon) => {

                    ElementView.appendChild(await RendererHtml.CreateElementPokemonImage(id,PokeApi))
                    ElementView.appendChild(await RendererHtml.CreateElementPokemonName(id,PokeApi))
                    ElementView.appendChild(await RendererHtml.CreateElementPokemonType(id,PokeApi))
                    ElementView.appendChild(await RendererHtml.CreateElementPokemonStats(id,PokeApi))
                    ElementView.appendChild(ElementDivControl)
                })

                resolve()
                PokemonViewLoading = false
            })
        }

        let FuncExit = function(): void {
            RendererHtml.Main.removeChild(ElementView)
        }

        let FuncOpen = function(): void {
            RendererHtml.Main.appendChild(ElementView)

            RendererPokemonView(ViewId)
        }

        let FuncOpenOne = function(): void {

        }

        return {FuncExit, FuncOpen, FuncOpenOne}
    }
}

function SetTime(time:number): Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}

var App = new ClassApp()