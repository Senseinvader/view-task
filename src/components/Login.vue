<template>
  <div class="login-container">
    <h2>Yo!</h2>
    <form class="input-form" v-on:submit="(e) => handleLogIn(e)">
      <input type="text" v-model="login">
      <input type="password" v-model="password">
      <button class="submit-button">SUBMIT</button>
    </form>
    <div class="alert">{{error}}</div>
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
    error() {
      return this.$store.state.auth.error;
    },
  },
  methods: {
    handleLogIn(e) {
      e.preventDefault();
      this.$store.dispatch('auth/userSignIn', { login: this.login, password: this.password });
    },
  },
};
</script>

<style>

</style>

