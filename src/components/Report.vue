<template>
  <v-container>
    <canvas class="w-25 h-25" id="myChart"></canvas>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    this.renderChart();
  },
  computed: {
    chartData() {
      return {
        labels: ["Físico", "Digital"],
        datasets: [
          {
            data: [
              this.$store.state.origin.digital,
              this.$store.state.origin.physical,
            ],
            backgroundColor: ["#64B5F6", "#4DB6AC"],
            hoverOffset: 1,
          },
        ],
      };
    },
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById("myChart");
      this.myChartOrigin = new Chart(ctx, {
        type: "pie",
        data: this.chartData,
      });
    },
    updateChart() {
      this.myChartOrigin.data.datasets[0].data = [
        this.$store.state.origin.physical,
        this.$store.state.origin.digital,
      ];
      this.myChartOrigin.update();
    },
  },
  watch: {
    "$store.state.origin": {
      handler() {
        this.updateChart();
      },
      deep: true,
    },
  },
};
</script>
