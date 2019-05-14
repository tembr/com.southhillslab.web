import * as components from 'src/components'

export default {
  components: {
    ...components
  },
  methods: {
    handleScrollToSelector (selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
