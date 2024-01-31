const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@assets': path.resolve(__dirname, 'src/assets/')
    }
  }
}
