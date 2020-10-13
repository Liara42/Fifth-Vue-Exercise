Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(value) {
      const that = this;
      if (value === 37) {
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },
  computed: {
    checkResult() {
      if (this.result === 0) {
        return '';
      } else if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result > 37) {
        return 'Too much!';
      }
    },
  },
  methods: {
    addFive() {
      return (this.result += 5);
    },
    addOne() {
      return this.result++;
    },
  },
}).mount('#assignment');
