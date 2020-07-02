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
	hash: !isDev,
	// publicPath: isDev ? "/" : "/dist/",
	publicPath: "/dist/",
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
		publicPath: "/dist/",
		basePath: "/"
	},
	chainWebpack(config, { webpack }) {
		if (isDev) {
			config.output.publicPath("/");
		}
	}
});
