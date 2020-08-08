import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgnds: [
      {vendor: 'mercedes', 
        bg: [
          '/cars/img/mercedes/slide-1.jpg',
          '/cars/img/mercedes/slide-2.jpg',
          '/cars/img/mercedes/slide-3.jpg',
        ]},
      {vendor: 'bmw', 
        bg: [
          '/cars/img/bmw/slide-1.jpg',
          '/cars/img/bmw/slide-2.jpg',
          '/cars/img/bmw/slide-3.jpg',
        ]},
      {vendor: 'audi', 
        bg: [
          '/cars/img/audi/slide-1.webp',
          '/cars/img/audi/slide-2.jpg',
          '/cars/img/audi/slide-3.jpg',
        ] },
      {vendor: 'rolls-royce', bg: [
        '/cars/img/rolls-royce/slide-1.jpg',
        '/cars/img/rolls-royce/slide-2.jpeg',
        '/cars/img/rolls-royce/slide-3.jpg',
      ]},
      {vendor: 'bentley', bg: [
        '/cars/img/bentley/slide-1.jpg',
        '/cars/img/bentley/slide-2.jpg',
        '/cars/img/bentley/slide-3.jpg',
      ] }
    ],
    landingImg: [
      '/cars//img/landing/landing-1.jpg',
      '/cars//img/landing/landing-2.jpg',
      '/cars//img/landing/landing-3.jpg',
      '/cars//img/landing/landing-4.jpg',
    ],
    bestSellers: [
      {
        id: 2, 
        vendor: 'mercedes', 
        title: 'BRABUS 800 BLACK & GOLD EDITION', 
        price: 441.612,
        volume: '4 L', 
        engine: '8-Cylinder',
        power: '800 HP',
        fuel: '16,6 l/100km', 
        img: "/cars/img/mercedes/b800-2.jpg",
        itemImg: [
          "/cars/img/mercedes/b800-1.jpg",
          "/cars/img/mercedes/b800-2.jpg",
          "/cars/img/mercedes/b800-3.jpg",
          "/cars/img/mercedes/b800-4.jpg",
        ]
      }, 
      {
        id: 5, 
        vendor: 'audi', 
        title: 'Audi A7 Sportback', 
        volume: '3 L',
        price: 63.000,
        engine: '6-Cylinder',
        power: '340 HP',
        fuel: '6,9 l/100km', 
        img: "/cars/img/audi/a7-1.jpg",
        itemImg: [
          "/cars/img/audi/a7-1.jpg",
          "/cars/img/audi/a7-2.jpg",
          "/cars/img/audi/a7-3.jpg",
          "/cars/img/audi/a7-4.jpg",
        ]
      }, 
      {
        id: 4, 
        vendor: 'bmw', 
        title: 'BMW 7 SERIES 750Li', 
        volume: '4,4 L',
        price: 98.000,
        engine: '8-Cylinder',
        power: '450 HP',
        fuel: '8,4 l/100km', 
        img: "/cars/img/bmw/7s-1.jpg",
        itemImg: [
          "/cars/img/bmw/7s-1.jpg",
          "/cars/img/bmw/7s-2.jpg",
          "/cars/img/bmw/7s-3.jpg",
          "/cars/img/bmw/7s-4.jpeg",
        ]
      }, 
      {
        id: 9, 
        vendor: 'bentley', 
        title: 'BENTLEY CONTINENTAL GT', 
        volume: '6 L',
        price: 200.000,
        engine: '12-Cylinder',
        power: '635 HP',
        fuel: '10 l/100km', 
        img:  "/cars/img/bentley/bc-1.jpg",
        itemImg: [
          "/cars/img/bentley/bc-1.jpg",
          "/cars/img/bentley/bc-2.jpg",
          "/cars/img/bentley/bc-3.jpg",
          "/cars/img/bentley/bc-4.jpg",
        ]
      }, 
      {
        id: 11, 
        vendor: 'mercedes', 
        title: 'Mercedes S-Class (W222)', 
        volume: '4 L',
        price: 110.000,
        engine: '8-Cylinder',
        power: '469 HP',
        fuel: '11.6 l/100km', 
        img: "/cars/img/mercedes/w222-1.jpg",
        itemImg: [
          "/cars/img/mercedes/w222-1.jpg",
          "/cars/img/mercedes/w222-2.jpg",
          "/cars/img/mercedes/w222-3.jpg",
          "/cars/img/mercedes/w222-4.jpg",
        ]
      }, 
    ],
    cars: [
      {
        id: 1, 
        vendor: 'mercedes', 
        title: 'BRABUS 450 - MERCEDES-AMG C 43',
        volume: '4,4 L', 
        price: 86.884, 
        engine: '8-Cylinder',
        power: '400 HP',
        fuel: '18,3 l/100km', 
        img: "/cars/img/mercedes/C43-1.jpg",
        itemImg: [
          "/cars/img/mercedes/C43-2.jpg",
          "/cars/img/mercedes/C43-3.jpg",
          "/cars/img/mercedes/C43-4.jpg",
          "/cars/img/mercedes/C43-5.jpg"
        ]
      }, 
      {
        id: 2, 
        vendor: 'mercedes', 
        title: 'BRABUS 800 BLACK & GOLD EDITION', 
        price: 441.612,
        volume: '4 L', 
        engine: '8-Cylinder',
        power: '800 HP',
        fuel: '16,6 l/100km', 
        img: "/cars/img/mercedes/b800-2.jpg",
        itemImg: [
          "/cars/img/mercedes/b800-1.jpg",
          "/cars/img/mercedes/b800-2.jpg",
          "/cars/img/mercedes/b800-3.jpg",
          "/cars/img/mercedes/b800-4.jpg",
        ]
      }, 
      {
        id: 3, 
        vendor: 'bmw', 
        title: 'BMW X7', 
        volume: '3 L',
        price: 73.000,
        engine: '6-Cylinder',
        power: '340 HP',
        fuel: '14,6 l/100km', 
        img: "/cars/img/bmw/x7-1.jpg",
        itemImg: [
          "/cars/img/bmw/x7-1.jpg",
          "/cars/img/bmw/x7-2.jpg",
          "/cars/img/bmw/x7-3.jpg",
          "/cars/img/bmw/x7-4.jpg",
        ]
      }, 
      {
        id: 4, 
        vendor: 'bmw', 
        title: 'BMW 7 SERIES 750Li', 
        volume: '4,4 L',
        price: 98.000,
        engine: '8-Cylinder',
        power: '450 HP',
        fuel: '8,4 l/100km', 
        img: "/cars/img/bmw/7s-1.jpg",
        itemImg: [
          "/cars/img/bmw/7s-1.jpg",
          "/cars/img/bmw/7s-2.jpg",
          "/cars/img/bmw/7s-3.jpg",
          "/cars/img/bmw/7s-4.jpeg",
        ]
      }, 
      {
        id: 5, 
        vendor: 'audi', 
        title: 'Audi A7 Sportback', 
        volume: '3 L',
        price: 63.000,
        engine: '6-Cylinder',
        power: '340 HP',
        fuel: '6,9 l/100km', 
        img: "/cars/img/audi/a7-1.jpg",
        itemImg: [
          "/cars/img/audi/a7-1.jpg",
          "/cars/img/audi/a7-2.jpg",
          "/cars/img/audi/a7-3.jpg",
          "/cars/img/audi/a7-4.jpg",
        ]
      }, 
      {
        id: 6, 
        vendor: 'audi', 
        title: 'Audi Q8', 
        volume: '3 L',
        price: 60.000,
        engine: '6-Cylinder',
        power: '340 HP',
        fuel: '8,4 l/100km', 
        img:  "/cars/img/audi/q8-1.jpg",
        itemImg: [
          "/cars/img/audi/q8-1.jpg",
          "/cars/img/audi/q8-2.jpg",
          "/cars/img/audi/q8-3.jpg",
          "/cars/img/audi/q8-4.jpg",
        ]
      }, 
      {
        id: 7, 
        vendor: 'rolls-royce', 
        title: 'Rolls-Royce Cullinan', 
        volume: '6,7 L',
        price: 407.000,
        engine: '12-Cylinder',
        power: '571 HP',
        fuel: '15 l/100km', 
        img: "/cars/img/rolls-royce/rrc-1.jpg",
        itemImg: [
          "/cars/img/rolls-royce/rrc-1.jpg",
          "/cars/img/rolls-royce/rrc-2.jpg",
          "/cars/img/rolls-royce/rrc-3.jpg",
          "/cars/img/rolls-royce/rrc-4.jpg",
        ]
      }, 
      {
        id: 8, 
        vendor: 'rolls-royce', 
        title: 'Rolls-Royce Wraith', 
        volume: '6,6 L',
        price: 390.000,
        engine: '12-Cylinder',
        power: '632 HP',
        fuel: '14,3 l/100km', 
        img: "/cars/img/rolls-royce/rrw-1.jpg",
        itemImg: [
          "/cars/img/rolls-royce/rrw-1.jpg",
          "/cars/img/rolls-royce/rrw-2.jpg",
          "/cars/img/rolls-royce/rrw-3.jpg",
          "/cars/img/rolls-royce/rrw-4.jpg",
        ]
      }, 
      {
        id: 9, 
        vendor: 'bentley', 
        title: 'BENTLEY CONTINENTAL GT', 
        volume: '6 L',
        price: 200.000,
        engine: '12-Cylinder',
        power: '635 HP',
        fuel: '10 l/100km', 
        img:  "/cars/img/bentley/bc-1.jpg",
        itemImg: [
          "/cars/img/bentley/bc-1.jpg",
          "/cars/img/bentley/bc-2.jpg",
          "/cars/img/bentley/bc-3.jpg",
          "/cars/img/bentley/bc-4.jpg",
        ]
      }, 
      {
        id: 10, 
        vendor: 'bentley', 
        title: 'Bentley Bentayga', 
        volume: '4 L',
        price: 240.000,
        engine: '8-Cylinder',
        power: '550 HP',
        fuel: '13 l/100km', 
        img: "/cars/img/bentley/bb-1.jpg",
        itemImg: [
          "/cars/img/bentley/bb-1.jpg",
          "/cars/img/bentley/bb-2.jpg",
          "/cars/img/bentley/bb-3.jpg",
          "/cars/img/bentley/bb-4.jpg",
        ]
      }, 
      {
        id: 11, 
        vendor: 'mercedes', 
        title: 'Mercedes S-Class (W222)', 
        volume: '4 L',
        price: 110.000,
        engine: '8-Cylinder',
        power: '469 HP',
        fuel: '11.6 l/100km', 
        img: "/cars/img/mercedes/w222-1.jpg",
        itemImg: [
          "/cars/img/mercedes/w222-1.jpg",
          "/cars/img/mercedes/w222-2.jpg",
          "/cars/img/mercedes/w222-3.jpg",
          "/cars/img/mercedes/w222-4.jpg",
        ]
      }, 
      {
        id: 12, 
        vendor: 'mercedes', 
        title: 'Mercedes GLE-Class Coupe (C167)', 
        volume: '3 L',
        price: 95.000,
        engine: '6-Cylinder',
        power: '435 HP',
        fuel: '11.7 l/100km', 
        img: "/cars/img/mercedes/c167-1.jpg",
        itemImg: [
          "/cars/img/mercedes/c167-1.jpg",
          "/cars/img/mercedes/c167-2.jpg",
          "/cars/img/mercedes/c167-3.jpg",
          "/cars/img/mercedes/c167-4.jpg",
        ]
      }, 
      {
        id: 13, 
        vendor: 'bmw', 
        title: 'BMW M4 Coupe (F82)', 
        volume: '3 L',
        price: 79.000,
        engine: '6-Cylinder',
        power: '431 HP',
        fuel: '12 l/100km', 
        img: "/cars/img/bmw/m4-1.jpg",
        itemImg: [
          "/cars/img/bmw/m4-1.jpg",
          "/cars/img/bmw/m4-2.jpg",
          "/cars/img/bmw/m4-3.jpg",
          "/cars/img/bmw/m4-4.jpg",
        ]
      }, 
      {
        id: 14, 
        vendor: 'bmw', 
        title: 'BMW X6 M (F96)', 
        volume: '4.4 L',
        price: 92.000,
        engine: '8-Cylinder',
        power: '600 HP',
        fuel: '16.8 l/100km', 
        img: "/cars/img/bmw/x6-1.jpg",
        itemImg: [
          "/cars/img/bmw/x6-1.jpg",
          "/cars/img/bmw/x6-2.jpg",
          "/cars/img/bmw/x6-3.jpg",
          "/cars/img/bmw/x6-4.jpg",
        ]
      }, 
      {
        id: 15, 
        vendor: 'audi', 
        title: 'Audi S6', 
        volume: '3 L',
        price: 72.000,
        engine: '6-Cylinder',
        power: '349 HP',
        fuel: '7.4 l/100km', 
        img: "/cars/img/audi/s6-1.jpg",
        itemImg: [
          "/cars/img/audi/s6-1.jpg",
          "/cars/img/audi/s6-2.jpg",
          "/cars/img/audi/s6-3.jpg",
          "/cars/img/audi/s6-4.jpg",
        ]
      }, 
    ],
    basket: [],
  },
  mutations: {
    addToBasket(state, payload) {
      state.basket.push(payload)
      console.log(state.basket)
    },
    addQuantity(state, payload) {
      payload.id = Number(payload.id)
      let item = state.basket.findIndex(item => item.id === payload.id);
      state.basket[item].quantity += 1;
    },
    minusQuantity(state, payload) {
      payload.id = Number(payload.id)
      let item = state.basket.findIndex(item => item.id === payload.id);
      if(state.basket[item].quantity > 1) {
        state.basket[item].quantity -= 1;
      }
    },
    removeItem(state, payload) {
      let item = state.basket.findIndex(item => item.id == Number(payload.id));
      state.basket.splice(item, 1);
    }
  },
  actions: {
    addToBasket({commit}, payload) {
      commit('addToBasket', payload)
    },
    addQuantity({commit}, payload) {
      commit('addQuantity', payload)
    },
    minusQuantity({commit}, payload) {
      commit('minusQuantity', payload)
    },
    removeItem({commit}, payload) {
      commit('removeItem', payload)
    }
  },
  getters: {
    getbg: state => vendor => state.bgnds.find(bg => bg.vendor == vendor),
    getcars: state => vendor => state.cars.filter(car => car.vendor == vendor),
    getThisCar: state => id => state.cars.find(car => car.id == id),
    getBasket: state => state.basket,
    getBestSellers: state => state.bestSellers,
    getLandingImg: state => state.landingImg,
  }
})
