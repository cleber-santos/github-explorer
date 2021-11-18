const path = require('path') // o path evita erros em caminhos com " / "
const HtmlWebpackPlugin = require('html-webpack-plugin') // Plugin do webpack para gerenciar o arquivo de build
const ReactRefleshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') // Plugin para ao fazer reflesh da pagina não zerar ela.

// const para criar o ambiente dev e produção
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  // identifica qual ambiente estara usando
  mode: isDevelopment ? 'development' : 'production',

  // configurar o source maps
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

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
    },
    hot: true
  },

  // plugins para gerenciamento
  plugins: [
    isDevelopment && new ReactRefleshWebpackPlugin(), // adicionar o fastReflesh quando estiver em modo development
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean), // .filter(Boolean), para não dar erro quando uma condição for false.

  // O module vai ficar as configurações de como nossa aplicação vai se comportar para cada importação dependendo do tipo de arquivo.
  // rule: quando exportar qualquer arquivo terminado em .jsx (\.jsx$) da pasta node_modules não fazer a conversão e deixar que o babel-loader faça isso.
  // o babel-loader faz a integração do webpack com o babel.
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        ]
      },
      // o style-loader e o css-loader faz a integração dos estilos
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // yarn add style-loader css-loader -D
      }
    ]
  }
}
