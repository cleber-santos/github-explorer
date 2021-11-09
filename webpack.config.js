const path = require('path') // o path evita erros em caminhos com " / "
const HtmlWebpackPlugin = require('html-webpack-plugin') // Plugin do webpack para gerenciar o arquivo de build

module.exports = {
  mode: 'development',

  // configurar o source maps
  devtool: 'eval-source-map',

  // o entry mostra o arquivo de entrada e o output mostra o arquivo de saida depois da conversão.
  // __dirname ele vai pegar o diretorio. E o path.resolve vai colocar a "/" correta conforme S.O.
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // resolve > extensions vai dizer qual extensões o webpack aceita.
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Webpack dev server - automatizar o webpack para gerar o bundle.js, para cada alteração de uma pasta especifica.
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    }
  },

  // plugins para gerenciamento
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],

  // O module vai ficar as configurações de como nossa aplicação vai se comportar para cada importação dependendo do tipo de arquivo.
  // rule: quando exportar qualquer arquivo terminado em .jsx (\.jsx$) da pasta node_modules não fazer a conversão e deixar que o babel-loader faça isso.
  // o babel-loader e a integração do webpack com o babel.
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader' // > yarn add babel-loader -D
      }
    ]
  }
}
