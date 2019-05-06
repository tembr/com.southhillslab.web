module.exports = {
  apps: [
    {
      name: 'com.southhillslab.web',
      exec_interpreter: "sh",
      script  : "bin/www",
      watch: false,
      env: {
        PORT: 8081,
        NODE_ENV: 'production'
      }
    }
  ]
}
