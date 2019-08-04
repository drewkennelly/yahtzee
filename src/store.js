import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    createPlayer(state, playerId) {
      state.players.push({
        id: playerId,
        scores: [],
        total: 0
      });
    },
    updateScores(state, data) {
      let { playerId, column, score } = data;
      let playersClone = state.players;
      playersClone.forEach(player => {
        if (player.id == playerId) {
          player.scores[column] = score;
          player.total = player.scores.reduce((a, b) => a + b, 0);
        }
      });

      state.players = playersClone;
    }
  },
  actions: {}
});
