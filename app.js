Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    checkResult() {
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    },
  },
  computed: {
    checkResult() {
      if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result === 37) {
        return this.result;
      } else if (this.result > 37) {
        return 'Too much!';
      }
    },
  },
  methods: {
    addNum(number) {
      return (this.result += number);
    },
  },
}).mount('#assignment');
