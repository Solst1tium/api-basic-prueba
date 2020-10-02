<template>
  <v-container>
    <h4>¡Suscríbete y conoce nuestras novedades!</h4>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click.native="saveSuscriptor"> Suscribir</v-btn>      
    </v-form>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
         {{this.nombre}}
        </v-card-title>

        <v-card-text>
          Gracias por tu suscripción
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>


<script>
import {mapActions, mapState} from 'vuex'
  export default {
    data: () => ({
       dialog: false,
      valid: true,
      name: '',
      nombre: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      ...mapActions(['saveSubscription', 'addSuscriptor']),
      validate () {
        this.$refs.form.validate()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
     saveSuscriptor(){
       this.validate()
       this.nombre = this.name       
       let datesSup = {name: this.name, email: this.email}
       this.saveSubscription(datesSup)
       this.dialog = true    
       this.name = '' ,
       this.email = ''  
       this.resetValidation()         
     }
   
    },
    computed: {
      ...mapState(['suscriptor', 'suscriptores'])
    }
  }
</script>