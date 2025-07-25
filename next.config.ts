// @ts-check

import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase: any, { }) => {
  return {
    output: 'export', // Enables static export
    trailingSlash: true,  // for file structure
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  }
};