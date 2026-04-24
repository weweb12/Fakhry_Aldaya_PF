// next.config.mjs
const repoName = 'Fakhry_Aldaya_PF';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;