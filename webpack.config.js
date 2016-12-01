module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'dist.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'},
            {test: /\.html$/, loader: 'html'}
        ]
    }
};