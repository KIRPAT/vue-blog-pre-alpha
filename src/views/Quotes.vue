<template lang="pug">
  div.quotes-view-container
    div.quotes-view
      NewQuote
      ProgressBar.quote-progress
      Quotes
      div
        div.alert-container
          div.alert.alert-info
            |Info: Click to destroy any quote!
</template>

<script>
import NewQuote from '@/components/view/quotes/NewQuote.vue'
import ProgressBar from '@/components/view/quotes/ProgressBar.vue'
import Quotes from '@/components/view/quotes/Quotes.vue'

export default {
  name: 'quotes',
  components: {
    Quotes,
    ProgressBar,
    NewQuote
  }
}
</script>

<style lang="sass" scoped>
  .alert-container
    margin-top: 0.5rem
    margin-bottom: 0.5rem

  .quote-progress
    margin-bottom: 0.5rem

  .quotes-view-container
    display: grid
    grid-template-columns: 1% [quotes-view] auto 1%

  .quotes-view
    grid-area: quotes-view

  @media only screen and (min-width: 600px)
    .quotes-view-container
      grid-template-columns: auto [quotes-view]500px auto
</style>

