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
        <input type="number" v-model.number="yatzy" :placeholder="placeholders.yatzy" />
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
  props: ["number"],
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
      yatzy: "",
      chance: ""
    };
  },
  computed: {
    remainingForBonus() {
      if (this.minor < 63) {
        return 63 - this.minor;
      }

      return 0;
    },
    placeholders() {
      let six = 0;
      if (this.six == "") {
        if (this.remainingForBonus >= 6) {
          let sixesRequired = Math.ceil(this.remainingForBonus / 6);
          if (sixesRequired >= 5) {
            six = 5;
            let remaining = this.remainingForBonus - 30;
            console.log("Remaining: ", remaining);
          }
        }
      }

      return {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: six,
        threeOfAKind: 0,
        fourOfAKind: 0,
        fullHouse: 0,
        smallStraight: 0,
        largeStraight: 0,
        yatzy: 0,
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
      return Number(
        (this.threeOfAKind +
          this.fourOfAKind +
          this.fullHouse +
          this.smallStraight +
          this.largeStraight +
          this.yatzy +
          this.chance) *
          this.number
      );
    },
    total() {
      return Number(this.subTotal + this.major);
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
