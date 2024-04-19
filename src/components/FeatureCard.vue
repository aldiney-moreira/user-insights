<template>
  <v-card class="pa-7">
    <v-card-title>
      <h2>{{ feature.title }}</h2>
    </v-card-title>
    <v-card-text>
      <p class="font-weight-regular">
        {{ feature.description }} Acesse em:
        <router-link :to="feature.link">{{ feature.linkText }}</router-link>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    feature: Object,
  },
};
</script>
