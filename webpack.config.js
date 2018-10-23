var path = require('path');
 
module.exports = {
    entry: "./src/App.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:['env', 'react', 'stage-0']
                },
            },
            { 
                test: /\.css$/, 
	        loader: "style-loader!css-loader" 
	    },
        ]
    }
}