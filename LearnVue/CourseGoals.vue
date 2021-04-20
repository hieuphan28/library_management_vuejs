<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from 'axios'
import GoalsList from "../src/components/GoalsList.vueGoalsList.vue";
import AddGoal from "../src/components/AddGoal.vuee/AddGoal.vue";
export default {
  components: {
    GoalsList,
    AddGoal,
  },

  setup() {
    const goals = ref([]);

    const filteredGoals = computed(function () {
      return goals.value.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    });
    function addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
    goals.value.push(newGoal);
    }
    const getAllTodos = async () =>{
        try {
            const res = await axios.get('https:jsonplaceholder.typicode.com/todos?_limit=5')
            // return addGoals.value=ref.data
            console.log(res.data)
        } catch (error) {
            console.log(Error)    
        }
    }
    getAllTodos()
   
    return {
      filteredGoals: filteredGoals,
      addGoal: addGoal
    };
  },
    // data() {
    //   return {
    //     goals: [],
    //   };
    // },
    // computed: {
    //   filteredGoals() {
    //     return this.goals.filter(
    //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
    //     );
    //   },
    // },
    // methods: {
    //   addGoal(text) {
    //     const newGoal = {
    //       id: new Date().toISOString(),
    //       text: text,
    //     };
    //     this.goals.push(newGoal);
    //   },
    // },
};
</script>