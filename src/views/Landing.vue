<template>
  <div id="app">
    <div class="intro">

    </div>
    <div class="best__container">
      <div class="best__header">
        <h1>Best Sellers</h1>
      </div>
      <div class="best">
        <ul class="best__list">
          <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
         <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
          <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
         <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
          <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
         <li class="best__list__item">
            <a href>
              <div class="best__item__img">
                <img class="best__item__icon" src="../assets/cars/brabus/brabus800.jpg" alt />
              </div>
              <p class="best__item__title">
                  BRABUS 800 BLACK & GOLD EDITION
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#app {
    background-color: #f5f5f5;
}
.intro {
  min-height: 90vh;
  width: 100%;
  background: url("../assets/landing/landing-intro1.jpg") no-repeat
    center/contain;
  position: relative;
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
</style>
