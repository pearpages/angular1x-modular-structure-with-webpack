module.exports = {
    context: __dirname + '/src',
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'dist.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            //{test: /\.html$/, loader: 'html'}
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/}
        ]
    }
};