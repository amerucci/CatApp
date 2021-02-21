<template>
  <base-layout
    page-title="Ajouter un membre"
    page-default-back-link="/memories"
  
  >
    <h2>Ajouter un membre</h2>
     <!-- @save-memory="saveMemory"  @submit.prevent="submitForm" -->
      <form class="ion-padding"  @submit.prevent="submitForm" >
    <ion-list>
      <ion-item>
        <ion-label position="floating"> Title </ion-label>
        <ion-input type="text" required v-model="enteredTitle"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Image </ion-label>
        <ion-input type="text" required  v-model="enteredImageUrl"></ion-input>
      </ion-item>
       <ion-item>
        <ion-label position="floating"> Description </ion-label>
        <ion-textarea rows="5" required  v-model="enteredDescription"></ion-textarea>
      </ion-item>
    
           <ion-button type="submit" expand="full">Ajouter un membre</ion-button>
      
    </ion-list>
    </form>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";
export default {

  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  },
  data(){
    return {
      enteredTitle: '',
      enteredImageUrl: '',
      enteredDescription:'',
      members: this.$store.getters.memories,
    }
  },
  methods:{
    
    submitForm() {
      this.members.push({id: new Date().toISOString(), title:this.enteredTitle, image:this.enteredImageUrl, description:this.enteredDescription})
       localStorage.setItem('members', JSON.stringify(this.members)); 
       this.$store.commit('increment');   
       this.$router.replace('/memories')
     
    } 

   
  }
};
</script>