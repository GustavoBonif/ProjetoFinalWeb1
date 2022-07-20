import { defineStore } from "pinia";
import axios from "axios";

export const useCatalogStore = defineStore({
  id: "catalog",
  state: () => ({
    catalog: [],
    shoppingCart: [],
  }),
  actions: {
    async getCatalog() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/books?expand=category&expand=author&expand=publisher"
        );
        this.catalog = data;
        console.info(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Book'");
      }
    },
    async addToCart(book) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/shoppingCart",
          book
        );
        this.shoppingCart.push(data);
        return Promise.resolve("Livro adicionado ao carrinho com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
  },
});
