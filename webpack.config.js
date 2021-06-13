const path = require('path'); //accede a las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


//es para exportar todo lo que esta adentro
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js' //nombre de archivo final para produccion
  },

  resolve: {
    extensions: ['.js'],
  },

  module: { //reglas necesarias que se utilizaran
    rules: [
      {
        test: /\.js?$/,//permite identificar los archivos segun donde se encuentran
        exclude: /node_modules/,//excluimos para produccion la carpeta de node
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  plugins: [ //establecemos los plugin que vamos a utilizar

    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),

    //Sirve para que pueda leer los archivos css
    new CopyWebpackPlugin([{
      from: './src/styles/styles.css',
      to: '' //si viene un archivo vacio lo ignora
    }])
  ]
}

