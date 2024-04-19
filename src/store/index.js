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
    origin: {
      physical: 2,
      digital: 1,
    },
  },
  mutations: {
    addUser(state, data) {
      state.users.push(data);
      this.commit("sumOrigin");
    },

    sumOrigin(state) {
      state.origin.physical = 0;
      state.origin.digital = 0;

      state.users.forEach((element) => {
        if (element.origem.toLowerCase() === "físico") {
          state.origin.physical += 1;
        }

        if (element.origem.toLowerCase() === "digital") {
          state.origin.digital += 1;
        }
      });
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
