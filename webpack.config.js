module.exports = {
	entry:
	{
        App: [
            "./app/main.js",
            "webpack-dev-server/client?http://localhost:8080/"
        ]
	},
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js",
        publicPath: '/dist/'
        // publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: ['babel-loader'], query: {presets: ['react', 'es2015'] }, exclude: /node_modules/ },
            {test: /\.json$/, loader: "json"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css']
    }
};
