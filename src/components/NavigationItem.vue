<template>
  <router-link :to="to" class="v-list-item">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>
