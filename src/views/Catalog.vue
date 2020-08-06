<template>
    <div class="catalog">
        <swiper class="swiper" ref="mySwiper" :options="swiperOption">
            <swiper-slide class="slide" v-for="item in bgnds.bg">
                <img class="slide__img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
    .swiper {
        width: 100%;
        height: 95vh;
    }
    .slide__img {
        width: 100%;
        height: 95vh;
        display: block;
    }
</style>

<script>
import catalogitem from './CatalogItem';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                initialSlide: 0,
                effect: 'fade',
                autoplay: {
                    delay: 2500,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets'
                },
            },
            vendor: this.$route.params.vendor,
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
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
        Swiper,
        SwiperSlide
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.autoplay.start();
    }
}
</script>

