<template>
  <div>
    <div>Secret</div>
    <button @click="readFromFirestore()">Read</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firestore rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection('jokes').doc('joke1')
      try {
        const snapshot = await messageRef.get()
        const doc = snapshot.data()
        if (!doc) {
          alert('Document does not exist.')
          return
        }
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
