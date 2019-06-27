import { debounce } from 'lodash'
import { ErrorPage } from 'src/pages'

export default {
  name: 'app',
  components: {
    ErrorPage
  },
  computed: {
    error() {
      return this.$store.state.errorHandler.error;
    },
  },
  mounted () {
    this.scrollLisneter = debounce(this.handleScroll, 300)
    document.addEventListener('scroll', this.scrollLisneter);
  },
  beforeDestroy () {
    if (this.scrollLisneter) {
      document.removeEventListener('scroll', this.scrollLisneter);
      this.scrollLisneter = null
    }
  },
  methods: {
    handleScroll () {
        document.documentElement.dataset.scroll = window.scrollY;
    }
  }
}
