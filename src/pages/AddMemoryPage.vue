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
       
       
            <ion-img :src="showImgSelected" :alt="imagesSelected"></ion-img>
         
        
      
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
        <ion-item>
          <ion-datetime
            display-format="MM DD YY"
            placeholder="Select Date"
          ></ion-datetime>
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
  IonDatetime,
  IonImg
} from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonDatetime,
    IonImg
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
  watch: {
    imagesSelected(){
      if (localStorage.getItem('images')){
this.enteredImageUrl = JSON.parse(localStorage.getItem('images'))
      }  else{
       this.enteredImageUrl =  "https://semantic-ui.com/images/wireframe/image.png"
      } 
    }
  },
computed:{
  showImgSelected(){
    this.enteredImageUrl =  JSON.parse(localStorage.getItem("images"))
  }
},
 
  methods: {
    onFileSelected(event) {
      
      let reader = new FileReader();
      reader.onload = function () {
        //alert(reader.result);
        localStorage.setItem("images", JSON.stringify(reader.result));
       
      
    
        
      };
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
       
            localStorage.removeItem('images');
           
      }
     
    },
    submitForm() {
      alert(this.enteredImageUrl)
      
      this.members.push({
        id: new Date().toISOString(),
        title: this.enteredTitle,
        image: JSON.parse(localStorage.getItem("images")),
        description: this.enteredDescription,
      });
      localStorage.setItem("members", JSON.stringify(this.members));
      this.$store.commit("increment");
      this.$router.replace("/memories");
      localStorage.removeItem('images');
      localStorage.removeItem('members');
     
    },
  },
};
</script>