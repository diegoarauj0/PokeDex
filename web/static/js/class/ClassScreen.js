export default class ClassScreen {
    constructor() {
        this.Screen = [];
        this.ScreenNow = undefined;
    }
    get GetAllScreen() {
        return this.Screen;
    }
    get GetScreenNow() {
        return this.GetScreen(this.ScreenNow);
    }
    GetScreen(Id) {
        if (Id === undefined)
            return;
        return this.Screen.filter((Screen) => { return Screen.Id == Id; })[0];
    }
    CreateScreen(Option) {
        if (this.GetScreen(Option.Id) !== undefined)
            return;
        let { FuncExit, FuncOpen, FuncOpenOne } = Option.FuncMain();
        this.Screen.push({
            FuncExit: FuncExit,
            FuncOpen: FuncOpen,
            FuncOpenOne: FuncOpenOne,
            Id: Option.Id,
            Name: Option.Name,
            Open: false
        });
        return;
    }
    OpenScreen(Id) {
        let Screen = this.GetScreen(Id);
        let OldScreen = this.GetScreen(this.ScreenNow);
        if (Screen === undefined)
            return;
        this.ScreenNow = Screen.Id;
        if (OldScreen !== undefined) {
            OldScreen.FuncExit();
        }
        if (!Screen.Open) {
            Screen.FuncOpenOne();
            Screen.Open = true;
        }
        Screen.FuncOpen();
    }
}
