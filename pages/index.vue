<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        devjokes-website
      </h1>
      <h2 class="subtitle">
        Devjokes website
      </h2>
      <div v-if="randomJoke">
        {{ randomJoke.text }}
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      randomJoke: null
    }
  },
  mounted() {
    this.showRandomJoke()
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    showRandomJoke() {
      setInterval(() => {
        const db = this.$fireStore.collection('jokes')
        db.get().then((querySnapshot) => {
          const size = querySnapshot.size
          const randomNo = this.getRandomInt(size)
          console.log(querySnapshot)
          const randomJoke = querySnapshot.docs[randomNo].data()
          console.log(randomJoke)
          this.randomJoke = randomJoke
        })
      }, 20000)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
