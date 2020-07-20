<template>
    <div id="app">
        <app-header></app-header>
        <div class="intro">

        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        appHeader: Header,
    }
}
</script>

<style scoped>
 .intro {
    min-height: 700px;
    width: 100%;
 }
</style>