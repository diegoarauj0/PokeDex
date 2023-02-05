export interface SaveScreen {
    Id:string,
    Name:string,
    FuncExit:() => void,
    FuncOpen:() => void,
    FuncOpenOne:() => void,
    Open:boolean
}

export interface CreateScreen {
    Id:string,
    Name:string,
    FuncMain:() => {FuncExit:() => void, FuncOpen:() => void, FuncOpenOne:() => void}
}