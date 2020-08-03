<template>
    <header :class="{active__header: scroll}">
        <router-link tag="div" to="/" class="header__title">
            Car Shop
        </router-link>
        <nav>
            <ul class="nav__list">
                <router-link tag="li" :to="{name: 'catalog', params: { vendor: 'mercedes' }}" active-class="active__link" class="nav__list__item">
                    <a class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
                <router-link tag="li" :to="{name: 'catalog', params: { vendor: 'bmw' }}" active-class="active__link" class="nav__list__item">
                     <a class="nav__list__item__link" href="#">BMW</a>
                </router-link>
                <router-link tag="li" :to="{name: 'catalog', params: { vendor: 'audi' }}" active-class="active__link" class="nav__list__item">
                     <a class="nav__list__item__link" href="#">Audi</a>
                </router-link>
                <router-link tag="li" :to="{name: 'catalog', params: { vendor: 'rolls-royce' }}" active-class="active__link" class="nav__list__item">
                    <a class="nav__list__item__link" href="#">Rolls Roys</a>
                </router-link>
                <router-link tag="li" :to="{name: 'catalog', params: { vendor: 'bentley' }}" active-class="active__link" class="nav__list__item">
                     <a class="nav__list__item__link" href="#">Bentley</a>
                </router-link>
            </ul>
        </nav>
        <div class="header__basket">
            <div class="header__basket__link" @click="openBasket">
                <img class="header__basket__icon" src='../assets/icons/shopping-cart-solid2.svg' alt="">
                <div v-show="basketChecker.length" class="basket__checker"></div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 9999;
        padding: 15px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        transition: .2s linear;
    }
    .active__header {
        background-color: #fff;
    }
    header.active__header {
        padding: 5px 50px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    }
    .header__title {
        font-family: 'Teko', sans-serif;
        font-size: 40px;
        width: 150px;
        cursor: pointer;
    }
    .header__basket {
        width: 150px;
        text-align: right;
        position: relative;
        &__icon {
            width: 25px;
            height: 25px;
        }
        &__link {
            width: 40px;
            height: 40px;
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
    .nav__list {
        display: flex;
        flex: 1;
        justify-content: center;
        &__item {
            list-style: none;
            &:not(:last-child) {
                margin-right: 30px;
            }
            &__link {
                text-decoration: none;
                color: #000;
                font-size: 17px;
                font-weight: 600;
            }
        }
    }
.basket__checker {
    width: 15px;
    height: 15px;
    background-color: green;
    border: 1px solid #fff;
    border-radius: 150px;
    position: absolute;
    top: 4px;
    right: 1px;
}
</style>

<script>
export default {
    data() {
        return {
            scroll: false,
            color: 'white',
            basket: '/img/shopping-cart-solid1.757b71f9.svg'
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 50) {
                this.scroll = true;
                this.color = 'black';
            } else {
                this.scroll = false;
                this.color = 'white';
            }
        },
        openBasket() {
            let basket = document.querySelector('.basket');
            let mask = document.querySelector('.modal__mask');
            mask.style.display = 'block';
            basket.classList.add('basket__active');
            document.body.style.overflow = 'hidden';
        }
    },
    computed: {
        basketChecker() {
            return this.$store.getters.getBasket
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>