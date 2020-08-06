<template>
    <div class="catalog">
        <slider :items = 'bgnds.bg'>

        </slider>
        <div class="catalog__items">
            <catalogitem v-for="car in cars" :car="car" :key="car.id">
                
            </catalogitem>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .catalog {
        background-color: #f5f5f5;
        &__items {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            max-width: 1600px;
            width: 100%;
            margin: 0 auto;
        }
    }
    .catalog__header {
        height: 90vh;
        width: 100%;
    }
    .vendor {
        padding-top: 100px;
        text-transform: uppercase;
        color: #fff;
        font-size: 70px;
    }
</style>

<script>
import catalogitem from './CatalogItem';
import slider from '@/components/Slider'
export default {
    data() {
        return {
            vendor: this.$route.params.vendor,
        }
    },
    computed: {
        bgnds() {
            return this.$store.getters.getbg(this.vendor)
        },
        cars() {
            return this.$store.getters.getcars(this.vendor)
        },
    },
    beforeRouteUpdate(to, from, next) {
        this.vendor = to.params.vendor;
        next();
    },
    components: {
        catalogitem,
        slider
    },
}
</script>

