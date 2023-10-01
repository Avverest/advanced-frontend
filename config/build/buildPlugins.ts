import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
