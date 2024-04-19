<template>
  <v-container>
    <v-app-bar app floating class="border-b" dense>
      <v-container class="py-0 d-flex align-center">
        <v-icon @click.stop="drawer = !drawer" v-if="!drawer">
          mdi-menu
        </v-icon>
        <v-icon @click.stop="drawer = !drawer" v-else> mdi-close </v-icon>
        <v-toolbar-title class="ml-2">User Insights</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/formulario">
          <v-list-item link>
            <v-list-item-title>Formulário</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/usuarios">
          <v-list-item link>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/relatorio">
          <v-list-item link>
            <v-list-item-title>Relatório</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
