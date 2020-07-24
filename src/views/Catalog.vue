<template>
    <div class="catalog">
        <div class="catalog__header" :style="{backgroundImage: currentBg.bg}">
            <h1 class="vendor">{{ vendor }}</h1>
        </div>
        <div class="catalog__items">
            <div class="catalog__item">
                
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .catalog__header {
        height: 90vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
    }
    .vendor {
        padding-top: 100px;
        text-transform: uppercase;
        color: #fff;
        font-size: 70px;
    }
</style>

<script>

export default {
    data() {
        return {
            vendor: this.$route.params.vendor
        }
    },
    computed: {
        bgnds() {
            return this.$store.getters.allbg;
        },
        currentBg() {
            return this.bgnds.find(item => item.vendor == this.vendor)
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.vendor = to.params.vendor;
        next();
    },
}
</script>