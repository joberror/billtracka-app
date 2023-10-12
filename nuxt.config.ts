// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Invoice: payment record and invoice for small-scale businesses",
      meta: [
        { name: "author", content: "Invoice" },
        {
          name: "description",
          content:
            "An invoice app with a difference; built for enterprise with customization and unique features",
        },
        {
          name: "keywords",
          content: "invoice, payments, bills, records, receipts, logger",
        },
        { name: "rating", content: "General" },
        {
          name: "copyright",
          content: `Invoice - ${new Date().getFullYear()}`,
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=yes" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: true,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 500, 600, 700],
          "JetBrains+Mono": [400],
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
      },
    ],
  ],
  devtools: { enabled: true },
});
