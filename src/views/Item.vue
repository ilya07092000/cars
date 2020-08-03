<template>
    <div class="item__inner">
        <div class="item__photos">
            <img v-for="img in car.itemImg" class="item__img" :src="img">
        </div>
        <div class="item__content">
            <p class="item__title">{{ car.title }}</p>
            <p class="item__price">Price: {{ car.price }}</p>
            <button class="item__add" @click="addToBasket">Add to cart</button>
            <p class="item__content__name">TECHNICAL DATA</p>
            <div class="item_content__text__box">
                <p class="item__content__text">Engine:</p>
                <p class="item__content__text">8-Cylinder</p>
            </div>
            <div class="item_content__text__box">
                <p class="item__content__text">Power:</p>
                <p class="item__content__text">400 HP</p>
            </div>
            <div class="item_content__text__box">
                <p class="item__content__text">FUEL ECONOMY:</p>
                <p class="item__content__text">18,3 l/100km</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carId: this.$route.params.id,
        }
    },
    computed: {
        car() {
            return this.$store.getters.getThisCar(this.carId)
        },
        basket() {
            return this.$store.getters.getBasket
        }
    },
    methods: {
        addToBasket() {
           if(this.checkBasket()) {
                this.$store.dispatch('addToBasket', {
                title: this.car.title,
                price: this.car.price,
                id: this.car.id,
                quantity: 1,
            })   
           } else {
               this.$store.dispatch('addQuantity', {
                   id: this.car.id
               })
           }
        },
        checkBasket() {
            for(let item of this.basket) {
                if(item.id === this.car.id) {
                    return false
                }
            }
            return true
        }
    },
    mounted() {
        this.carId = this.$route.params.id
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped>
    .item__inner {
        margin-top: 88px;
        padding: 30px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        min-height: 100vh;
        background-color: #f5f5f5;
    }
    .item__photos {
        width: 60%;
    }
    .item__img {
        max-width: 100%;
        width: 100%;
        height: auto;
        display: block;
        border-radius: 5px;
        margin-bottom: 25px;
    }
    .item__content {
        width: 40%;
        padding-left: 30px;
        font-family: 'Open Sans', sans-serif;
    }
    .item__title {
        font-size: 35px;
    }
    .item__price {
        font-size: 20px;
        font-weight: 600;
    }
    .item__add {
        border: none;
        background-color: #3e6ae1;
        color: #fff;
        display: inline-block;
        max-width: 300px;
        width: 100%;
        padding: 13px 0;
        margin-top: 20px;
        border-radius: 25px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        transition: .2s linear;
        &:hover {
            opacity: .8;
        }
    }
    .item__content__name {
        margin-top: 45px;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }
    .item_content__text__box {
        display: flex;
        justify-content: space-between;
        max-width: 350px;
        width: 100%;
        margin-bottom: 5px;
    }
    .item__content__text {
        width: 50%;
    }
</style>