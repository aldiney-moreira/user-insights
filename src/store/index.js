import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        nome: "Aldiney Moreira",
        email: "aldiney@gmail.com",
        origem: "Digital",
        cep: "88034351",
        logradouro: "Servidão Jaqueira",
        bairro: "Itacorubi",
        cidade: "Florianópolis",
        estado: "SC",
      },
      {
        nome: "Roberto da Silva",
        email: "roberto@outlook.com",
        origem: "Físico",
        cep: "88034352",
        logradouro: "Servidão Monte Sião",
        bairro: "Itacorubi",
        cidade: "Florianópolis",
        estado: "SC",
      },
      {
        nome: "Bruno dos Santos",
        email: "bruno@outlook.com",
        origem: "Digital",
        cep: "69078370",
        logradouro: "Rua Dircinha Batista",
        bairro: "Japiim",
        cidade: "Manaus",
        estado: "AM",
      },
    ],
  },
  getters: {},
  mutations: {
    addUser(state, data) {
      state.users.push(data);
    },
  },
  actions: {},
  modules: {},
});
