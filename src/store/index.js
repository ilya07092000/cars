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
    cars: [
      {
        id: 1, 
        vendor: 'mercedes', 
        title: 'BRABUS 450 - MERCEDES-AMG C 43', 
        price: 86.884, 
        img: "https://www.brabus.com/_Resources/Persistent/0/f/4/b/0f4bfde5d96d0f0875c17e62b13cd1b81a1e345e/C4S_190%20%2820%29-730x411.jpg?bust=0f4bfde5",
        itemImg: [
          "https://www.brabus.com/_Resources/Persistent/9/3/b/1/93b16a7a7f16b222c7d8e2c7ce2255063fe918c1/C4S_190%20%2810%29.jpg?bust=93b16a7a",
          "https://www.brabus.com/_Resources/Persistent/0/f/4/b/0f4bfde5d96d0f0875c17e62b13cd1b81a1e345e/C4S_190%20%2820%29-730x411.jpg?bust=0f4bfde5",
          "https://www.brabus.com/_Resources/Persistent/2/c/4/2/2c428688c834255885e3f2bdc6bf4ef688a83a7b/C4S_190%20%2816%29.jpg?bust=2c428688",
          "https://www.brabus.com/_Resources/Persistent/6/3/1/7/6317c7e32bd3dff25abdfb0ecfb435f5edc282d3/C4S_190%20%2818%29.jpg?bust=6317c7e3"
        ]
      }, 
      {
        id: 2, 
        vendor: 'bmw', 
        title: ' BMW M850i xDrive Gran Coupé ', 
        price: 60.000, 
        img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545J6blJyFn%25ab6djW8JoJMN9q0zsarQb9%25cQSW7%25fe8A9qoQaFboGlBgvHdvl38SN3uRIMESyxv0Mb3GKNcYiRW8J4MESbd59uyJRDaJcmAW7%25iKnrQbwoEg52q0zMb3NQbb6yFnI52oirQbUoaFoGq0zdAH9Rl382hhq0zkRNSQBL4QSW8zLAd8W8JYHltW7%25FAdyW8Jj4RN3tucYiYHqoQqRrjGr9oQJW8zWunfIqogqaJoDl3ilUQTCcRScH8ZfMbnMd09RyJGy5BRbrQ%25r9YbFW8zWuEFCqogqaFjHl3ilUj4jcRScH78lMbnMd0zqyJGy5iubrQ%25r9S3DW8zWunRRqogqaGC7l3ilU%25FjcRScHzmiMbnMdgoRyJGy5idprQ%25r9SMBW8zWunsdqogqaGo5l3ilU%253%25cRScHzDYMbnMde90yJGy5m3SrQ%25r9sRmW8zWuKbtqogqaDnal3ilUCGRcRScHbeiMbnMdJoiyJGy5Q3drQ%25r98R9W8zWuobSqogqa3Gzl3ilURaQcRScHbRfMbnMdJCYyJGy55oarQ%25r9tiDW8JPHmoG6acYiyhFQcRox3upcYirQbpcYiRHd59Mb3VR%25IeyFnJomuyJR1lBgyJn859Mb35q0z9aUW8J4dxxW7%25cRot3tz4MESH",
        itemImg: [
          "https://www.brabus.com/_Resources/Persistent/9/3/b/1/93b16a7a7f16b222c7d8e2c7ce2255063fe918c1/C4S_190%20%2810%29.jpg?bust=93b16a7a",
          "https://www.brabus.com/_Resources/Persistent/0/f/4/b/0f4bfde5d96d0f0875c17e62b13cd1b81a1e345e/C4S_190%20%2820%29-730x411.jpg?bust=0f4bfde5",
          "https://www.brabus.com/_Resources/Persistent/2/c/4/2/2c428688c834255885e3f2bdc6bf4ef688a83a7b/C4S_190%20%2816%29.jpg?bust=2c428688",
          "https://www.brabus.com/_Resources/Persistent/6/3/1/7/6317c7e32bd3dff25abdfb0ecfb435f5edc282d3/C4S_190%20%2818%29.jpg?bust=6317c7e3"
        ]
      },
    ],
    basket: [],
  },
  mutations: {
    addToBasket(state, payload) {
      state.basket.push(payload)
    },
    addQuantity(state, payload) {
      let item = state.basket.findIndex(item => item.id === payload.id);
      state.basket[item].quantity += 1;
    }
  },
  actions: {
    addToBasket({commit}, payload) {
      commit('addToBasket', payload)
    },
    addQuantity({commit}, payload) {
      commit('addQuantity', payload)
    }
  },
  getters: {
    getbg: state => vendor => state.bgnds.find(bg => bg.vendor == vendor),
    getcars: state => vendor => state.cars.filter(car => car.vendor == vendor),
    getThisCar: state => id => state.cars.find(car => car.id == id),
    getBasket: state => state.basket
  }
})
