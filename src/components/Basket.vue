<template>
    <div class="basket">
        <div class="basket__header">
            <p class="quantity">Your cart (0)</p>
            <button class="basket__close">
                <img class="basket__close__icon" src="../assets/icons/times-circle-regular.svg" alt="">
            </button>
        </div>
        <div class="basket__body">
            <div class="basket__item">
                <div class="basket__item__photo">
                    <img src="https://www.brabus.com/_Resources/Persistent/0/f/4/b/0f4bfde5d96d0f0875c17e62b13cd1b81a1e345e/C4S_190%20%2820%29-730x411.jpg?bust=0f4bfde5" alt="" class="basket__item__icon">
                </div>
                <div class="basket__item__info">
                    <p class="basket__item__title">BRABUS 450 - MERCEDES-AMG C 43</p>
                    <p class="basket__item__price">100.000$</p>
                    <div class="basket__item__quantity">
                        <span class="basket__item__quantity__plus">-</span>
                        <span class="basket__item__quantity__number">100</span>
                        <span class="basket__item__quantity__minus">+</span>
                    </div>
                </div>
                <div class="basket__item__right">
                    <p class="basket__item__total">100.000$</p>
                    <button class="basket__item__remove"></button>
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
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 999999;
    opacity: 0;
    transform: translateX(calc(100% + 20px));
    transition: .2s linear;
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
        }
    },
    mounted() {
        window.addEventListener('click', this.closeModal);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.closeModal);
    }
}
</script>
