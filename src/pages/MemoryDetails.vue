<template>

  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/memories">
  
  <template v-slot:actions-end>
        <ion-button router-link="memories">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </ion-button>
    </template> 

  <h2 v-if="!loadedMemory">Désolé impossible de charger cet élément</h2>
  <h2 v-else class="ion-text-center">{{ loadedMemory.title }}</h2>
  <ion-img :src="loadedMemory.image" :alt="loadedMemory.title"></ion-img>
  <p class="ion-text-justify p-4" >{{ loadedMemory.description }}</p>

    
    
     
  
  </base-layout>
</template>

<script>
import {
  IonImg
} from "@ionic/vue";
import { trash } from 'ionicons/icons';

export default {
    component:{
        IonImg
    },
    data(){
        return {
            memoryId : this.$route.params.id,
            trash
        }
    },
    computed: {
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId);
        }
    },
    // watch: {
    //     '$route'(currentRoute){
    //         this.memoryId = currentRoute.params.id;

    //     }
    // }
    
}
</script>