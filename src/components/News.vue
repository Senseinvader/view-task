<template>
  <div>
    <p class="text">bla bla bla</p>
    <br>
    <p>{{text}}</p>
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
};
</script>

<style>
  .text {
    color: red;
  }
</style>
