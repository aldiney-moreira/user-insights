<template>
  <v-container>
    <v-app-bar class="border-b">
      <v-container class="py-0 d-flex align-center">
        <v-icon @click.stop="drawer = !drawer" v-if="!drawer">
          mdi-menu
        </v-icon>
        <v-icon @click.stop="drawer = !drawer" v-else> mdi-close </v-icon>
        <v-toolbar-title class="ml-2">User Insights</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <NavigationItem to="/" title="Home" />
        <NavigationItem to="/formulario" title="Formulário" />
        <NavigationItem to="/usuarios" title="Usuários" />
        <NavigationItem to="/relatorio" title="Relatório" />
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import NavigationItem from "@/components/NavigationItem";

export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
