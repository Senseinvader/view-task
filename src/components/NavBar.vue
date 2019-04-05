<template>
  <div class='navbar-container'>
    <div class="navigation-container">
      <div class="logo">{{logo}}</div>
      <div class="menu">
        <ul class="menu-list">
          <li
            v-for="item in menuItems"
            :key="item.name"
          >
            <div class="button">
              <router-link :to="item.link"><span>{{item.name}}</span></router-link>
            </div>
          </li>
        </ul>
        <div class="button">
          <router-link to="/login">
            <span v-on:click="handleLogOut">
              {{buttonContent}}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  created() {
    this.$store.dispatch('auth/checkIsSignedIn');
  },
  data() {
    return {
      logo: 'Vue',
      menuItems: [
        { name: 'main', link: '/' },
        { name: 'news', link: '/news' },
        { name: 'profile', link: '/profile' },
      ],
    };
  },
  computed: {
    buttonContent() {
      return this.$store.getters['auth/isAuthenticated'] ? 'logout' : 'login';
    },
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch('auth/userSignOut');
    },
  },
};
</script>

<style>
  .navigation-container {
    background-color: #43a047;
    display: flex;
    justify-content: space-between;
  }
  .menu-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-shrink: 2;
  }
  .menu {
    display: flex;
    flex-direction: row;
  }
  .button {
    padding: 2vw;
    cursor: pointer;
    flex-shrink: 1;
    width: 5vw;
  }
  .button span {
    color: white;
    text-transform: uppercase;
  }
  .button:hover {
    /* text-decoration-line: underline; */
    background-color: #358f3a;
  }
  .logo {
    align-self: center;
    color: aliceblue;
    text-transform: capitalize;
    font-size: 1.5em;
    padding-left: 2vw;
    font-weight: bolder;
  }
</style>

