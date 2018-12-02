const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withBundleAnalyzer({
  webpack(config) {
    config.optimization.usedExports = true
    config.module.rules.push({
      test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
            }
        ]
    })

    return config
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
})
