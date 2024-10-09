const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true,
        library: {
            name: "MyCommonComponents",
            type: "umd"
        },
        globalObject: "this"
    },
    target: "web",
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React" // React는 외부에서 주입됨
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM" // ReactDOM도 외부에서 주입됨
        }
    },
    resolve: {
        fallback: {
            self: false
        },
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true, // 타입 검사 속도 향상
                        configFile: "tsconfig.json"
                    }
                },
                exclude: /(^|[/\\])(dist|build)/ // 빌드 폴더 제외
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /(^|[/\\])(dist|build)/ // 빌드 폴더 제외
            },
            {
                test: /\.css$/, // CSS 파일 처리
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i, // SCSS 파일 처리
                use: [
                    "style-loader", // HTML에 CSS를 삽입
                    "css-loader", // CSS를 JS로 변환
                    "sass-loader" // SCSS를 CSS로 변환
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            self: "window"
        })
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true
    }
}
