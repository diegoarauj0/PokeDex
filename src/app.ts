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
        Screen.OpenScreen('PokeDex')
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

        let FuncExit = function(): void {

        }

        let FuncOpen = function(): void {
            alert('aberto')
        }

        let FuncOpenOne = function(): void {

        }

        return {FuncExit, FuncOpen, FuncOpenOne}
    }

    private ScreenView(): FuncMain {
        let FuncExit = function(): void {

        }

        let FuncOpen = function(): void {
            alert('aberto')
        }

        let FuncOpenOne = function(): void {

        }

        return {FuncExit, FuncOpen, FuncOpenOne}
    }
}
var App = new ClassApp()