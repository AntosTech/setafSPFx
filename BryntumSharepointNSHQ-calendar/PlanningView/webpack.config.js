module.exports = {
    entry: ["core-js/stable", "./Scripts/SchedulerCalendar.js"],
    output: {
        filename: "Scheduler.umd.js",
        path: __dirname + "/Scripts",
        libraryTarget: 'var',
        library: 'BryntumLib'
    },
    // devtool: 'inline-source-map',
    optimization: {
        minimize: true
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
