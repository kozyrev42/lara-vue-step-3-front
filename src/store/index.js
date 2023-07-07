import { createStore } from 'vuex';
import person from './modules/person'

const store = createStore({
    modules: {
            person
        }
});

export default store;