<template>
  <div>
    <v-app-bar color="indigo lighten-4" dense dark>
      <v-img class="mx-2" src="https://desafiosdev.s3.amazonaws.com/uploads/logos/ecamp+logo+horiz+color.png"
        max-height="60"
        max-width="60"
        contain>
        </v-img>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">Acerca de</v-btn>
      <v-btn text to="/suscriptors">Suscriptores</v-btn>
      <v-btn text to="/blog/1">Blog</v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in menulist"
            :key="n"
            @click="() => {}">
            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menulist: ["Inicio", "Contacto", "Galeria", "Noticias", "Proyectos"]
    }
  }
}
</script>