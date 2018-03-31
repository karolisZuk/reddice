import path from 'path';
import webpack from 'webpack';

export default {
    devtool:'eval-source-map',
    mode:'development',
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.js')
    ],
    output:{
        path:'/',
        filename: 'bundle.js',
        publicPath:'/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders:['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['*', '.js']
    }
}