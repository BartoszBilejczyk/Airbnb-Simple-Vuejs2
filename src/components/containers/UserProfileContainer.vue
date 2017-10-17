<template lang="html">
  <div class="">
    {{ user }}
  </div>
</template>

<script>
export default {
  name: 'UserProfileContainer',
  components: {

  },
  computed: {
    user() {
      return this.$store.state.loggedUser
    }
  }
}
</script>

<style lang="css">
</style>
