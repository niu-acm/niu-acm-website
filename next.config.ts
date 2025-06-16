// @ts-check

import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase: any, { }) => {
  return {
    output: 'export', // Enables static export
  }
};