<template>
    <header :class="{active__header: scroll}">
        <router-link tag="div" to="/" class="header__title">
            Car Shop
        </router-link>
        <nav>
            <ul class="nav__list">
                <div class="nav__list__header">
                    <button class="close__menu">
                        <img class="close__menu__icon" src="../assets/icons/times-circle-regular.svg" alt="">
                    </button>
                </div>
                <router-link  tag="li" :to="{name: 'catalog', params: { vendor: 'mercedes' }}" active-class="active__link" class="nav__list__item">
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
        <button class="burger__menu">
            <span class="burger__item"></span>
        </button>
    </header>
</template>

<style lang="scss" scoped>
    header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        padding: 15px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        transition: .2s linear;
        background-color: rgba(255,255,255,0.5);
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
                margin-right: 25px;
            }
            &__link {
                text-decoration: none;
                color: #000;
                font-size: 17px;
                font-weight: 600;
                padding: 2px 4px;
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
.active__link,
.nav__list__item {
    position: relative;
    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: black;
        content: '';
        border-radius: 10px;
        transition: .2s linear;
        transform: scaleX(0);
    }
}
.nav__list__item:hover:before {
    transform: scaleX(1);
}
.active__link::before {
    transform: scaleX(1);
}
.close__menu {
    display: none;
}
.burger__menu {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    display: none;
    &:focus {
        outline: none;
    }
}
.burger__item {
    width: 30px;
    height: 2px;
    background-color: black;
    display: block;
    position: relative;
    &:before {
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: black;
        content: '';
    }
    &:after {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: black;
        content: '';
    }
}
.nav__list__header {
    display: none;
}
@media(max-width: 992px) {
    nav {
        position: fixed;
        min-height: 100vh;
        top: 0;
        right: 0;
        background-color: rgba(255,255,255,0.9);
        z-index: 9999;
        width: 320px;
        transform: translateX(340px);
        z-index: 999999999999;
        transition: .2s linear;
    }
    nav.active__menu {
        transform: translateX(0);
    }
    .nav__list__item__link {
        display: block;
        text-align: center;
        padding: 10px 0;
    }
    .nav__list {
        flex-direction: column;
    }
    .nav__list__item  {
        &:not(:last-child) {
            margin-right: 0;
        }
        margin-bottom: 10px;
        display: inline-block;
    }
    .close__menu {
        display: block;
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: auto;
        margin-bottom: 20px;
        border: none;
        background-color: transparent;
        margin-top: 20px;
        margin-right: 20px;
        &:focus {
            outline: none;
        }
    }
    .header__basket {
        margin-left: auto;
    }
    .burger__menu {
        display: inline-block;
    }
    .nav__list__header {
        display: block;
        &::after {
            display: block;
            content: '';
            width: 100%;
            height: 2px;
            background-color: black;
        }
    }
    .close__menu__icon {
        pointer-events: none;
    }
}
@media(max-width: 760px) {
    header {
        padding: 15px 30px;
    }
    header.active__header {
        padding: 15px 30px;
    }
}
@media(max-width: 500px) {
    .header__title  {
        font-size: 30px;
    }
    header {
        padding: 15px 15px;
    }
    header.active__header {
        padding: 15px 15px;
    }
}
</style>

<script>
export default {
    data() {
        return {
            scroll: false,
            color: 'white',
            basket: '/img/shopping-cart-solid1.757b71f9.svg',
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
        },
        openMenu() {
            let menu = document.querySelector('nav');
            let mask = document.querySelector('.modal__mask');
            if(event.target.closest('.burger__menu')) { 
                mask.style.display = 'block';
                menu.classList.add('active__menu');
            }
            if(event.target.className === 'modal__mask' || event.target.classList.contains('close__menu')) {
                menu.classList.remove('active__menu');
                mask.style.display = 'none';
            }
        }
    },
    computed: {
        basketChecker() {
            return this.$store.getters.getBasket
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.openMenu);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', this.openMenu);
    }
}
</script>