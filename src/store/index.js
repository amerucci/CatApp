import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
   state: {
        memories: [
            { id: 'm1', image:'https://robohash.org/592cc45acbc6bff2c9ffd5e3d85c27b1?set=set4&bgset=&size=400x400', title:'Alain', description:"Le papa"},
            { id: 'm2', image:"https://robohash.org/35b0eb8ab5c3eba270bc1c9590913a0d?set=set4&bgset=&size=400x400",  title:"Anais", description:"La maman"},
            { id: 'm3', image:"https://robohash.org/1a630603453769e00ac098ec2f8eeafb?set=set4&bgset=&size=400x400",  title:"Valentina", description:"La fille"},
            { id: 'm4', image:"https://robohash.org/4829bfc1cd58433a8f43c184b6b467e3?set=set4&bgset=&size=400x400",  title:"Paolo", description:"Le garçon"},
        ],

       
       
    
  },

  plugins: [createPersistedState()],
  mutations: {
    increment: state => state.memories = JSON.parse(localStorage.getItem('members'))
    
  },




  

//   mutations:{
//     // initialiseStore(state) {
//     //     // Check if the ID exists
//     //     if(localStorage.getItem('members')) {
//     //         this.replaceState(
//     //             Object.assign(state, JSON.parse(localStorage.getItem('members')))
//     //         );
            
//     //     }
//     // }
//     addMember (state) {
//        state.memories = JSON.parse(localStorage.getItem('members'));
//       }
//   },



  getters:{
    memories(state){
        return state.memories;
        //return state.count;
    }, 
    memory(state){
        return (memoryId) => {
            return state.memories.find((memory) => memory.id === memoryId);
        }
    }
  },
});

export default store;