<template>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide class="slide" v-for="item in items">
            <img class="slide__img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<style scoped>
    .swiper {
            width: 100%;
            height: 95vh;
    }
    .slide__img {
        width: 100%;
        height: 95vh;
        display: block;
    }
    @media(max-width: 1200px) {
        .swiper,
        .slide__img {
            height: 75vh;
        }
    }
    @media(max-width: 992px) {
        .swiper,
        .slide__img {
            height: 60vh;
        }
    }
</style>

<script>
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
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
    props: ['items'],
    mounted() {
      this.swiper.autoplay.start();
    }
}
</script>