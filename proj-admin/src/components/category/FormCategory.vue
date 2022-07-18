<script>
import { mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";

export default {
  props: {
    currentCategory: {
      type: Object,
    },
  },
  data() {
    return {
      category: this.currentCategory,
    };
  },
  methods: {
    ...mapActions(useCategoryStore, ["saveCategory"]),
    async save() {
      try {
        const msg = await this.saveCategory(this.category);
        alert(msg);
        Object.assign(this.category, {
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
  <div class="form-card">   
    <div class="form-description">
      <h1>{{ currentCategory.id !== "" ? "Edição " : "Cadastro" }} de Categorias</h1>
    </div>
    <div class="form-area">
      <div class="description-input-area">
        <label for="category-description">Nome</label>
        <input name="category-description" type="text" v-model="currentCategory.description" />
      </div>
      <button @click="save" class="form-submit">
        {{ currentCategory.id !== "" ? "Salvar" : "Adicionar" }}
      </button>
    </div>
  </div>
</template>

<style scoped>

.description-input-area {
  width: 96%;
  margin-left: 1.8%;
  display: flex;
  flex-direction: column;
}
</style>
