<script>
import { mapActions } from "pinia";
import { usePublisherStore } from "@/stores/publisher";

export default {
  props: {
    currentPublisher: {
      type: Object,
    },
  },
  data() {
    return {
      publisher: this.currentPublisher,
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
          site: "",
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
      <h1>{{ currentPublisher.id !== "" ? "Edição " : "Cadastro" }} de Editoras</h1>
    </div>
    <div class="form-area">
      <div class="description-input-area">
        <label for="publisher-description">Nome</label>
        <input name="publisher-description" type="text" v-model="currentPublisher.description" />
      </div>

      <div class="site-input-area">
        <label for="publisher-site">Site</label>
        <input name="publisher-site" type="text" v-model="currentPublisher.site" />
      </div>

      <button @click="save" class="form-submit">
        {{ currentPublisher.id !== "" ? "Salvar" : "Adicionar" }}
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

</style>
