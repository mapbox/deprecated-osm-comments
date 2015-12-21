module.exports = {
	entry:
	{
        App: [
            "./app/main.js",
            "webpack-dev-server/client?http://localhost:8080/"
        ]
	},
    output: {
        path: __dirname,
        filename: "dist/bundle.js",
        publicPath: 'http://localhost:8080/'
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
