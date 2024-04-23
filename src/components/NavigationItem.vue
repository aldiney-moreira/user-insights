<template>
  <router-link :to="to" class="custom-link">
    <v-list-item link>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    title: String,
  },
};
</script>

<style>
.custom-link {
  text-decoration: none;
  color: inherit;
}
</style>
