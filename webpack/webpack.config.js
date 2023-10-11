const { merge } = require('webpack');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
};