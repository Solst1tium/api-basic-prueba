<template>
  <v-app>
     <nav-comp/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-comp/>
  </v-app>
</template>

<script>

import NavComp from './components/NavComp';
import FooterComp from './components/FooterComp';

export default {
  name: 'App',

  components: {
   NavComp,
   FooterComp
  },

  data: () => ({
    //
  }),
};
</script>
