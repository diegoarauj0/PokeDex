var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ClassPokeApi from "./class/ClassPokeApi.js";
import ClassScreen from "./class/ClassScreen.js";
import ClassRendererHtml from "./class/ClassRendererHtml.js";
var PokeApi = new ClassPokeApi(1008);
var Screen = new ClassScreen();
var RendererHtml = new ClassRendererHtml();
var ViewId = 1;
var title = document.querySelector('title') || document.createElement('title');
if (document.querySelector('title') == null)
    document.head.appendChild(title);
class ClassApp {
    constructor() {
        this.NavList = [];
        this.AddScreen();
        this.Header = RendererHtml.CreateElementHeader('PokeDex');
        this.Nav = RendererHtml.CreateElementNav(this.NavList);
        this.HtmlCreation();
        var Query = window.location.search.substring(1);
        var QueryArray = Query.split('&');
        var Params = [];
        QueryArray.map((Query) => {
            Params.push({ name: Query.substring(0, Query.indexOf('=')), value: Query.substring(Query.indexOf('=') + 1) });
        });
        let Resulte = Params.filter((Param) => { return Param.name == 'id'; })[0];
        if (Resulte != undefined) {
            ViewId = Number(Resulte.value);
            Screen.OpenScreen('View');
        }
        else {
            Screen.OpenScreen('PokeDex');
        }
    }
    AddScreen() {
        Screen.CreateScreen({ Id: 'PokeDex', Name: 'PokeDex', FuncMain: this.ScreenPokeDex });
        this.NavList.push({ Text: 'PokeDex', Events: [{ Name: 'click', Func: () => { Screen.OpenScreen('PokeDex'); } }] });
        Screen.CreateScreen({ Id: 'View', Name: 'View', FuncMain: this.ScreenView });
        this.NavList.push({ Text: 'View', Events: [{ Name: 'click', Func: () => { Screen.OpenScreen('View'); } }] });
    }
    HtmlCreation() {
        RendererHtml.Main.appendChild(this.Header);
        this.Header.appendChild(this.Nav);
        document.body.appendChild(RendererHtml.Main);
    }
    ScreenPokeDex() {
        let PokemonCartLoading = false;
        let RendererBreak = false;
        let ScrollPart = 10;
        let ElementPokeDex = RendererHtml.CreateElement('section', true);
        ElementPokeDex.classList.add('pokedex');
        function RendererListPokemonCart(limit) {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                if (PokemonCartLoading)
                    return;
                PokemonCartLoading = true;
                let ElementLoading = RendererHtml.CreateLoading();
                for (let c = 0; c <= limit; c++) {
                    try {
                        if (RendererBreak)
                            break;
                        let id = ElementPokeDex.querySelectorAll('.pokemon_cart').length + 1;
                        ElementPokeDex.appendChild(ElementLoading);
                        let PokemonCart = yield RendererHtml.CreateElementPokemonCart(id, PokeApi, () => {
                            ViewId = id;
                            Screen.OpenScreen('View');
                        });
                        ElementPokeDex.removeChild(ElementLoading);
                        ElementPokeDex.appendChild(PokemonCart);
                    }
                    catch (err) {
                    }
                }
                resolve();
                RendererBreak = false;
                PokemonCartLoading = false;
            }));
        }
        let FuncExit = function () {
            RendererHtml.Main.removeChild(ElementPokeDex);
        };
        let FuncOpen = function () {
            return __awaiter(this, void 0, void 0, function* () {
                title.innerHTML = 'PokeDex';
                RendererHtml.Main.appendChild(ElementPokeDex);
                let ListPokemonCart = ElementPokeDex.querySelectorAll('.pokemon_cart').length + 1;
                if (ListPokemonCart < ScrollPart) {
                    yield RendererListPokemonCart(ScrollPart);
                }
            });
        };
        let FuncOpenOne = function () {
            return __awaiter(this, void 0, void 0, function* () {
                ElementPokeDex.addEventListener('scroll', () => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    if (((_a = Screen.GetScreenNow) === null || _a === void 0 ? void 0 : _a.Id) !== 'PokeDex')
                        return;
                    yield SetTime(120);
                    if (ElementPokeDex.scrollTop + ElementPokeDex.clientHeight >= ElementPokeDex.scrollHeight) {
                        yield RendererListPokemonCart(ScrollPart);
                    }
                }));
            });
        };
        return { FuncExit, FuncOpen, FuncOpenOne };
    }
    ScreenView() {
        let PokemonViewLoading = false;
        let OldViewId = 0;
        let ElementView = RendererHtml.CreateElement('section', true);
        ElementView.classList.add('view');
        function RendererPokemonView(id) {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                if (PokemonViewLoading)
                    return;
                if (OldViewId == ViewId)
                    return;
                title.innerHTML = `Pokemon ${ViewId}`;
                OldViewId = ViewId;
                PokemonViewLoading = true;
                ElementView.innerHTML = '';
                let ElementLoading = RendererHtml.CreateLoading();
                ElementView.appendChild(ElementLoading);
                ElementView.appendChild(yield RendererHtml.CreateElementPokemonView(id, PokeApi, {
                    Next: () => {
                        if (ViewId >= PokeApi.PokemonLimit) {
                            ViewId = 1;
                        }
                        else {
                            ViewId++;
                        }
                        RendererPokemonView(ViewId);
                    },
                    Previous: () => {
                        if (ViewId == 1) {
                            ViewId = PokeApi.PokemonLimit;
                        }
                        else {
                            ViewId--;
                        }
                        RendererPokemonView(ViewId);
                    }
                }));
                ElementView.removeChild(ElementLoading);
                resolve();
                PokemonViewLoading = false;
            }));
        }
        let FuncExit = function () {
            RendererHtml.Main.removeChild(ElementView);
        };
        let FuncOpen = function () {
            title.innerHTML = `Pokemon ${ViewId}`;
            RendererHtml.Main.appendChild(ElementView);
            RendererPokemonView(ViewId);
        };
        let FuncOpenOne = function () {
        };
        return { FuncExit, FuncOpen, FuncOpenOne };
    }
}
function SetTime(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
var App = new ClassApp();
