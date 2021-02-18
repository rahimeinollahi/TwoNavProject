import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'

//modules
import NavHome from './Modules/NavHome'
import NavMenu from './Modules/NavMenu'
import HomeImages from './Modules/HomeImages'

export default createStore({
  state: {
   
  },
  getters:{

  },
  actions,
  mutations,
  modules: {
   a:NavHome,
   b:NavMenu,
   c:HomeImages
  }
})
