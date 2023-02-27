module.exports = function (api) {
    api.cache(false);
    const presets = [
        [
            "@babel/preset-env",
            {
                "corejs": { "version":"3.4", proposals: true },
                "useBuiltIns": "usage",
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "58",
                    "safari": "11.1",
                    "ie": "11"
                }
            }
        ]
    ];
    const plugins = [
        ["@babel/plugin-proposal-class-properties"], ["@babel/plugin-transform-parameters"],
        ["@babel/transform-runtime",  {
            corejs       : false,
            helpers      : true,
            regenerator  : true,
            useESModules : false
        }]];
    return {
        presets,
        plugins
    };
};
