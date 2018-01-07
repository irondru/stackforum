const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.set('Provide',  new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'],
        ActionCable: 'actioncable-modules',
    })
)

//environment.config.set('output.library', 'main')

const config = environment.toWebpackConfig()

config.resolve.alias = {
    jquery: "jquery/src/jquery",
}

module.exports = environment

// github.com/rails/webpacker/blob/master/docs/webpack.md