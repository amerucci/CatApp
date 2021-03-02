<template>
  <base-layout
    page-title="Ajouter un membre"
    page-default-back-link="/memories"
  >
    <h2>Ajouter un membre</h2>
    <!-- @save-memory="saveMemory"  @submit.prevent="submitForm" -->
    <form class="ion-padding" @submit.prevent="submitForm">
      <ion-list>
        <ion-label position="floating"> Title </ion-label>
        <ion-input type="text" required v-model="enteredTitle"></ion-input>
      
        <ion-input type="text" v-model="enteredImageUrl">{{ toto }}</ion-input>

     
        <img :src="enteredImageUrl" />
        <input
          type="file"
          style="display: none"
          @change="onFileSelected"
          ref="fileInput"
          id="toto"
        />
        <ion-button @click="$refs.fileInput.click()" expand="full"
          >Choisir une image</ion-button
        >

        <ion-item>
          <ion-label position="floating"> Description </ion-label>
          <ion-textarea
            rows="5"
            required
            v-model="enteredDescription"
          ></ion-textarea>
        </ion-item>
     
        <ion-button type="submit" expand="full">Ajouter un membre</ion-button>
      </ion-list>
    </form>
  </base-layout>


</template>

<script>


import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,


} from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,


  },
  data() {
    return {
      enteredTitle: "",
      enteredImageUrl: "",
      enteredDescription: "",
      members: this.$store.getters.memories,
      selectedFile: null,
    };
  },

 

  methods: {


  


    onFileSelected(event) {
	

      
		


      let reader = new FileReader();
      reader.onload = function () {
        localStorage.setItem("images", JSON.stringify(reader.result));
      };
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);

        localStorage.removeItem("images");
      }
    },
    submitForm() {
   

      this.members.push({
        id: new Date().toISOString(),
        title: this.enteredTitle,
        image: JSON.parse(localStorage.getItem("images")),
        description: this.enteredDescription,
      });
      localStorage.setItem("members", JSON.stringify(this.members));
      this.$store.commit("increment");
      this.$router.replace("/memories");
      localStorage.removeItem("images");
      localStorage.removeItem("members");
    },
  },


  
};
</script>