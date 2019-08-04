<template>
  <div class="player">
    <div class="flex justify-between items-center mb-1">
      <input
        type="text"
        v-model="playerName"
        placeholder="Enter player name..."
        class="w-auto border-0 text-left pl-0 py-0"
      />
      <h2 class="text-xs">{{ total }} {{ pointString }}</h2>
    </div>

    <div class="flex px-1">
      <div class="flex -mx-1 rounded p-2 shadow border border-gray-200" :class="boxStyle">
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
  data() {
    return {
      playerName: ""
    };
  },
  mounted() {
    this.$store.commit("createPlayer", this.player);
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
    total() {
      let total = 0;
      let players = this.players;
      players.forEach(player => {
        if (player.id == this.player) {
          total = player.total;
        }
      });

      return total;
    },
    topScore() {
      let players = this.players;
      let scores = [];
      players.forEach(player => {
        scores.push(player.total);
      });

      return Math.max(...scores);
    },
    winner() {
      if (this.total == this.topScore) {
        return true;
      }

      return false;
    },
    boxStyle() {
      let style = {};

      if (this.winner) {
        if (this.topScore == 0) {
          style = {
            "bg-gray-100": true,
            "border-gray-200": true
          };
        } else {
          style = {
            "bg-green-100": true,
            "border-green-200": true
          };
        }
      } else {
        style = {
          "bg-red-100": true,
          "border-red-200": true
        };
      }

      return style;
    },
    pointString() {
      let string = "points";
      if (this.total == 1) {
        string = "point";
      }

      return string;
    }
  }
};
</script>
