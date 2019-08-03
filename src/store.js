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
        scores: []
      });
    },
    updateScores(state, data) {
      let { playerId, column, score } = data;
      let playersClone = state.players;
      playersClone.forEach(player => {
        if (player.id == playerId) {
          player.scores[column] = score;
        }
      });

      state.players = playersClone;
    }
  },
  actions: {}
});
