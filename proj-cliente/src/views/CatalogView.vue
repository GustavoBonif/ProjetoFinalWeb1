<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCatalogStore } from "@/stores/catalog";

export default {
    computed: {
        ...mapStores(useCatalogStore),
        ...mapState(useCatalogStore, ["catalog"]),
    },
    methods: {
        ...mapActions(useCatalogStore, [
            "getCatalog",
            "addToCart",
        ]),
    },
    async mounted() {
        try {
            await this.getCatalog();
        } catch (e) {
            alert(e);
        }
    },
    addToCart(catalogItem) {
        try {
            const msg = this.addToCart(catalogItem);
            alert(msg);
        } catch (e) {
            alert("Ooops! Algo de errado!");
        }
    }
}
</script>

<template>
    <section class="container">
        <div v-for="catalogItem in catalog" :key="catalogItem.id" class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>{{ catalogItem.name }}</h3>
                <h5> <span>R$</span> {{ catalogItem.price }}</h5>
                <h6><span>Autor:</span> {{ catalogItem.author.name }}</h6>
                <h6><span>ISBN:</span> {{ catalogItem.isbn }}</h6>
                <h6><span>Editora:</span> {{ catalogItem.publisher.description }}</h6>
            </div>
            <div class="actions">
                <button @click="addToCart(catalogItem)" class="add-cart-button">Adicionar ao Carrinho</button>
            </div>
        </div>
    </section>
</template>

<style scoped>

.container{
    margin: auto;
    width: 95%;
    height: 45vh;
    display: flex;
    flex-wrap: wrap;
}

.item {
    margin: 25px;
    background-color: #868585;
    text-align: center;
    font-size: 1.5em;
    width: 46.5%;
    align-items: center;
    text-align: left;
    display: flex;
} 

span {
    font-weight: bold;
}

.description{
    width: 65%;
    float: right;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    margin-left: 5%;
}

.actions {
    width: 30%;
}

.add-cart-button {
    width: 100%;
    padding: 15%;
    border: none;
    background-color: #7c90a0;
    /* background-image: url("../src/assets/img/carrinho.png"); */
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
}

</style>