const path = require("path")

module.exports = {
    resolve: {
        alias: {
            "@my-common-components/react": path.resolve(
                __dirname,
                "../packages/react/src"
            )
        }
    }
}
