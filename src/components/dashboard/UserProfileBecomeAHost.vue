<template lang="html">

</template>

<script>
export default {
  name: '',
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    user() {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

</style>
