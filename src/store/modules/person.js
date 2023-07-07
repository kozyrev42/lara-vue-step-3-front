import axios from "axios";
import router from "@/router";

const state = {
    persons: {},
    person: {}
}

const actions = {
    // получение всех персон
    async getPersons({ commit }) {
        try {
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/person/get`);
            commit('setPersons', response.data);
        } catch (error) {
            console.log(error);
        }
    },

    // получение одной персоны по id
    async getPersonById({ commit }, id) {
        try {
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/person/get/${id}`);
            commit('setPerson', response.data);
        } catch (error) {
            console.log(error);
        }
    },

    // удаление персоны
    async deletePerson({dispatch}, id) {
        try {
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/api/person/delete/${id}`);
            dispatch('getPersons');
        } catch (error) {
            console.log(error);
        }
    },

    // обновление персоны
    async updatePerson(person) {
        try {
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/api/person/update`, person.state.person)
            await router.push({name: 'persons.index'});
        } catch (error) {
            console.log(error);
        }
    },
}

const getters = {
    persons(state) {
        return state.persons
    },

    personById(state) {
        return state.person
    }
}

const mutations = {
    setPersons(state, persons) {
        state.persons = persons
    },

    setPerson(state, person) {
        state.person = person
    }
}

// экспортируем все объекты
export default {
    state,
    getters,
    actions,
    mutations
}