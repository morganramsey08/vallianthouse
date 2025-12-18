// next.config.ts

import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // SASS/SCSS Configuration
  sassOptions: {
    // We use process.cwd() (Current Working Directory) which is the root of your project.
    // This is the safest way to define paths in Next.js config files.
    includePaths: [
      path.join(process.cwd(), 'styles')
    ],
  },

  // Other configurations go here (e.g., images, i18n, rewrites)
};

export default nextConfig;