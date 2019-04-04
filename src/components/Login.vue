<template>
  <div class="login-container">
    <h2>Yo!</h2>
    <form class="input-form">
      <input type="text" v-model="login">
      <input type="text" v-model="password">
      <button class="submit-button">SUBMIT</button>
    </form>
    <div class="alert">{{alert}}</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      alert: '',
    };
  },
  computed: {
    // error() {
    //   return this.$store.error;
    // },
  },
};
</script>

<style>

</style>

