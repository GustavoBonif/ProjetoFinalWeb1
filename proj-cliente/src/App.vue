<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="header-logo">
    </div>
    <nav>
      <RouterLink to="/catalogo" class="header-link">Catalogo</RouterLink>
      <RouterLink to="/carrinho" class="header-link">Carrinho</RouterLink>
    </nav>
    <div class="header-title">
      Sistema <br> Cliente
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>

#app {
  height: 100vh;
}

header {
  height: 10%;
  background-color: #373337;
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
}

nav {
  justify-content: space-around;
}

.header-link {
  margin: 0px 15px 0px 15px;
  padding: 10px;
}

.header-link:hover {
    background: #7C90A0;
    border-radius: 15px;
}

.header-logo {
  height: 100%;
  width: 100px;
  background-image: url("../src/assets/img/logo-livraria.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.header-title {
  text-align: center;
}

main {
  padding: 10px;
}

</style>
