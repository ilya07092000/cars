<template>
    <div class="catalog">
        <div class="catalog__header" :style="{backgroundImage: currentBg.bg}">
            <h1 class="vendor">{{ vendor }}</h1>
        </div>
        <div class="catalog__items">
            <catalogitem v-for="car in currentCar" :car="car" :key="car.id">

            </catalogitem>
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
import catalogitem from './CatalogItem'
export default {
    data() {
        return {
            vendor: this.$route.params.vendor,
        }
    },
    computed: {
        bgnds() {
            return this.$store.getters.allbg;
        },
        cars() {
            return this.$store.getters.getcars;
        },
        currentBg() {
            return this.bgnds.find(item => item.vendor == this.vendor)
        },
        currentCar() {
            return this.cars.filter(car => car.vendor == this.vendor);
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.vendor = to.params.vendor;
        next();
    },
    components: {
        catalogitem,
    }
}
</script>

<style lang="scss" scoped>
.catalog {
    background-color: #f5f5f5;
    &__items {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>