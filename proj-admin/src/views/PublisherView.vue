<script>
import ListPublisher from "../components/publisher/ListPublisher.vue";
import FormPublisher from "../components/publisher/FormPublisher.vue";

export default {
  components: { ListPublisher, FormPublisher },
  data() {
    return {
      currentPublisher: {
        id: "",
        description: "",
      },
    };
  },

  methods: {
    prepareToUpdate(publisher) {
      Object.assign(this.currentPublisher, publisher);
    },
  },
};
</script>
<template>
  <FormPublisher :currentPublisher="currentPublisher" />
  <ListPublisher @edit="prepareToUpdate" />
</template>

<style scoped></style>
