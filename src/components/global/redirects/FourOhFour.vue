<template lang="pug">
  div.four-oh-four
    img(src="@/assets/404.gif")
    h1 Ups, Something Went Wrong!
    p Probably the page you tried to load does not exists.
</template>

<style scoped>
  .four-oh-four {
    margin-top: 4rem;
    text-align: center;
  }
  .four-oh-four>img {
    border-radius: 10rem
  }
</style>
