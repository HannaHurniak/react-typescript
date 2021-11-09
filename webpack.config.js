const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: ['./src/index.tsx'],
      },
    output: {
      path: path.resolve(__dirname, 'app'),
      filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html',
            chunks: ['main'] 
        }),
        new CopyPlugin({
            patterns: [{ from: "./src/assets", to: "assets" }],
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.jxs', '.tsx'],
      },
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
      },
};