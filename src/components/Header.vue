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
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/formulario">Formulário</NavigationItem>
        <NavigationItem to="/usuarios">Usuários</NavigationItem>
        <NavigationItem to="/relatorio">Relatório</NavigationItem>
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
