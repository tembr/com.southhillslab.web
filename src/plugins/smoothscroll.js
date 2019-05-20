export default async () => {
  // Only executed on client side
  if (process.client) {
    const SmoothScroll = require('smoothscroll-polyfill')
    SmoothScroll.polyfill()
  }
}
