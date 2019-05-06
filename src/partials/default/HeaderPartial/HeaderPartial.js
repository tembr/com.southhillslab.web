export default {
  methods: {
    handleScrollToSelector (selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
