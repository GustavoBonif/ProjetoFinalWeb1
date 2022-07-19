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
        // "saveBook",
        // "deleteBook",
        ]),
        // ...mapActions(useAuthorStore, ["getAllAuthors"]),
        // ...mapActions(usePublisherStore, ["getAllPublishers"]),
        // async save() {
        //     try {
        //         const msg = await this.saveBook(this.currentBook);
        //         alert(msg);
        //         this.editing = false;
        //         this.currentBook = {};
        //     } catch (e) {
        //         alert("Ooops! Algo de errado!");
        //     }
        // },
        // async deleteItem(book_id) {
        //     try {
        //         await this.deleteBook(book_id);
        //         alert("Item excluído com sucesso.");
        //     } catch (e) {
        //         alert(e);
        //     }
        // },
        // prepareToUpdate(book) {
        // Object.assign(this.currentBook, book);
        // this.editing = true;
        // },
    },
    async mounted() {
        try {
            await this.getCatalog();
        } catch (e) {
            alert(e);
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
                <h5>R${{ catalogItem.price }}</h5>
                <h6>Autor: {{ catalogItem.author.name }}</h6>
                <h6>ISBN: {{ catalogItem.isbn }}</h6>
                <h6>Editora: {{ catalogItem.publisher.description }}</h6>
            </div>
        </div>
    </section>
</template>