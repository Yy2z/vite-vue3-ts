import { InjectionKey } from 'vue';
import{ useStore as baseUseStore, createStore, Store} from 'vuex';

interface State {
    username: string,
    currentMenu: string //当前菜单
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>(
    {
        state: {
            username:'张三',
            currentMenu: localStorage.getItem('currentMenu') ||'1'
        },
        getters: {
            getName: (state:State)=>{
                return state.username
            },
            getCurrentMenu:(state:State)=>{
                return state.currentMenu
            }
         },
        mutations:{
            SET_USERNAME(state,username:string) {
                state.username = username;
            },
            SET_CURRENT_MENU(state:State,currentMenu:string){
                localStorage.setItem('currentMenu',currentMenu);
                state.currentMenu = currentMenu;
            }
        },
        actions:{}
    })

export function useStore () {
    return baseUseStore(key)
}