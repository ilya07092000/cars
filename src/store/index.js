import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgnds: [
      {vendor: 'mercedes', bg: "url('https://blog.mercedes-benz-passion.com/wp-cb4ef-content/uploads/CLA45_A45_GFOS_FOS_2019_Mercedes-AMG_421_PS_W177_C118_Bilder_2019_AMG_18.jpg')"},
      {vendor: 'bmw', bg: "url('https://www.autocentre.ua/wp-content/uploads/2019/10/70cf374f-2020-bmw-m8-gran-coupe-88.jpg')"},
      {vendor: 'audi', bg: "url('https://hevcars.com.ua/wp-content/uploads/2018/09/audi-e-tron-quattro-exterior-hevcars-22.jpg'"},
      {vendor: 'rolls-royce', bg: "url('https://cdn.motor1.com/images/mgl/q3PZg/s1/rolls-royce-cullinan-feature-image.jpg')"},
      {vendor: 'bentley', bg: "url('https://avtostat-info.com/Images/News/9287/Image.png')"}
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    allbg: state => state.bgnds
  }
})
