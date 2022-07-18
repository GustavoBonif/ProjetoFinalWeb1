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
        price: "",
        isbn: "",
        quantity: "",
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
    <div class="form-card">   
        <div class="form-description">
          <h1>{{ editing ? "Edição " : "Cadastro" }} de Livros</h1>
        </div>
        <div class="book-form">

          <div class="title-input-area">
            <label for="book-title">Título</label>
            <input name="book-title" type="text" v-model="currentBook.name" />
          </div>

          <div class="author-input-area">
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
          </div>

          <div class="category-input-area">  
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
          </div>

          <div class="publisher-input-area">
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
          </div>

          <div class="isbn-input-area">
            <label class="book-isbn" for="book-isbn">ISBN</label>
            <input name="book-isbn" type="text" v-model="currentBook.isbn" />
          </div>

          <div class="qty-input-area">
            <label class="book-qty" for="book-qty">Quantidade</label>
            <input name="book-qty" type="number" min="1" v-model="currentBook.quantity" />
          </div>

          <div class="price-input-area">
            <label class="book-price" for="book-price">Preço</label>
            <input name="book-price" type="text" v-model="currentBook.price" />
          </div>
            
          <button @click="save" class="form-submit">
            {{ editing ? "Salvar" : "Adicionar" }}
          </button>
            
        </div>
    </div>
    <div class="list-area">
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
                <span> <h2>Preço</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>ISBN</h2> </span>
            </th>
            <th class="text-left">
                <span> <h2>Quantidade</h2> </span>
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
              <td >{{ book.id }}</td>

              <td v-if="book.name">
                {{ book.name }}
              </td>
              <td v-else>
                Não Informado
              </td>
              
              <td v-if="book.price">
                {{ book.price }}
              </td>
              <td v-else>
                Não Informado
              </td>

              <td v-if="book.isbn">
                {{ book.isbn }}
              </td>
              <td v-else>
                Não Informado
              </td>
              
              <td v-if="book.quantity">
                {{ book.quantity }}
              </td>
              <td v-else>
                Não Informado
              </td>

              <td v-if="book.category">
                {{ book.category.description }}
              </td>
              <td v-else>
                Não Informado
              </td>

              <td v-if="book.author ">
                {{ book.author.name }}
              </td>
              <td v-else>
                Não Informado
              </td>

              <td v-if="book.publisher ">
                {{ book.publisher.description }}
              </td>
              <td v-else>
                Não Informado
              </td>

              <td >
                  <button @click="prepareToUpdate(book)">Update</button>
                  <button @click="deleteItem(book.id)">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>


.form-description {
  color: whitesmoke;
}

.book-form {
    border: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #7C90A0;
}

.title-input-area {
  width: 96%;
  margin-left: 1.8%;
}

.author-input-area,
.category-input-area,
.publisher-input-area,
.isbn-input-area,
.qty-input-area,
.price-input-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  margin: 2% 1.5% 0 1.5%;
}

.book-form input[name="book-title"] {
  width: 100%;
  margin: 2px 0 5px 0;
}

.book-form select {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
  margin-left: 1%;
}
.form-submit {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: #3f3f7d;
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 4px;
  border: 0;
  margin: 2% 40% 0% 40%;
}
.list-area {
  margin: 3% auto;
  width: 80%;
}
table {
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