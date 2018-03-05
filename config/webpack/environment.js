const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.set('Provide',  new webpack.ProvidePlugin({
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'],
        ActionCable: 'actioncable-modules',
    })
)

//environment.config.set('output.library', 'main')
environment.config.set('output.filename', 'server-bundle.js')

module.exports = environment

// github.com/rails/webpacker/blob/master/docs/webpack.md
