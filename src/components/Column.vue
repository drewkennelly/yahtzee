<template>
  <div class="column">
    <div class="flex flex-col">
      <div>
        <label v-show="number == 1">One</label>
        <input type="number" min="0" max="10" v-model.number="one" />
      </div>

      <div>
        <label v-show="number == 1">Two</label>
        <input type="number" min="0" max="10" v-model.number="two" />
      </div>

      <div>
        <label v-show="number == 1">Three</label>
        <input type="number" min="0" max="15" v-model.number="three" />
      </div>

      <div>
        <label v-show="number == 1">Four</label>
        <input type="number" min="0" max="20" v-model.number="four" />
      </div>

      <div>
        <label v-show="number == 1">Five</label>
        <input type="number" min="0" max="25" v-model.number="five" />
      </div>

      <div>
        <label v-show="number == 1">Six</label>
        <input type="number" min="0" max="36" v-model.number="six" />
      </div>

      <div>
        <label v-show="number == 1">Sub total</label>
        <input type="number" min="0" max="36" v-model.number="minor" class="disabled-readonly" />
      </div>

      <div>
        <label v-show="number == 1">Bonus</label>
        <input
          type="number"
          min="0"
          max="36"
          v-model.number="bonus"
          class="disabled-readonly"
          :class="bonusStyle"
        />
      </div>

      <div>
        <label v-show="number == 1">Total 1</label>
        <input type="number" min="0" max="36" v-model.number="subTotal" class="disabled-readonly" />
      </div>

      <div>
        <label v-show="number == 1">Three of a kind</label>
        <input type="number" min="0" max="30" v-model.number="threeOfAKind" />
      </div>

      <div>
        <label v-show="number == 1">Four of a kind</label>
        <input type="number" min="0" max="30" v-model.number="fourOfAKind" />
      </div>

      <div>
        <label v-show="number == 1">Full house</label>
        <input type="number" min="0" max="25" v-model.number="fullHouse" />
      </div>
      <div>
        <label v-show="number == 1">Small straight</label>
        <input type="number" min="0" max="27" v-model.number="smallStraight" />
      </div>

      <div>
        <label v-show="number == 1">Large straight</label>
        <input type="number" min="0" max="26" v-model.number="largeStraight" />
      </div>

      <div>
        <label v-show="number == 1">Yahtzee</label>
        <input type="number" min="0" max="50" v-model.number="yatzy" />
      </div>

      <div>
        <label v-show="number == 1">Chance</label>
        <input type="number" min="0" max="30" v-model.number="chance" />
      </div>

      <div>
        <label v-show="number == 1">Total 2</label>
        <input type="number" min="0" max="30" v-model.number="major" class="disabled-readonly" />
      </div>

      <div>
        <label v-show="number == 1">Total</label>
        <input type="number" min="0" max="30" v-model.number="total" class="disabled-readonly" />
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
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yatzy: 0,
      chance: 0
    };
  },
  computed: {
    minor() {
      return Number(
        (this.one + this.two + this.three + this.four + this.five + this.six) *
          this.number
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
      return Number(this.minor + this.bonus);
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
      return {
        "bg-green-300": this.bonus == 35
      };
    }
  }
};
</script>
