// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/lwc-create-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources', to: 'dist/resources' }],
    sourceDir: './src/client',
    moduleDir: './src/client/modules',
    devServer: {
        port: 3001,
        host: 'localhost',
        open: false,
        stats: 'errors-only',
        noInfo: true,
        contentBase: './src/client'
        // run a local backend on another port (ex: nodejs) but still use watch command for lwc live re-loading
        // proxy: { '/': 'http://localhost:8443'},
    },
    // Default server options for serve command
    server: {
        port: 3002,
        host: 'localhost',
        open: false,
        customConfig: './src/server/index.js'
    },
};
