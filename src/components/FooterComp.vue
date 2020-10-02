<template>
  <v-footer dark
    color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn text>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Mi footer prueba</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>