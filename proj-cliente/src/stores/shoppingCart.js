import { defineStore } from "pinia";
import axios from "axios";

export const useShoppingCartStore = defineStore({
  id: "shoppingCart",
  state: () => ({
    shoppingCart: [],
  }),
  actions: {
    async getShoppingCart() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/shoppingCart"
        );
        this.shoppingCart = data;
        console.info(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'ShoppingCart'");
      }
    },
    async removeFromCart(shoppingCartId) {
        console.info(shoppingCartId);
      try {
        await axios.delete(`http://localhost:4000/shoppingCart/${shoppingCartId}`);
        const index = this.shoppingCart.findIndex(
          (shoppingCartItem) => shoppingCartItem.id === shoppingCartId
        );
        this.shoppingCart.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});
