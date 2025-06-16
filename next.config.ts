// @ts-check

import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase: any, { }) => {
  if (phase === PHASE_PRODUCTION_BUILD ) {
    return {
      output: 'export', // Enables static export
      basePath: '/niu-acm-website', // Base path for the application
      assetPrefix: '/niu-acm-website', // Prefix for static assets
    }
  }

  return {
    output: 'export', // Enables static export
  }
};