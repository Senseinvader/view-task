<template>
  <div>
    <p class="text">bla bla bla</p>
    <br>
    <p>{{text}}</p>
    <ul>
      <li v-for="el in news" :key="el.title">
        <h2>{{el.title}}</h2>
        <p>{{el.contents}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      text: 'some text',
    };
  },
  computed: {
    news() {
      return this.$store.state.data.news;
    },
  },
};
</script>

<style>
  .text {
    color: red;
  }
</style>
