<template>
  <base-layout
    :page-title="'Modifier ' + loadedMemory.title"
    page-default-back-link="/memories"
  >
    <form class="ion-padding" @submit.prevent="update">
      <ion-list>
        <ion-item id="mydiv" ref="myid">
          <ion-label position="floating" id="titre"> Title </ion-label>
          <!-- <input type="text"  v-model="enteredTitle" @input="doSomethingWith"  > -->
           <ion-input id="myDiv"
            type="text"
            required
             :value="loadedMemory.title"
             ref="inputTitle"
          ></ion-input> 
        </ion-item>
        <ion-item>
          <ion-label position="floating"> Image </ion-label>
          <ion-input
            type="text"
            required
            :value="loadedMemory.image"
             ref="inputImage"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating"> Description </ion-label>
          <ion-textarea
            rows="5"
            required
            :value="loadedMemory.description"
            ref="inputDescription"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-datetime
            display-format="MM DD YY"
            placeholder="Select Date"
          ></ion-datetime>
        </ion-item>
        <ion-button type="submit" expand="full">Sauvegarder</ion-button>
      </ion-list>
    </form>
    <p>{{ enteredTitle }}</p>
  </base-layout>
</template>

<script>
import {
  IonImg,
  IonButton,
  actionSheetController,
  defineComponent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
} from "@ionic/vue";

export default {
  component: {
    IonImg,
    IonButton,
    defineComponent,
    actionSheetController,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonDatetime,
  },
  data() {
    return {
  
      memoryId: this.$route.params.id,
      members: this.$store.getters.memories,
      
    };
  },



  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
    
   
  },

  methods: {

    


    getIndexOf() {
      return (this.index = this.members.findIndex(
        (index) => index.id === this.memoryId
      ));
    },
    update() {
      this.members.splice(this.getIndexOf(), 1, {
        id: this.memoryId,
        title: this.$refs.inputTitle.value,
        image: this.$refs.inputImage.value,
        description: this.$refs.inputDescription.value,
      });
      localStorage.setItem("members", JSON.stringify(this.members));
      this.$store.commit("increment");
      this.$router.replace("/memories");

    },
  },
};
</script>