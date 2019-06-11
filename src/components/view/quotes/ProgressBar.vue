<template lang="pug">
  div.progress
    div.progress-bar( 
      role="progressbar" 
      :style="{width: (quotesLength/maxQuotes)*100+'%'}" 
      aria-valuenow="25" 
      aria-valuemin="0" 
      aria-valuemax="100"
    ) {{quotesLength}}/{{maxQuotes}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'quotesLength',
      'maxQuotes'
    ])
  }
}
</script>

<style>

</style>
