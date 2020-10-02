<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <news-letters></news-letters>
        </v-col>
      </v-row>
      <div>
        <v-row>
          <v-col cols="12">
            <h3 class="text-center">LISTA DE SUSCRIPTORES</h3>
              <v-list max-width="600" class="mx-auto">
                  <v-list-item v-for="(suscriptor, index) in suscriptores" :key="index">
                    <v-list-item-icon><v-icon color="success">mdi-ticket-account</v-icon></v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="suscriptor.name"></v-list-item-title>
                    </v-list-item-content>
                        <v-list-item-icon><v-icon color="success" class="mr-3">mdi-email</v-icon></v-list-item-icon>
                      <v-list-item-content>
                      <v-list-item-title v-text="suscriptor.email"></v-list-item-title>
                    </v-list-item-content>
                    <v-btn depressed color="error" @click="deleteSuscriptors(index)"><v-icon>mdi-delete</v-icon>Eliminar</v-btn>
                  </v-list-item>
              </v-list>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import NewsLetters from '@/components/NewsLetters.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    NewsLetters   
  },
  methods: {
  ...mapActions(['saveSubscription', 'addSuscriptor']),

  deleteSuscriptors(id){
    this.suscriptores.splice(id, 1)
  }

  },
  computed: {
  ...mapState(['suscriptor', 'suscriptores'])    
  },
  
}
</script>
