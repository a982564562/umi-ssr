import { defineConfig } from "umi";

export default defineConfig({
  ssr: {
    forceInitial: true,
    devServerRender: false
  },
  antd: {},
  dva: {},
  scripts: [
    { src: 'https://www.googletagmanager.com/gtag/js?id=UA-81288209-1', async: "async" },
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-81288209-1');
    `
  ],
  dynamicImport: {
    // webpackChunkName: true,
  },
  title: 'my app',
  hash: process.env.NODE_ENV === 'production',
  publicPath: '/dist/',
  manifest: {
		fileName: "ssr-client-mainifest.json",
		publicPath: "/dist/",
		basePath: "/"
	},
  chainWebpack(config, { webpack }) {
    if (process.env.NODE_ENV === 'development') {
      config.output.publicPath('http://localhost:8000/');
    }
  },
});
