<template>
  <div id="app">
    <app-layout>
    </app-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  components: {
    appLayout: MainLayout
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


