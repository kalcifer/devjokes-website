<template>
  <v-card
    class="mx-auto mt-12"
    max-width="500"
    min-height="200"
    raised
    border-color="accent"
    light
  >
    <v-card-text v-if="randomJoke" class="accent--text">
      <div class="mb-4 subtitle-2" align="left">
        Joke no:{{ randomJoke.id }}
      </div>
      <p
        v-if="randomJoke.text"
        class="display-1 mb-1 primary--text"
        justify="left"
        align="center"
      >
        {{ randomJoke.text }}
      </p>
      <v-img
        v-if="randomJoke.img"
        :src="randomJoke.img"
        :alt="randomJoke.imgAlt"
      />
    </v-card-text>
    <v-card-text v-if="!randomJoke">Loading</v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#442021" text @click="nextRandomJoke">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const TWOHOURS = 7200000
export default {
  data() {
    return {
      randomJoke: null,
      querySnapshot: null,
      progressValue: 0
    }
  },
  mounted() {
    let allData = localStorage.getItem('allData') || null
    const oldTime = localStorage.getItem('time') || null
    if (!oldTime || Date.now() - oldTime > TWOHOURS) {
      localStorage.clear()
      const db = this.$fireStore
        .collection('jokes')
        .where('approved', '==', true)

      db.get().then((querySnapshot) => {
        allData = querySnapshot.docs.map((doc, index) => {
          return { ...doc.data(), id: index }
        })
        localStorage.setItem('allData', JSON.stringify(allData))
        this.querySnapshot = allData
        localStorage.setItem('time', Date.now())
        this.nextRandomJoke()
      })
    } else {
      allData = JSON.parse(allData)
      this.querySnapshot = allData
      this.nextRandomJoke()
    }
  },
  methods: {
    nextRandomJoke() {
      if (this.querySnapshot) {
        const randomNo = Math.floor(
          Math.random() * Math.floor(this.querySnapshot.length)
        )
        const randomJoke = this.querySnapshot[randomNo]
        this.randomJoke = { ...randomJoke, id: randomNo }
      }
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
