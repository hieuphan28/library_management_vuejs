<template>
  <h1>alo</h1>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";

export default {
  name: "LearnApi",
  components: {},
  setup() {
    const getAllTodos = async () => {
      try {
        const res = await axios.get(
          "https:jsonplaceholder.typicode.com/todos?_limit=5"
        );
        // return addGoals.value=ref.data
        console.log(res.data);
      } catch (error) {
        console.log(Error);
      }
    };
    getAllTodos();
  },
};
</script>

<style lang="scss">
</style>
