<template>
  <v-card
    class="mx-auto mt-10"
    max-width="400"
    min-height="200"
    raised
    :loading="true"
    border-color="accent"
    light
  >
    <v-card-text v-if="randomJoke" color="primary">
      <div class="overline mb-4 secondary--text">
        Joke no:{{ randomJoke.id }}
      </div>
      <p class="headline mb-1 primary--text">
        {{ randomJoke.text }}
      </p>
      <v-img :src="randomJoke.img" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#442021" text @click="nextRandomJoke">Next</v-btn>
    </v-card-actions>
    <template #progress>
      <v-progress></v-progress>
    </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      randomJoke: {
        id: 20,
        text:
          'Question - Why integration testing is required after unit testing? ![umbrella](./images/umbrella.gif)'
      },
      querySnapshot: null,
      progressValue: 0
    }
  },
  mounted() {
    let allData = localStorage.getItem('allData') || null
    if (!allData) {
      const db = this.$fireStore.collection('jokes')
      db.get().then((querySnapshot) => {
        allData = querySnapshot.docs.map((doc, index) => {
          const { text: jokeText } = doc.data()
          const regex = /!\[.*\]\(.*\)/
          const imgMd = regex.exec(jokeText)
          if (imgMd) {
            const matchedImg = imgMd[0]
            const matchedText = jokeText.replace(matchedImg, '')
            const startMatch = matchedImg.indexOf('(') + 3
            const endMatch = matchedImg.length - 1 - startMatch
            const imgAppend = matchedImg.substr(startMatch, endMatch)
            const img =
              'https://raw.githubusercontent.com/shrutikapoor08/devjoke/master/' +
              imgAppend
            return { ...doc.data(), text: matchedText, img }
          }
          return { ...doc.data() }
        })
        localStorage.setItem('allData', JSON.stringify(allData))
        this.querySnapshot = allData
      })
    } else {
      allData = JSON.parse(allData)
      this.querySnapshot = allData
    }

    this.nextRandomJoke()
  },
  methods: {
    nextRandomJoke() {
      if (this.querySnapshot) {
        const randomNo = Math.floor(
          Math.random() * Math.floor(this.querySnapshot.length)
        )
        const randomJoke = this.querySnapshot[randomNo]
        this.randomJoke = randomJoke
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
