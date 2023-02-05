import {

    CreateScreen,
    SaveScreen

} from '../interface/TypeScreen'

export default class ClassScreen {

    private Screen:Array<SaveScreen>
    private ScreenNow:string | undefined

    constructor() {
        this.Screen = []
        this.ScreenNow = undefined
    }

    get GetAllScreen(): Array<SaveScreen> {
        return this.Screen
    }

    get GetScreenNow(): undefined | SaveScreen {
        return this.GetScreen(this.ScreenNow)
    }

    public GetScreen(Id:string | undefined): SaveScreen | undefined {

        if (Id === undefined) return

        return this.Screen.filter((Screen) => {return Screen.Id == Id})[0]
    }

    public CreateScreen(Option:CreateScreen): void {

        if (this.GetScreen(Option.Id) !== undefined) return

        let {FuncExit, FuncOpen, FuncOpenOne} = Option.FuncMain()

        this.Screen.push({
            FuncExit:FuncExit,
            FuncOpen:FuncOpen,
            FuncOpenOne:FuncOpenOne,
            Id:Option.Id,
            Name:Option.Name,
            Open:false
        })

        return
    }

    public OpenScreen(Id:string): void {

        let Screen = this.GetScreen(Id)
        let OldScreen = this.GetScreen(this.ScreenNow)

        if (Screen === undefined) return

        this.ScreenNow = Screen.Id
        if (OldScreen !== undefined) {OldScreen.FuncExit()} 
        if (!Screen.Open) {Screen.FuncOpenOne(); Screen.Open = true}
        Screen.FuncOpen()
        
    }

}