// webpack.config.js
const path = require('path');
const toolkitConfig = require('10up-toolkit/config/webpack.config.js');
const { hasPostCSSConfig, fromConfigRoot } = require('10up-toolkit/utils');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const { sync: glob } = require('fast-glob');

// Get the source HTML files.
const examples = glob('./src/**/*.html', { objectMode: true });
const entries = {};

// Create entries automatically for our plugin.
// This should allow anyone to make .html files in the src directory and have them automatically be added to the dist in the same structure.
examples.forEach(({path}) => {
    const key =  path.replace('./src/', '').replace('.html', '');
    const value = path;

    entries[key] = value;
})

// Use the alias instead of a relative path like '../../../../assets/css/'
toolkitConfig.resolve.alias['@styles'] = path.join(__dirname, 'src/assets/css/')

const config = {
    ...toolkitConfig,
    output: {
        clean: true,
        path: path.join(__dirname, 'dist/'),
        publicPath: '/',
    },
    module: {
        ...toolkitConfig.module,
        // Many of toolkits rules will collide and cause issues with this loader, so we're omitting using them here.
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                // Provide a fallback configuration if there's not
                                // one explicitly available in the project.
                                ...(!hasPostCSSConfig() && {
                                    config: fromConfigRoot('postcss.config.js'),
                                }),
                            },
                        },
                    }
                ],
            },
            {
                test: /\.svg$/,
                // No need to use the deprecated 'url-loader'.
                // The HtmlBundlerPlugin automaticaly transforms inlined SVG into utf8 data-URI in CSS.
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(jpg|jpeg|png|giff|webp)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/inline',
            },
        ],
    },
    // We should only need this for a plugin to process all our files due to how it handles assets.
    plugins: [
        new HtmlBundlerPlugin({
            entry: entries,
            js: {
                inline: true, // globally inline all extracted JS
            },
            css: {
                inline: true, // globally inline all extracted CSS
            }
        }),
    ],
}

module.exports = config