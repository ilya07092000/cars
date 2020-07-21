<template>
    <header :class="{active__header: scroll}">
        <div class="header__title" :style="{color: color}">
            Car Shop
        </div>
        <nav>
            <ul class="nav__list">
                <router-link tag="li" to="/" active-class="active__link" class="nav__list__item">
                    <a :style="{ color: color }" class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
                <router-link tag="li" to="/" active-class="active__link" class="nav__list__item">
                     <a :style="{ color: color }" class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
                <router-link tag="li" to="/" active-class="active__link" class="nav__list__item">
                     <a :style="{ color: color }" class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
                <router-link tag="li" to="/" active-class="active__link" class="nav__list__item">
                    <a :style="{ color: color }" class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
                <router-link tag="li" to="/" active-class="active__link" class="nav__list__item">
                     <a :style="{ color: color }" class="nav__list__item__link" href="#">Mercedes-Benz</a>
                </router-link>
            </ul>
        </nav>
        <div class="header__basket">
            <router-link to="/" tag="a" class="header__basket__link">
                <img class="header__basket__icon" :src=basket alt="">
            </router-link>
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
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        transition: .2s linear;
    }
    .active__header {
        background-color: #fff;
    }
    header.active__header {
        padding: 5px 50px;
    }
    .header__title {
        font-family: 'Teko', sans-serif;
        font-size: 40px;
        width: 150px;
    }
    .header__basket {
        width: 150px;
        text-align: right;
        &__icon {
            width: 25px;
            height: 25px;
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
                color: #fff;
                font-size: 17px;
                font-weight: 600;
            }
        }

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
                this.basket= '/img/shopping-cart-solid.8bf1af37.svg'
            } else {
                this.scroll = false;
                this.color = 'white';
                this.basket = '/img/shopping-cart-solid1.757b71f9.svg';
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>