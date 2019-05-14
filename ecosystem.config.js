module.exports = {
  apps: [
    {
      name: 'com.southhillslab.web',
      exec_interpreter: "sh",
      script  : "bin/www",
      watch: false,
      env: {
        PORT: 8080,
        NODE_ENV: 'development'
      }
    }
  ]
}
