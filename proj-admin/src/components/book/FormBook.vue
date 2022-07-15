<script>
import { mapActions } from "pinia";
import { usePublisherStore } from "@/stores/publisher";

export default {
  props: {
    currentBook: {
      type: Object,
    },
  },
  data() {
    return {
      book: this.currentBook,
    };
  },
  methods: {
    ...mapActions(usePublisherStore, ["savePublisher"]),
    async save() {
      try {
        const msg = await this.savePublisher(this.publisher);
        alert(msg);
        Object.assign(this.publisher, {
          id: "",
          description: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
  <div class="book-form">
    <input type="text" v-model="currentBook.name" />
    <select v-model="currentBook.categoryId">
      <option
        v-for="category in categories"
        :value="category.id"
        :key="category.id"
      >
        {{ category.description }}
      </option>
    </select>
    <select v-model="currentBook.authorId">
      <option
        v-for="author in authors"
        :value="author.id"
        :key="author.id"
      >
        {{ author.name }}
      </option>
    </select>
    <select v-model="currentBook.publisherId">
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
</template>

<style scoped>
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

.book-form select {
  width: 20%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
  margin-left: 1%;
}

.book-form {
  margin: 3% auto;
  width: 70%;
}
</style>
