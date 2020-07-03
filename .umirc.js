import { defineConfig } from "umi";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
	ssr: {
		forceInitial: true,
		devServerRender: true
	},
	antd: {},
	dva: {},
	dynamicImport: false,
	title: "my app",
	hash: false,
	// publicPath: isDev ? "/" : "/dist/",
	publicPath: "/",
	outputPath: "/dist/",
	routes: [
		{
			path: "/",
			component: "@/layout/index",
			routes: [
				{
					path: "/count",
					component: "@/pages/count"
				},
				{
					path: "/users",
					component: "@/pages/users"
				},
				{
					path: "/",
					component: "@/pages/index"
				}
			]
		}
	],
	manifest: {
		fileName: "ssr-client-mainifest.json",
		publicPath: "/dist/"
	},
	lessLoader: {
		javascriptEnabled: true
	},
	chainWebpack(config, { webpack }) {
		if (isDev) {
			config.output.publicPath("/");
		}
	}
});
