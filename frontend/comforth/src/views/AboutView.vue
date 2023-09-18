<template>
  <div class="mid">
            <h3 class="txt">
              {{message}}
            </h3>
        </div>
        <div class="back">
            <h2>Why we started:</h2>
            <p>At comForth, our journey began with a simple but profound question: "How can we make the world a more comfortable and connected place?" This question ignited a passion within us, inspiring the creation of a company dedicated to enhancing lives through innovative products and heartfelt experiences.
The Seed of Inspiration
Our founders were driven by a deep desire to improve everyday living. They saw a world filled with fast-paced living, constant distractions, and a growing disconnect between people and their surroundings. This disconnect troubled them, and they felt compelled to do something about it.</p>
        </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      index: 0,
      speed: 100,
      text: 'Things About ComForth You should Know.'
    };
  },
  mounted() {
    this.typing();
  },
  methods: {
    typing() {
      if (this.index < this.text.length) {
        this.message += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.typing, this.speed);
      }
    }
  }
};
</script>
<style scoped>
.txt{
    font-size: 60px;
    font-weight: 100;
    color:#d1774c;
    font-family: 'Berkelium Type', sans-serif;
}
.mid{
  margin-top:130px!important;
}
h2{
  font-family: 'Berkelium Type', sans-serif;
}
</style>