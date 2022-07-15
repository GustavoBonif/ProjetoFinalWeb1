<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import { useCategoryStore } from "@/stores/category";
import { usePublisherStore } from "@/stores/publisher";
import { useAuthorStore } from "@/stores/author";

export default {
  data() {
    return {
      currentBook: {
        id: "",
        name: "",
        categoryId: "",
        authorId: "",
        publisherId: "",
      },
      editing: false,
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
    ...mapActions(useBookStore, [
      "getAllBooks",
      "saveBook",
      "deleteBook",
    ]),
    ...mapActions(useCategoryStore, ["getAllCategories"]),
    ...mapActions(useAuthorStore, ["getAllAuthors"]),
    ...mapActions(usePublisherStore, ["getAllPublishers"]),
    async save() {
      try {
        const msg = await this.saveBook(this.currentBook);
        alert(msg);
        this.editing = false;
        this.currentBook = {};
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
    async deleteItem(book_id) {
      try {
        await this.deleteBook(book_id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    prepareToUpdate(book) {
      Object.assign(this.currentBook, book);
      this.editing = true;
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
    <h1>Cadastro de Livros</h1>
    <div class="form-area">   
        <div class="form-description">
          <h1>{{ editing ? "Edição " : "Cadastro" }} de Livros</h1>
        </div>
        <div class="book-form">
            <label for="book-title">Título</label>
            <input name="book-title" type="text" v-model="currentBook.name" />
            <label for="book-category">Categoria</label>
            <select name="book-category" v-model="currentBook.categoryId">
            <option
                v-for="category in categories"
                :value="category.id"
                :key="category.id"
            >
                {{ category.description }}
            </option>
            </select>
            <label for="book-author">Autor</label>
            <select name="book-author" v-model="currentBook.authorId">
            <option
                v-for="author in authors"
                :value="author.id"
                :key="author.id"
            >
                {{ author.name }}
            </option>
            </select>
            <label for="book-publisher">Editora</label>
            <select name="book-publisher" v-model="currentBook.publisherId">
            <option
                v-for="publisher in publishers"
                :value="publisher.id"
                :key="publisher.id"
            >
                {{ publisher.description }}
            </option>
            </select>
            <button @click="save">
            {{ editing ? "Salvar" : "Adicionar" }}
            </button>
            
        </div>
    </div>
    <div class="book-list">
        <table class="table">
        <thead>
            <tr>
            <th class="text-left">
                <span> <h2>ID</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Título</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Categoria</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Autor</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Editora</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Ações</h2> </span>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book of books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td v-if="book.category">{{ book.category.description }}</td>
            <td v-if="book.author">{{ book.author.name }}</td>
            <td v-if="book.publisher">{{ book.publisher.description }}</td>
            <td>
                <button @click="prepareToUpdate(book)">Update</button>
                <button @click="deleteItem(book.id)">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<style scoped>

.form-area {
  border: 1px solid black;
  padding: 5px;
  margin: 3% auto;
  width: 60%;
  display: flex;
}

.form-description {
  
}

.book-form {
    border: 1px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    /* margin: 3% auto; */
    width: 50%;
    flex-wrap: wrap;
}
.book-form input {
  width: 30%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}
.book-form select {
  width: 20%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
  margin-left: 1%;
}
.book-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}
.book-list {
  margin: 3% auto;
  width: 50%;
}
table {
  /* display: table; */
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}
th {
  border-bottom: 2px solid #444;
  text-align: left;
}
td {
  padding: 10px;
}
thead tr {
  background-color: #444;
  color: whitesmoke;
}
tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
</style>