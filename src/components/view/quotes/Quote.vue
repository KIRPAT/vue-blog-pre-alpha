<template lang="pug">
  div.panel-body
    div.quote
      slot
</template>

<style lang="sass" scoped>
  .panel
    &-body 
      cursor: pointer
      user-select: none
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
      font-size: 1rem
      color: #6e6e6e
      background-color: #eeeded
      text-align: center
      &:hover 
        background-color: #ffe2e2
</style>
