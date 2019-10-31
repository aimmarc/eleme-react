const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://vmp.siwentech.com:7000',
            changeOrigin: true,
            pathRewrite: {'^/api': '/api'},
        }),
    );
};
