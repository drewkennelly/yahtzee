<template>
  <div class="home">
    <div class="flex items-center justify-between border-b pb-2 mb-4">
      <h1 class="text-3xl">Yahtzee</h1>

      <div class="flex justify-end">
        <div class="w-1/3">
          <label for>Players</label>
          <input type="number" class="w-20" v-model.number="players" />
        </div>

        <div class="w-1/3 ml-8">
          <label for>Columns</label>
          <input type="number" class="w-20" v-model.number="columns" />
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
  computed: {}
};
</script>
