<template>
  <base-layout page-title="Tous les membres">
    <template v-slot:actions-end>
        <ion-button router-link="/memories/add">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
    </template> 
    
        <ion-list>
            <ion-item 
            v-for="(memory, index) in memories" 
            :router-link="`/memories/${memory.id}`"
            :key="memory.id"
            :index="index"
            
             >
            <ion-thumbnail>
            <ion-img :src="memory.image" :alt="memory.title"></ion-img>
            </ion-thumbnail>
             <ion-label>{{memory.title}}</ion-label>
           <ion-label>{{index}}</ion-label>
            </ion-item>
           
        </ion-list>
  
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonImg, IonThumbnail, IonLabel, IonButton, IonIcon
} from "@ionic/vue";
import { add } from 'ionicons/icons';

export default {
  components: {
    IonList,
    IonItem,
    IonImg, 
    IonThumbnail, IonLabel, IonButton, IonIcon, 
  },
   props: ['index'],
  data(){
      return { add, };
  },
  // methods:{
  //   setIdinArray(index){
      

  //   }
  // },
  
  computed:{
      memories(){
          return this.$store.getters.memories;
      }
  }
};
</script>