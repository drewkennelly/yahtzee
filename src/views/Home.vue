<template>
  <div class="home flex flex-col min-h-screen">
    <div
      class="bg-white shadow flex justify-between mb-8 items-center px-8 py-1"
    >
      <h1 class="text-3xl font-bold tracking-tighter text-blue-700 flex-1">
        Yahtzee
      </h1>

      <div class="flex flex-wrap justify-end">
        <div class="mb-1 md:mb-0">
          <label for class="w-auto mr-2">Players</label>
          <input
            type="number"
            class="w-16 mb-0"
            v-model.number="numberOfPlayers"
            min="1"
          />
        </div>

        <div class="md:ml-8">
          <label for class="w-auto mr-2">Columns</label>
          <input
            type="number"
            class="w-16 mb-0"
            v-model.number="numberOfColumns"
            min="1"
          />
        </div>
      </div>
    </div>

    <main class="flex flex-wrap -mx-6 px-8 flex-1">
      <Player
        v-for="player in numberOfPlayers"
        :key="player"
        :player="player"
        :columns="numberOfColumns"
        class="px-6"
      ></Player>
    </main>

    <footer class="px-8 py-4 bg-blue-700 text-blue-100 text-xs text-right">
      Built by Drew Kennelly
    </footer>
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
