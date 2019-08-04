<template>
  <div class="player">
    <div class="flex justify-between mb-1 text-sm">
      <h2 class>Player {{ player }}</h2>
      <h2 class="font-bold">{{ total }} points</h2>
    </div>

    <div class="flex px-1">
      <div class="flex -mx-1 bg-gray-100 rounded p-2 shadow border border-gray-200">
        <Column
          v-for="column in columns"
          :key="column"
          :column="column"
          :player="player"
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
  props: ["player", "columns"],
  components: {
    Column
  },
  computed: {
    total() {
      let players = this.$store.state.players;
      let total = 0;
      players.forEach(player => {
        if (player.id == this.player) {
          total = player.total;
        }
      });

      return total;
    }
  }
};
</script>
