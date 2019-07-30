<template>
  <div class="player">
    <h2 class="text-xl mb-2">Player {{ number }}</h2>
    <div class="flex">
      <div class="flex -mx-1 bg-gray-100 rounded p-2 shadow border border-gray-200">
        <Column v-for="column in columns" :key="column" :number="column" class="px-1"></Column>
      </div>
    </div>
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
export default {
  name: "player",
  props: ["number", "columns"],
  components: {
    Column
  },
  data() {
    return {};
  }
};
</script>
