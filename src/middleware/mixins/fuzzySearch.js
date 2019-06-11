export const fuzzySearch = {
  data: () => ({
    formInput: '',
    searchResults: [
      `Assassin's Creed`,
      `Call of Duty`,
      `Pokémon`,
      `Minecraft`,
      `PUBG`,
      `Overwatch`,
    ]
  }),

  computed: {
    trimmed() {
      return this.formInput.trim() == '' 
      ? null
      : this.formInput.trim()
    },
    filteredResults() {
      return this.searchResults.filter(
        (element) => {return element.match(this.trimmed)}
      )
    }
  }
}