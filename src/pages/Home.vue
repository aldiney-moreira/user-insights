<template>
  <v-container>
    <div class="container">
      <h1 class="text-h2 text-center font-weight-bold mb-5">User Insights</h1>

      <p class="mb-10">
        Bem-vindo ao <strong>User Insights</strong>, um site que permite
        adicionar usuários e tomar decisões com base em dados. Nossa plataforma
        oferece três principais funcionalidades:
      </p>

      <div class="d-flex flex-column">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :feature="feature"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          title: "Formulário",
          description:
            "Use este formulário para adicionar novos usuários à lista. Capture informações relevantes, como nome, e-mail e outras características importantes.",
          link: "/formulario",
          linkText: "Formulário",
        },
        {
          title: "Usuários",
          description:
            "Visualize a lista de usuários cadastrados. Veja detalhes como nome, email, origem, CEP e outras informações relevantes.",
          link: "/usuarios",
          linkText: "Usuários",
        },
        {
          title: "Relatório",
          description:
            "O relatório apresenta gráfico(s) com base nos dados dos usuários. Use essas informações para tomar decisões informadas.",
          link: "/relatorio",
          linkText: "Relatório",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}

.d-flex {
  gap: 20px;
}

@media (min-width: 960px) {
  .container {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
