<script>
import { mapActions } from "pinia";
import { useAuthorStore } from "@/stores/author";

export default {
  props: {
    currentAuthor: {
      type: Object,
    },
  },
  data() {
    return {
      author: this.currentAuthor,
    };
  },
  methods: {
    ...mapActions(useAuthorStore, ["saveAuthor"]),
    async save() {
      try {
        const msg = await this.saveAuthor(this.author);
        alert(msg);
        Object.assign(this.author, {
          id: "",
          name: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
  <div class="form-card">   
    <div class="form-description">
      <h1>{{ currentAuthor.id !== "" ? "Edição " : "Cadastro" }} de Autores</h1>
    </div>
    <div class="form-area">
      <div class="description-input-area">
        <label for="author-description">Nome</label>
        <input name="author-description" type="text" v-model="currentAuthor.name" />
      </div>
      <button @click="save" class="form-submit">
        {{ currentAuthor.id !== "" ? "Salvar" : "Adicionar" }}
      </button>
    </div>
  </div>
</template>

<style scoped>

.description-input-area,
.site-input-area {
  width: 96%;
  margin-left: 1.8%;
  display: flex;
  flex-direction: column;
}

.author-form input {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.author-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.author-form {
  margin: 3% auto;
  width: 70%;
}
</style>
