<template>
  <div class="home">
    <div class="flex items-center justify-between border-b mb-4">
      <h1 class="text-2xl mb-1">Yahtzee</h1>

      <div class="flex justify-end">
        <div class>
          <label for class="w-auto mr-2">Players</label>
          <input type="number" class="w-16" v-model.number="players" />
        </div>

        <div class="ml-8">
          <label for class="w-auto mr-2">Columns</label>
          <input type="number" class="w-16" v-model.number="columns" />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap -mx-6">
      <Player
        v-for="player in players"
        :key="player"
        :number="player"
        :columns="columns"
        class="px-6"
      ></Player>
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
export default {
  name: "home",
  components: {
    Player
  },
  data() {
    return {
      players: 2,
      columns: 3
    };
  },
  mounted() {
    for (let i = 1; i <= this.players; i++) {
      this.$store.commit("createPlayer", i);
    }
  }
};
</script>
