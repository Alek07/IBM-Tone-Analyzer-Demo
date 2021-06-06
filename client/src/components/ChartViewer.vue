<template>
  <section class="charts_container">
    <div v-if="loading">
      <Lottie
        :options="defaultOptions"
        :height="400"
        :width="400"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <div
      v-else
      class="chart_wrapper"
      v-for="(item, index) in analyzed_data"
      :key="index"
    >
      <h3>{{ item.sentence || "" }}</h3>
      <Lottie
        v-if="item.ChartData.labels.length === 0"
        :options="defaultOptions2"
        :height="400"
        :width="400"
        v-on:animCreated="handleAnimation"
      />

      <Chart v-else :chartData="item.ChartData" :options="chartOptions" />
    </div>
  </section>
</template>

<script>
import Chart from "./Doughnut";
import { mapState } from "vuex";
import Lottie from "vue-lottie";
import dino_dance_loading from "../assets/2469-dino-dance.json";
import no_data from "../assets/629-empty-box.json";

export default {
  data: () => ({
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    defaultOptions: { animationData: dino_dance_loading },
    defaultOptions2: { animationData: no_data },
    animationSpeed: 1,
  }),
  components: {
    Lottie,
    Chart,
  },
  computed: {
    ...mapState(["analyzed_data", "loading"]),
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  },
};
</script>

<style>
.charts_container {
  width: 80%;
  margin: 2rem auto;
  align-self: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chart_wrapper {
  padding: 1.5rem;
}
</style>
