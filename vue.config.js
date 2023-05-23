const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: 'src/main.ts',
    adminPanel: 'src/page/adminPanel/admin.ts'
  }
})
