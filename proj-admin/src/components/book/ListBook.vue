<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import { useCategoryStore } from "@/stores/category";
import { usePublisherStore } from "@/stores/publisher";
import { useAuthorStore } from "@/stores/author";
import DataTable from "../template/DataTable.vue";


export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Título", field: "description" },
      ],
    };
  },
  computed: {
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
    ...mapState(useCategoryStore, ["categories"]),
    ...mapState(useAuthorStore, ["authors"]),
    ...mapState(usePublisherStore, ["publishers"]),
  },
  methods: {
    ...mapActions(useCategoryStore, ["getAllCategories"]),
    ...mapActions(useAuthorStore, ["getAllAuthors"]),
    ...mapActions(usePublisherStore, ["getAllPublishers"]),
    async deleteItem(book) {
      try {
        await this.deleteBook(book.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
      await this.getAllAuthors();
      await this.getAllPublishers();
      await this.getAllBooks();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <div class="book-list">
    <data-table
      :columns="columns"
      :items="books"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    />
  </div>
</template>

<style scoped>
.book-list {
  margin: 3% auto;
  width: 70%;
}
</style>
