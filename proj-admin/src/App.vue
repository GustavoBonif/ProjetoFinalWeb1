<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/" class="header-link">Home</RouterLink> |
    <RouterLink to="/categorias" class="header-link">Categorias</RouterLink> |
    <RouterLink to="/produtos" class="header-link">Produtos</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
/* @import "@/assets/base.css"; */

#app {
  height: 100vh;
}

header {
  height: 10%;
  background-color: #4E5166;
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

main {
  padding: 10px;
}
</style>
