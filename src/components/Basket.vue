<template>
    <div class="basket">
        <div class="basket__header">
            <p class="quantity">Your cart ({{ basketItems.length }})</p>
            <button class="basket__close">
                <img class="basket__close__icon" src="../assets/icons/times-circle-regular.svg" alt="">
            </button>
        </div>
        <div class="basket__body">
            <div class="basket__item" v-for="basketItem in basketItems" :id="basketItem.id">
                <div class="basket__item__photo">
                    <img :src="basketItem.img" alt="" class="basket__item__icon">
                </div>
                <div class="basket__item__info">
                    <p class="basket__item__title">{{ basketItem.title }}</p>
                    <p class="basket__item__price">{{ basketItem.price.toFixed(3) | price }}</p>
                    <div class="basket__item__quantity">
                        <span class="basket__item__quantity__plus" @click="minusQuantity">-</span>
                        <span class="basket__item__quantity__number">{{ basketItem.quantity }}</span>
                        <span class="basket__item__quantity__minus" @click="addQuantity">+</span>
                    </div>
                </div>
                <div class="basket__item__right">
                    <p class="basket__item__total">{{ Number(basketItem.price * basketItem.quantity).toFixed(3) | price}}</p>
                    <button class="basket__item__remove" @click="removeItem"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.basket {
    max-width: 550px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 999999;
    opacity: 0;
    transform: translateX(calc(100% + 20px));
    transition: .2s linear;
    overflow-y: scroll;
    &__body {
        height: 100%;
    }
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #000;
    }
    &__item {
        display: flex;
        align-items: center;
        padding: 30px;
        border-bottom: 1px solid #dbdbdb;
        &__icon {
            max-width: 80px;
            height: auto;
        }
        &__photo {
            margin-right: 15px;
        }
        &__title {
            max-width: 230px;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 8px;
        }
        &__right {
            display: flex;
            align-items: center;
            margin-left: auto;
        }
        &__total {
            margin-right: 20px;
        }
        &__quantity{
            margin-top: 5px;
            font-weight: 600;
            &__number {
                position: relative;
                font-size: 18px;
                margin: 0 10px;
            }
            &__plus,
            &__minus {
                cursor: pointer;
                font-size: 22px;
                font-weight: 700;
            }
        }
        &__remove {
            width: 20px;
            height: 20px;
            background: url('./../assets/icons/times-solid.svg') center no-repeat;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
    }
}
.basket.basket__active {
    transform: translateX(0);
    opacity: 1;
}
.basket__close__icon {
    width: 30px;
    height: 30px;
    pointer-events: none;
}
.basket__close {
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:focus {
        outline: none;
    }
}
</style>

<script>
export default {
    methods: {
        closeModal(event) {
            let basket = document.querySelector('.basket');
            let mask = document.querySelector('.modal__mask');
            if(event.target.className === 'basket__close') {
                basket.classList.remove('basket__active');
                mask.style.display = 'none';
                document.body.style.overflow = 'auto';

            } 
            let activeBasket = document.querySelector('.basket__active');
            if(event.target.classList.contains('modal__mask')) {
                basket.classList.remove('basket__active');
                mask.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        },
        addQuantity() {
            let id = event.target.closest('.basket__item').id;
            this.$store.dispatch('addQuantity', {
                id: id,
            })
        },
        minusQuantity() {
            let id = event.target.closest('.basket__item').id;
            this.$store.dispatch('minusQuantity', {
                id: id,
            })
        },
        removeItem() {
            let id = event.target.closest('.basket__item').id;
            let check = confirm("Are you sure?");
            if(check) {
                    this.$store.dispatch('removeItem', {
                    id: id,
                })
            }
        }
    },
    computed: {
        basketItems() {
            return this.$store.getters.getBasket;
        },
    },
    mounted() {
        window.addEventListener('click', this.closeModal);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.closeModal);
    }
}
</script>
