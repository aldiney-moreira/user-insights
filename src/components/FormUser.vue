<template>
  <v-container>
    <v-form fast-fail @submit.prevent ref="form">
      <v-text-field
        v-model="fullName"
        :counter="30"
        :rules="fullNameRules"
        label="Nome completo"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        type="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="origin"
        :items="originItems"
        label="Origem"
        required
      ></v-select>

      <v-text-field
        v-model="cep"
        :counter="8"
        :rules="cepRules"
        type="number"
        label="CEP"
        number
        required
        @input="searchAddress"
        class="no-spinners"
      ></v-text-field>

      <template v-for="(field, index) in fields" :key="index">
        <v-text-field
          v-model="field.model"
          :label="field.label"
          :required="field.required"
          readonly
        >
          <v-tooltip
            v-if="!cepLengthValid"
            activator="parent"
            location="bottom"
          >
            Preencha o CEP.
          </v-tooltip>
        </v-text-field>
      </template>

      <v-btn v-on:click="addUser" type="submit" class="btn btn-primary"
        >Adicionar</v-btn
      >
      <v-snackbar v-model="showSuccessSnackbar" color="success" timeout="2000">
        Usuário cadastrado com sucesso!
      </v-snackbar>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    fullNameRules: [
      (value) => {
        if (value) return true;

        return "O nome é obrigatório.";
      },
      (value) => {
        if (value?.length <= 30) return true;

        return "O nome deve ter menos de 30 caracteres.";
      },
      (value) => {
        if (/^[a-záàâãéèêíïóôõöúçñ]+$/i.test(value)) return true;
        return "O nome deve conter apenas letras.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "O e-mail é obrigatório.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail deve ser válido.";
      },
    ],
    origin: "",
    originItems: ["Digital", "Físico"],
    cep: "",
    cepLengthValid: false,
    cepValid: false,
    cepRules: [
      (value) => {
        if (value) return true;

        return "O CEP é obrigatório.";
      },
      (value) => {
        if (value?.length == 8) return true;

        return "O CEP deve ter 8 caracteres.";
      },
    ],
    publicPlace: "",
    neighborhood: "",
    city: "",
    state: "",
    showSuccessSnackbar: false,
  }),
  computed: {
    fields() {
      return [
        { model: this.publicPlace, label: "Logradouro", required: true },
        { model: this.neighborhood, label: "Bairro", required: true },
        { model: this.city, label: "Cidade", required: true },
        { model: this.state, label: "Estado", required: true },
      ];
    },
  },
  methods: {
    addUser() {
      this.$refs.form.validate().then((result) => {
        if (result.valid) {
          const newUser = {
            nome: this.capitalizeEachWord(this.fullName),
            email: this.email,
            origem: this.origin,
            cep: this.cep,
            logradouro: this.publicPlace,
            bairro: this.neighborhood,
            cidade: this.city,
            estado: this.state,
          };
          this.$store.commit("addUser", newUser);

          this.fullName = null;
          this.email = null;
          this.origin = null;
          this.cep = null;
          this.publicPlace = null;
          this.neighborhood = null;
          this.city = null;
          this.state = null;

          this.showSuccessSnackbar = true;
        }
      });
    },
    capitalizeEachWord(str) {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => {
          if (word.length > 3) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          } else {
            return word;
          }
        })
        .join(" ");
    },
    searchAddress() {
      if (this.cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erro ao buscar o endereço");
            }
            return response.json();
          })
          .then((data) => {
            this.publicPlace = data.logradouro;
            this.neighborhood = data.bairro;
            this.city = data.localidade;
            this.state = data.uf;
          })
          .catch((error) => {
            console.error("Erro:", error);
          });
        this.cepLengthValid = true;
      } else {
        this.cepLengthValid = false;
      }
    },
  },
};
</script>

<style>
.no-spinners ::-webkit-inner-spin-button,
.no-spinners ::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
</style>
