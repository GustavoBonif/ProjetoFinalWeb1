<script setup></script>

<template>
  <h1>Sistema de gestão de produtos</h1>
  <h2>Fazer uma landpage</h2>
</template>

<style>
    body{
        background-color: #d9d9d9;
        margin: 0;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #373337;
    }

    li {
        float: left;
    }

    li h1 {
        display: block;
        text-align: center;
        padding: 0.5vh;
        text-decoration: none;
        color: white;
    }

    #carrinho{
        float: right;
        text-align: center;
        padding: 0.5vh;
        text-decoration: none;
        color: white;
    }

    .container_search{
        margin: auto;
        height: 20vh;
        display: flex;
       
    }

    .search{
        width: 50%;
        height: 40%;
        margin: auto;
        text-align: center;
    }

    .search_bar{
        width: 60%;
        height: 60%;
        margin: auto;
        align-items: center;
        align-content: center;
        text-align: center;
        border-style: none;
        border-radius: 25px;
    }

    .book{
        background-color: #373337;
        float: left;
        width: 30%;
        height: 100%;
    }

</style>