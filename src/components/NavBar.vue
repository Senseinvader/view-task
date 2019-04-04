<template>
  <div class='navbar-container'>
    <div class="logo">

    </div>
    <div class="navigation-container">
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
      <!-- TODO add switching between login/logout depending on user loggedIn true/false!!! -->
      <div class="button"><router-link to="/login"><span>login</span></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
};
</script>

<style>
  .navigation-container {
    background-color: #43a047;
    display: flex;
    justify-content: end;
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
  .button {
    padding: 2vw;
    cursor: pointer;
    flex-shrink: 1;
  }
  .button span {
    color: white;
    text-transform: uppercase;
  }
  .button:hover {
    /* text-decoration-line: underline; */
    background-color: #358f3a;
  }
</style>

