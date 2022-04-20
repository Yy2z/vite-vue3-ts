import { ComponentCustomProperties } from "vue";
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    interface State {
       
        username: string
    }
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}