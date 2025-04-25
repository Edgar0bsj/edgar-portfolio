import mdx from "@next/mdx";

// Configuração do ESLint
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

// Configuração do MDX
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// Exporte a configuração combinada
export default withMDX(nextConfig);
