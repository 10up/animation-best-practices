// webpack.config.js
const config = require('10up-toolkit/config/webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

config.output.publicPath = ''

config.module.rules.push(
  {
    test: /\.html$/i,
    loader: 'html-loader'
  }
)

config.plugins.push(
    new HtmlWebpackPlugin({
        templateContent: (opts) => {
            const { htmlWebpackPlugin, compilation, webpackConfig } = opts;
            let styles = '';
            let scripts = '';

            htmlWebpackPlugin.files.css.forEach((file) => {
                const content = compilation.assets[file.substr(htmlWebpackPlugin.files.publicPath.length)].source()
                styles += `<style type="text/css">${content}</style>`;
            });

            htmlWebpackPlugin.files.js.forEach((file) => {
                const content = compilation.assets[file.substr(htmlWebpackPlugin.files.publicPath.length)].source()
                scripts += `<script type="module">${content}</script>`;
            });

            return `
        <!doctype html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${htmlWebpackPlugin.options.title}</title>
                ${styles}
            </head>
            <body>
                ${htmlWebpackPlugin.tags.bodyTags}
                ${scripts}
            </body>
        </html>`},
        // this is a workaround for the injection of the code from the output file into the .html
        // the injection will be handled in the template file
        inject: false,
        
	}),
)

module.exports = config
