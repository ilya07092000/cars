import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgnds: [
      {vendor: 'mercedes', 
        bg: [
          'https://blog.mercedes-benz-passion.com/wp-cb4ef-content/uploads/CLA45_A45_GFOS_FOS_2019_Mercedes-AMG_421_PS_W177_C118_Bilder_2019_AMG_18.jpg',
          'https://autoua.net/media/uploads/mercedes/2020-mercedes-benz-gls-class_(4).jpg',
          'https://auto.24tv.ua/resources/photos/news/930x523_DIR/201908/15286da427687-4f49-40f7-b16f-3f68708bc410.jpg?1566986247000'
        ]},
      {vendor: 'bmw', 
        bg: [
          'https://www.autocentre.ua/wp-content/uploads/2019/10/70cf374f-2020-bmw-m8-gran-coupe-88.jpg',
          'https://www.ixbt.com/img/n1/news/2019/11/4/dims_large.jpg',
          'https://i.infocar.ua/i/2/5594/106403/1920x.jpg'
        ]},
      {vendor: 'audi', 
        bg: [
          'https://hevcars.com.ua/wp-content/uploads/2018/09/audi-e-tron-quattro-exterior-hevcars-22.jpg',
          'https://autonewsf1.net/wp-content/uploads/2019/08/Audi-RS-6-Avant-2020-6-1400x700.jpg',
          'https://avtonam.ru/wp-content/uploads/2019/12/audi-rs5-2020-3.jpg'
        ] },
      {vendor: 'rolls-royce', bg: [
        'https://cdn.motor1.com/images/mgl/q3PZg/s1/rolls-royce-cullinan-feature-image.jpg',
        'https://i6.drivenn.ru/61monaoxnn0yi_5psz7q_h-1000/rolls-royce-cullinan-foto-1.jpeg',
        'https://cdn.motor1.com/images/mgl/jJjJe/s1/rolls-royce-phantom-with-privacy-suite.jpg'
      ]},
      {vendor: 'bentley', bg: [
       'https://avtostat-info.com/Images/News/9287/Image.png',
       'https://autoua.net/media/uploads/bentley/2020-bentley-flying-spur.jpg',
       'https://cdn.motor1.com/images/mgl/0mL2m/s1/2021-bentley-bentayga.jpg'
      ] }
    ],
    landingImg: [
      'https://blog.mercedes-benz-passion.com/wp-cb4ef-content/uploads/CLA45_A45_GFOS_FOS_2019_Mercedes-AMG_421_PS_W177_C118_Bilder_2019_AMG_18.jpg',
      'https://www.ixbt.com/img/n1/news/2019/11/4/dims_large.jpg',
      'https://cdn.motor1.com/images/mgl/q3PZg/s1/rolls-royce-cullinan-feature-image.jpg',
      'https://avtostat-info.com/Images/News/9287/Image.png'
    ],
    bestSellers: [
      {
        id: 11, 
        vendor: 'mercedes', 
        title: 'Mercedes S-Class (W222)', 
        volume: '4 L',
        price: 110.000,
        engine: '8-Cylinder',
        power: '469 HP',
        fuel: '11.6 l/100km', 
        img: "https://i.infocar.ua/i/2/5232/91917/1920x.jpg",
        itemImg: [
          "https://i.infocar.ua/i/2/5232/91917/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91918/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91919/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91921/1920x.jpg"
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
        img: "https://i.infocar.ua/i/12/6014/1400x700.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/6014/1400x700.jpg",
          "https://i.infocar.ua/i/2/6014/114673/1920x.jpg",
          "https://i.infocar.ua/i/2/6014/114674/1920x.jpg",
          "https://i.infocar.ua/i/2/6014/114675/1920x.jpg"
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
        img: "https://www.brabus.com/_Resources/Persistent/9/a/c/9/9ac9ae212b43ffdcd89d341c479736acb9a1ba4d/C4S_029%20%2857%29-730x411.jpg?bust=9ac9ae21",
        itemImg: [
          "https://www.brabus.com/_Resources/Persistent/e/2/8/2/e2821a0f045ffedb6cfc7e60b1f9ce598eaf9eee/C4S_029%20%2846%29.jpg?bust=e2821a0f",
          "https://www.brabus.com/_Resources/Persistent/2/7/4/2/2742ed6d3928cc3c65f0684b231eca3dd8d9a3cb/C4S_029%20%2850%29.jpg?bust=2742ed6d",
          "https://www.brabus.com/_Resources/Persistent/0/f/4/5/0f456218ab5f9d4a4c9b22d89cb086f21885be40/C4S_029%20%2852%29.jpg?bust=0f456218",
          "https://www.brabus.com/_Resources/Persistent/8/8/a/b/88abc9ee556b617289a4626bd09b14d8566e8db0/C4S_029%20%2854%29.jpg?bust=88abc9ee"
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
        img: "https://bmw.autoua.net/media/catalog/4/2/p1751942-1435043537.jpg",
        itemImg: [
          "https://bmw.autoua.net/media/catalog/4/2/p1751942-1435043537.jpg",
          "https://bmw.autoua.net/media/catalog/4/6/p1751946-1435043684.jpg",
          "https://bmw.autoua.net/media/catalog/5/0/p1751950-1435043684.jpg",
          "https://bmw.autoua.net/media/catalog/1/5/p1752315-1444728339.jpeg"
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
        img: "https://rolls-royce.autoua.net/media/catalog/0/4/p1760004-1537178947.jpg",
        itemImg: [
          "https://rolls-royce.autoua.net/media/catalog/0/4/p1760004-1537178947.jpg",
          "https://rolls-royce.autoua.net/media/catalog/0/5/p1760005-1537191716.jpg",
          "https://rolls-royce.autoua.net/media/catalog/0/7/p1760007-1537191716.jpg",
          "https://rolls-royce.autoua.net/media/catalog/1/2/p1760012-1537191716.jpg"
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
        vendor: 'mercedes', 
        title: 'BRABUS 800 BLACK & GOLD EDITION', 
        price: 441.612,
        volume: '4 L', 
        engine: '8-Cylinder',
        power: '800 HP',
        fuel: '16,6 l/100km', 
        img: "https://www.brabus.com/_Resources/Persistent/9/a/c/9/9ac9ae212b43ffdcd89d341c479736acb9a1ba4d/C4S_029%20%2857%29-730x411.jpg?bust=9ac9ae21",
        itemImg: [
          "https://www.brabus.com/_Resources/Persistent/e/2/8/2/e2821a0f045ffedb6cfc7e60b1f9ce598eaf9eee/C4S_029%20%2846%29.jpg?bust=e2821a0f",
          "https://www.brabus.com/_Resources/Persistent/2/7/4/2/2742ed6d3928cc3c65f0684b231eca3dd8d9a3cb/C4S_029%20%2850%29.jpg?bust=2742ed6d",
          "https://www.brabus.com/_Resources/Persistent/0/f/4/5/0f456218ab5f9d4a4c9b22d89cb086f21885be40/C4S_029%20%2852%29.jpg?bust=0f456218",
          "https://www.brabus.com/_Resources/Persistent/8/8/a/b/88abc9ee556b617289a4626bd09b14d8566e8db0/C4S_029%20%2854%29.jpg?bust=88abc9ee"
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
        img: "http://bmw.lviv.ua/bmw/images/units/big/Zz_1.jpg",
        itemImg: [
          "http://bmw.lviv.ua/bmw/images/units/big/Zz_1.jpg",
          "http://bmw.lviv.ua/bmw/images/units/small/mu21.jpg",
          "http://bmw.lviv.ua/bmw/images/units/small/so23.jpg",
          "http://bmw.lviv.ua/bmw/images/units/small/pm15.jpg"
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
        img: "https://bmw.autoua.net/media/catalog/4/2/p1751942-1435043537.jpg",
        itemImg: [
          "https://bmw.autoua.net/media/catalog/4/2/p1751942-1435043537.jpg",
          "https://bmw.autoua.net/media/catalog/4/6/p1751946-1435043684.jpg",
          "https://bmw.autoua.net/media/catalog/5/0/p1751950-1435043684.jpg",
          "https://bmw.autoua.net/media/catalog/1/5/p1752315-1444728339.jpeg"
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
        img: "https://audi.autoua.net/media/catalog/7/5/p1760375-1540195355.jpg",
        itemImg: [
          "https://audi.autoua.net/media/catalog/7/5/p1760375-1540195355.jpg",
          "https://audi.autoua.net/media/catalog/7/6/p1760376-1540196053.jpg",
          "https://audi.autoua.net/media/catalog/7/7/p1760377-1540196053.jpg",
          "https://audi.autoua.net/media/catalog/8/8/p1760388-1540196053.jpg"
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
        img: "https://i.infocar.ua/i/2/5575/110779/1920x.jpg",
        itemImg: [
          "https://i.infocar.ua/i/2/5575/110781/1920x.jpg",
          "https://i.infocar.ua/i/2/5575/110783/1920x.jpg",
          "https://i.infocar.ua/i/2/5575/110782/1920x.jpg",
          "https://i.infocar.ua/i/2/5575/104683/1920x.jpg"
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
        img: "https://rolls-royce.autoua.net/media/catalog/0/4/p1760004-1537178947.jpg",
        itemImg: [
          "https://rolls-royce.autoua.net/media/catalog/0/4/p1760004-1537178947.jpg",
          "https://rolls-royce.autoua.net/media/catalog/0/5/p1760005-1537191716.jpg",
          "https://rolls-royce.autoua.net/media/catalog/0/7/p1760007-1537191716.jpg",
          "https://rolls-royce.autoua.net/media/catalog/1/2/p1760012-1537191716.jpg"
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
        img: "https://rolls-royce.autoua.net/media/catalog/2/3/p1760023-1537197498.jpg",
        itemImg: [
          "https://rolls-royce.autoua.net/media/catalog/2/3/p1760023-1537197498.jpg",
          "https://rolls-royce.autoua.net/media/catalog/2/4/p1760024-1537197498.jpg",
          "https://rolls-royce.autoua.net/media/catalog/2/6/p1760026-1537197498.jpg",
          "https://rolls-royce.autoua.net/media/catalog/2/8/p1760028-1537197498.jpg"
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
        img: "http://cdn.motorpage.ru/Photos/800/110F6.jpg",
        itemImg: [
          "http://cdn.motorpage.ru/Photos/800/110F6.jpg",
          "http://cdn.motorpage.ru/Photos/800/13409.jpg",
          "http://cdn.motorpage.ru/Photos/800/2E71.jpg",
          "http://cdn.motorpage.ru/Photos/800/7A19.jpg"
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
        img: "https://i.infocar.ua/i/12/6235/1400x936.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/6235/1400x936.jpg",
          "https://i.infocar.ua/i/2/6235/118522/1920x.jpg",
          "https://i.infocar.ua/i/2/6235/118523/1920x.jpg",
          "https://i.infocar.ua/i/2/6235/118524/1920x.jpg"
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
        img: "https://i.infocar.ua/i/2/5232/91917/1920x.jpg",
        itemImg: [
          "https://i.infocar.ua/i/2/5232/91917/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91918/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91919/1920x.jpg",
          "https://i.infocar.ua/i/2/5232/91921/1920x.jpg"
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
        img: "https://i.infocar.ua/i/12/6032/1400x700.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/6032/1400x700.jpg",
          "https://i.infocar.ua/i/2/6032/114906/1920x.jpg",
          "https://i.infocar.ua/i/2/6032/114907/1920x.jpg",
          "https://i.infocar.ua/i/2/6032/114908/1920x.jpg"
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
        img: "https://i.infocar.ua/i/12/3398/1400x700.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/3398/1400x700.jpg",
          "https://i.infocar.ua/i/2/3398/98670/1920x.jpg",
          "https://i.infocar.ua/i/2/3398/98671/1920x.jpg",
          "https://i.infocar.ua/i/2/3398/98672/1920x.jpg"
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
        img: "https://i.infocar.ua/i/12/6014/1400x700.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/6014/1400x700.jpg",
          "https://i.infocar.ua/i/2/6014/114673/1920x.jpg",
          "https://i.infocar.ua/i/2/6014/114674/1920x.jpg",
          "https://i.infocar.ua/i/2/6014/114675/1920x.jpg"
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
        img: "https://i.infocar.ua/i/12/5868/1400x700.jpg",
        itemImg: [
          "https://i.infocar.ua/i/12/5868/1400x700.jpg",
          "https://i.infocar.ua/i/2/5868/115967/1920x.jpg",
          "https://i.infocar.ua/i/2/5868/115968/1920x.jpg",
          "https://i.infocar.ua/i/2/5868/115970/1920x.jpg"
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
      let item = state.basket.findIndex(item => item.id === payload.id);
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
