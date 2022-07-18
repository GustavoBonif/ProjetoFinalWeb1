<script>
export default {
    methods: {
        ...mapActions(useCatalogStore, [
        "getCatalog",
        // "saveBook",
        // "deleteBook",
        ]),
        ...mapActions(useCatalogStore, ["getCatalog"]),
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
        prepareToUpdate(book) {
        Object.assign(this.currentBook, book);
        this.editing = true;
        },
    },
}
</script>

<template>
    <section class="container">
        <div class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>Os miseraveis</h3>
                <h5>Autor: Victor Hugo</h5>
                <h5>Gênero: Victor Hugo</h5>
            </div>
        </div>
        <div class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>Os miseraveis</h3>
                <h5>Autor: Victor Hugo</h5>
                <h5>Gênero: Victor Hugo</h5>
            </div>
        </div>
        <div class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>Os miseraveis</h3>
                <h5>Autor: Victor Hugo</h5>
                <h5>Gênero: Victor Hugo</h5>
            </div>
        </div>
        <div class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>Os miseraveis</h3>
                <h5>Autor: Victor Hugo</h5>
                <h5>Gênero: Victor Hugo</h5>
            </div>
        </div>
    </section>
</template>