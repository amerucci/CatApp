<template>

  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/memories" >
    <template v-slot:actions-end>
        <!-- <ion-button  @click='deleteMember()'>
            <ion-icon slot="icon-only" :icon="trash" ></ion-icon>
        </ion-button> -->
         <ion-button @click="presentActionSheet">
             <ion-icon slot="icon-only" :icon="settings" ></ion-icon>
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
  IonImg, IonButton, actionSheetController, defineComponent
} from "@ionic/vue";
import { trash,settings, create } from 'ionicons/icons';

export default {
    component:{
        IonImg, IonButton, defineComponent, actionSheetController
    },
    data(){
        return {
            memoryId : this.$route.params.id,
            trash, 
            settings,
            create,
           members: this.$store.getters.memories,
          
        }
    },
    computed: {

        loadedMemory(){
            return this.$store.getters.memory(this.memoryId);
        },
  
      

        
    },
    // watch:{
    //      getIndexOf(){
    //        return this.index = this.members.findIndex(index =>index.id === this.memoryId)
           
           
            
    //     },
        
    // },
    methods:{
        getIndexOf(){
           return this.index = this.members.findIndex(index =>index.id === this.memoryId)
           
           
            
        },


          async presentActionSheet() {
          
      const actionSheet = await actionSheetController
        .create({
          header: 'Que voulez-vous faire?',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Supprimer',
              role: 'destructive',
              
              handler: () => {
                  this.members.splice(this.getIndexOf(), 1)
             localStorage.setItem('members', JSON.stringify(this.members));
             this.$store.commit('increment');   
             this.$router.replace('/memories')
             console.log(this.memoryId)
              },
            },
             {
              text: 'Modifier',
              role: '',
             
              handler: () => {
                  this.members.splice(this.getIndexOf(), 1)
             localStorage.setItem('members', JSON.stringify(this.members));
             this.$store.commit('increment');   
             this.$router.replace('/memories')
             console.log(this.memoryId)
              },
            },




            {
              text: 'Annuler',
              
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              },
            },
          ],
        });
      return actionSheet.present();
    },
  
//           trash() {
//     console.log('back');

//   }
       
    }
    // watch: {
    //     '$route'(currentRoute){
    //         this.memoryId = currentRoute.params.id;

    //     }
    // }
    
}
</script>