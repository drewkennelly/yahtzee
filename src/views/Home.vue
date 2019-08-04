<template>
  <div class="home">
    <div class="flex items-center justify-between border-b mb-4">
      <h1 class="text-2xl mb-1">Yahtzee</h1>

      <div class="flex justify-end">
        <div class>
          <label for class="w-auto mr-2">Players</label>
          <input type="number" class="w-16" v-model.number="numberOfPlayers" min="1" />
        </div>

        <div class="ml-8">
          <label for class="w-auto mr-2">Columns</label>
          <input type="number" class="w-16" v-model.number="numberOfColumns" min="1" />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap -mx-6">
      <Player
        v-for="player in numberOfPlayers"
        :key="player"
        :player="player"
        :columns="numberOfColumns"
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
      numberOfPlayers: 2,
      numberOfColumns: 3
    };
  }
};
</script>
