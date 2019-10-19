import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem('token') || '',
    },
    getters: {
        isAuth: state => !!state.token,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
        }
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                commit('setLoading', true);
                axios.post(`${process.env.VUE_APP_BASEURL}/auth/login`, { ...credentials })
                    .then(res => {
                        const token = res.data.token;
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        localStorage.setItem('token', token);
                        commit('setToken', token);
                        commit('setLoading', false);
                        resolve();
                    })
                    .catch(() => {
                        localStorage.removeItem('token');
                        commit('logout');
                        delete axios.defaults.headers.common['Authorization'];
                        commit('setLoading', false);
                        reject();
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout');
                localStorage.removeItem('token');
                resolve();
            })
        }
    }
}