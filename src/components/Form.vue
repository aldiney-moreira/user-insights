<template>
  <v-container>
    <v-form fast-fail @submit.prevent ref="form">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="fullName"
            :counter="30"
            :rules="fullNameRules"
            label="Nome completo"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            type="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-select
            v-model="origin"
            :items="originItems"
            label="Origem"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="2">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="publicPlace"
            label="Logradouro"
            required
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
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="neighborhood" label="Bairro" required readonly>
            <v-tooltip
              v-if="!cepLengthValid"
              activator="parent"
              location="bottom"
            >
              Preencha o CEP.
            </v-tooltip>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="city" label="Cidade" required readonly>
            <v-tooltip
              v-if="!cepLengthValid"
              activator="parent"
              location="bottom"
            >
              Preencha o CEP.
            </v-tooltip>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="state" label="Estado" required readonly>
            <v-tooltip
              v-if="!cepLengthValid"
              activator="parent"
              location="bottom"
            >
              Preencha o CEP.
            </v-tooltip>
          </v-text-field>
        </v-col>
      </v-row>

      <v-btn v-on:click="addUser" type="submit" class="btn btn-primary"
        >Adicionar</v-btn
      >
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
        if (/^\D*$/u.test(value)) return true;
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
    origin: null,
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
  }),
  methods: {
    addUser() {
      this.$refs.form.validate().then((result) => {
        if (result.valid) {
          const newUser = {
            nome: this.fullName,
            email: this.email,
            origem: this.origin,
            cep: this.cep,
            logradouro: this.publicPlace,
            bairro: this.neighborhood,
            cidade: this.city,
            estado: this.state,
          };
          this.$store.commit("addUser", newUser);

          this.fullName = "";
          this.email = "";
          this.origin = null;
          this.cep = "";
          this.publicPlace = "";
          this.neighborhood = "";
          this.city = "";
          this.state = "";
        }
      });
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
