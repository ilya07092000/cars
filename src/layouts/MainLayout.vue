<template>
    <div id="app">
        <app-header></app-header>
        <app-basket></app-basket>
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
        </transition>
        <div class="modal__mask">

        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Basket from '../components/Basket'

export default {
    components: {
        appHeader: Header,
        appBasket: Basket,
    }
}
</script>

<style lang="scss">
.modal__mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
}
</style>

<style lang="scss" scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s linear;
}
</style>

