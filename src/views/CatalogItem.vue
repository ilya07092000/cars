<template>
  <div class="catalog__item">
    <router-link tag="a" :to="{name: 'title', params: { title: car.title, id: car.id, vendor: car.vendor }}" class="catalog__link" :car="car">
      <div class="catalog__item__icon">
        <img class="catalog__item__img" :src="car.img" alt />
      </div>
      <p class="catalog__item__title">{{ car.title }}</p>
      <p class="catalog__item__price">{{ car.price }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["car"],
};
</script>

<style lang="scss" scoped>
.catalog__item {
  width: 50%;
  padding: 50px 50px 20px 50px;
  font-family: 'Montserrat', sans-serif;
  transition: .2s linear;
  &:hover .catalog__item__title {
    text-decoration: underline;
  }
  &__img {
    max-width: 100%;
    width: 100%;
    height: auto;
    border-radius: 3px;
  }
  &__title {
    font-size: 18px;
    color: #000;
    margin-top: 10px;
    margin-left: 10px;
  }
  &__price {
    margin-left: 10px;
    margin-top: 5px;
    font-size: 14px;
    color: #000000bf;
  }
}
.catalog__link {
    text-decoration: none;
}
</style>