const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: 'src/main.ts',
    adminPanel: 'src/page/adminPanel/adminPanel.ts',
    loginPanel: 'src/page/loginPanel/loginPanel.ts',
    account: 'src/page/account/account.ts'
  }
})
