<template>
  <div class="home">
    <v-container>
      <v-row>
      <v-col cols="8">
        
      </v-col>
      <v-col cols="4">
        <news-letters> </news-letters>
      </v-col>
      </v-row>
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
  },
  computed: {
  ...mapState(['suscriptor', 'suscriptores'])    
  },
  
}
</script>
