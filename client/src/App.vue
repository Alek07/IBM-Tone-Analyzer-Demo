<template>
  <div id="app">
    <Header />
    <Form />
    <ChartViewer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Form from "./components/Form";
import ChartViewer from './components/ChartViewer.vue';

export default {
  name: "App",
  components: {
    Header,
    Form,
    ChartViewer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
