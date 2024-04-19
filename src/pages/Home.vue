<template>
  <v-container class="w-50">
    <h1 class="text-h2 text-center font-weight-bold mb-5">User Insights</h1>

    <p class="mb-10">
      Bem-vindo ao <strong>User Insights</strong>, um site que permite adicionar
      usuários e tomar decisões com base em dados. Nossa plataforma oferece três
      principais funcionalidades:
    </p>
    <div class="d-flex flex-column">
      <v-card class="pa-7">
        <v-card-title>
          <h2>Formulário</h2>
        </v-card-title>
        <v-card-text>
          <p class="font-weight-regular">
            Use este formulário para adicionar novos usuários à lista. Capture
            informações relevantes, como nome, e-mail e outras características
            importantes. Acesse em:
            <router-link to="/formulario">Formulário </router-link>
          </p>
        </v-card-text>
      </v-card>

      <v-card class="pa-7">
        <v-card-title>
          <h2>Usuários</h2>
        </v-card-title>
        <v-card-text>
          <p class="font-weight-regular">
            Visualize a lista de usuários cadastrados. Veja detalhes como nome,
            email, origem, CEP e outras informações relevantes. Acesse em:
            <router-link to="/usuarios"> Usuários </router-link>
          </p>
        </v-card-text>
      </v-card>

      <v-card class="pa-7">
        <v-card-title>
          <h2>Relatório</h2>
        </v-card-title>
        <v-card-text>
          <p class="font-weight-regular">
            O relatório apresenta gráfico(s) com base nos dados dos usuários.
            Use essas informações para tomar decisões informadas. Acesse em:
            <router-link to="/relatorio"> Relatório </router-link>
          </p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script></script>

<style>
.d-flex {
  gap: 20px;
}
</style>
