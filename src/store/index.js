import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'

//modules
import NavHome from './Modules/NavHome'
import NavMenu from './Modules/NavMenu'
import HomeImages from './Modules/HomeImages'
import algorithm from './Modules/Algorithm'
import table from './Modules/Table'

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
   c:HomeImages,
   d:algorithm,
   tbl:table
  }
})
