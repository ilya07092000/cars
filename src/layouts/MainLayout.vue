<template>
    <div id="app">
        <app-header></app-header>
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
        </transition>
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

<style lang="scss" scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s linear;
}
</style>

