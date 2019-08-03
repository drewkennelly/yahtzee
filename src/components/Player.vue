<template>
  <div class="player">
    <h2 class="mb-1 text-sm">Player {{ number }}</h2>
    <div class="flex px-1">
      <div class="flex -mx-1 bg-gray-100 rounded p-2 shadow border border-gray-200">
        <Column
          v-for="column in columns"
          :key="column"
          :number="column"
          :player="number"
          class="px-1"
        ></Column>
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
  }
};
</script>
