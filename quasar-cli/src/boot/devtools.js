export default ({ app }) => {
  if (process.env.DEV) {
    // Enable Vue Devtools
    app.config.devtools = true
    app.config.performance = true

    // Wait for the window to load
    window.addEventListener('load', () => {
      // Check if devtools are available
      if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
      }
    })
  }
}
