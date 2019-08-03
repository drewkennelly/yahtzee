<template>
  <div class="column">
    <div class="flex flex-col">
      <div>
        <label v-show="number == 1">One</label>
        <input type="number" v-model.number="one" :placeholder="placeholders.one" />
      </div>

      <div>
        <label v-show="number == 1">Two</label>
        <input type="number" v-model.number="two" :placeholder="placeholders.two" />
      </div>

      <div>
        <label v-show="number == 1">Three</label>
        <input type="number" v-model.number="three" :placeholder="placeholders.three" />
      </div>

      <div>
        <label v-show="number == 1">Four</label>
        <input type="number" v-model.number="four" :placeholder="placeholders.four" />
      </div>

      <div>
        <label v-show="number == 1">Five</label>
        <input type="number" v-model.number="five" :placeholder="placeholders.five" />
      </div>

      <div>
        <label v-show="number == 1">Six</label>
        <input type="number" v-model.number="six" :placeholder="placeholders.six" />
      </div>

      <div class="bold-row">
        <label v-show="number == 1">Sub total</label>
        <input type="number" v-model.number="minor" class="disabled-readonly" disabled readonly />
      </div>

      <div class="bold-row">
        <label v-show="number == 1">Bonus</label>
        <input type="number" v-model.number="bonus" :class="bonusStyle" disabled readonly />
      </div>

      <div class="bold-row">
        <label v-show="number == 1">Total 1</label>
        <input type="number" v-model.number="subTotal" class="disabled-readonly" disabled readonly />
      </div>

      <div>
        <label v-show="number == 1">Three of a kind</label>
        <input type="number" v-model.number="threeOfAKind" :placeholder="placeholders.threeOfAKind" />
      </div>

      <div>
        <label v-show="number == 1">Four of a kind</label>
        <input type="number" v-model.number="fourOfAKind" :placeholder="placeholders.fourOfAKind" />
      </div>

      <div>
        <label v-show="number == 1">Full house</label>
        <input type="number" v-model.number="fullHouse" :placeholder="placeholders.fullHouse" />
      </div>
      <div>
        <label v-show="number == 1">Small straight</label>
        <input
          type="number"
          v-model.number="smallStraight"
          :placeholder="placeholders.smallStraight"
        />
      </div>

      <div>
        <label v-show="number == 1">Large straight</label>
        <input
          type="number"
          v-model.number="largeStraight"
          :placeholder="placeholders.largeStraight"
        />
      </div>

      <div>
        <label v-show="number == 1">Yahtzee</label>
        <input type="number" v-model.number="yahtzee" :placeholder="placeholders.yahtzee" />
      </div>

      <div>
        <label v-show="number == 1">Chance</label>
        <input type="number" v-model.number="chance" :placeholder="placeholders.chance" />
      </div>

      <div class="bold-row">
        <label v-show="number == 1">Total 2</label>
        <input type="number" v-model.number="major" class="disabled-readonly" disabled readonly />
      </div>

      <div class="bold-row">
        <label v-show="number == 1">Total</label>
        <input type="number" v-model.number="total" class="disabled-readonly" disabled readonly />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "column",
  props: ["number", "player"],
  data() {
    return {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      threeOfAKind: "",
      fourOfAKind: "",
      fullHouse: "",
      smallStraight: "",
      largeStraight: "",
      yahtzee: "",
      chance: ""
    };
  },
  watch: {
    total() {
      this.$store.commit("updateScores", {
        playerId: this.player,
        column: this.number,
        score: this.total
      });
    }
  },
  computed: {
    remainingForBonus() {
      if (this.minor < 63) {
        return 63 - this.minor;
      }

      return 0;
    },
    placeholders() {
      let remaining = this.remainingForBonus;

      let six = 0;
      if (this.six == "") {
        if (remaining >= 6) {
          let sixesRequired = Math.ceil(remaining / 6);
          if (sixesRequired >= 5) {
            six = 5;
            remaining = remaining - 30;
          } else {
            six = sixesRequired;
            remaining = remaining - sixesRequired * 6;
          }
        }
      }

      let five = 0;
      if (this.five == "") {
        if (remaining >= 5) {
          let fivesRequired = Math.ceil(remaining / 5);
          if (fivesRequired >= 5) {
            five = 5;
            remaining = remaining - 25;
          } else {
            five = fivesRequired;
            remaining = remaining - fivesRequired * 5;
          }
        }
      }

      let four = 0;
      if (this.four == "") {
        if (remaining >= 4) {
          let foursRequired = Math.ceil(remaining / 4);
          if (foursRequired >= 5) {
            four = 5;
            remaining = remaining - 20;
          } else {
            four = foursRequired;
            remaining = remaining - foursRequired * 4;
          }
        }
      }

      let three = 0;
      if (this.three == "") {
        if (remaining >= 3) {
          let threesRequired = Math.ceil(remaining / 3);
          if (threesRequired >= 5) {
            three = 5;
            remaining = remaining - 15;
          } else {
            three = threesRequired;
            remaining = remaining - threesRequired * 3;
          }
        }
      }

      let two = 0;
      if (this.two == "") {
        if (remaining >= 2) {
          let twosRequired = Math.ceil(remaining / 2);
          if (twosRequired >= 5) {
            two = 5;
            remaining = remaining - 10;
          } else {
            two = twosRequired;
            remaining = remaining - twosRequired * 2;
          }
        }
      }

      let one = 0;
      if (this.one == "") {
        if (remaining >= 1) {
          let onesRequired = remaining;
          if (onesRequired >= 5) {
            one = 5;
            remaining = remaining - 5;
          } else {
            one = onesRequired;
            remaining = remaining - onesRequired;
          }
        }
      }

      return {
        one: one,
        two: two,
        three: three,
        four: four,
        five: five,
        six: six,
        threeOfAKind: 0,
        fourOfAKind: 0,
        fullHouse: 25,
        smallStraight: 30,
        largeStraight: 40,
        yahtzee: 50,
        chance: 0
      };
    },
    minor() {
      return (
        Number(this.one) +
        Number(this.two) +
        Number(this.three) +
        Number(this.four) +
        Number(this.five) +
        Number(this.six)
      );
    },
    bonus() {
      let bonus = 0;
      if (this.minor >= 63) {
        bonus = 35;
      }

      return Number(bonus);
    },
    subTotal() {
      return this.minor * this.number + this.bonus;
    },
    major() {
      return (
        (Number(this.threeOfAKind) +
          Number(this.fourOfAKind) +
          Number(this.fullHouse) +
          Number(this.smallStraight) +
          Number(this.largeStraight) +
          Number(this.yahtzee) +
          Number(this.chance)) *
        this.number
      );
    },
    total() {
      return Number(this.subTotal) + Number(this.major);
    },
    bonusStyle() {
      let style = {};

      if (this.bonus == 35) {
        style = {
          "bg-green-300": true
        };
      } else {
        style = {
          "bg-transparent": true,
          "border-gray-100": true
        };
      }

      return style;
    }
  }
};
</script>
