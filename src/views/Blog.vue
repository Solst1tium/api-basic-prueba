<template>
  <div class="home">
    <router-link :to="paginate(false)">Anterior</router-link> *
    <router-link :to="paginate(true)">Siguiente</router-link>
    <h1 v-text="title"></h1>
    <hr>
    <p>Vista Blog</p>
    <br />
    <comments></comments>
    </div>
</template>


<script>
import Comments from '../components/Comments'


export default {
  components:{
    Comments
  },
  computed: {
    title () {
      return `Este es el blog n° ${this.$route.params.post}`
    }
  },
  methods: {
    paginate (dir) {
      const currentPost = parseInt(this.$route.params.post) 
      if (dir) {
        return `/blog/${currentPost + 1}`
      } else {
        return currentPost > 1 ? `/blog/${currentPost - 1}` : `/blog/${currentPost}`
      }
    }
  }
}
</script>