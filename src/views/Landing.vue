<template>
  <div id="app">
    <div class="intro">
        <slider :items = "landingImg">

        </slider>
    </div>
    <div class="best__container">
      <div class="best__header">
        <h1>Best Sellers</h1>
      </div>
      <div class="catalog__items">
            <catalogitem v-for="car in bestSellers" :car="car" :key="car.id">
                
            </catalogitem>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
    background-color: #f5f5f5;
}
.intro {
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 2px solid #e0dada;
}
.best__container {
  max-width: 2500px;
  width: 100%;
  padding-top: 20px;
  padding-right: 25px;
  margin: 0 auto;
}
.best__list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  &__item {
    width: 50%;
    padding: 25px 0 0 25px;
    margin-bottom: 15px;
    & a {
        text-decoration: none;
    }
  }
}
.best__item__title {
    font-family: 'Montserrat', sans-serif;
    color: black;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 18px;
}
.best__item__icon {
  max-width: 100%;
  width: 100%;
  height: auto;
}
.best__header {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    & h1 {
        font-weight: 500;
    }
}
.catalog__items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
}
@media(max-width: 760px) {
  .best__container {
    padding: 20px 0;
  }
}
</style>

<script>
import catalogitem from './CatalogItem';
import slider from '@/components/Slider'
export default {
  computed: {
    bestSellers() {
      return this.$store.getters.getBestSellers
    },
    landingImg() {
        return this.$store.getters.getLandingImg
    }
  },
  components: {
    catalogitem,
    slider
  }
}
</script>
