/**
 * Feature Flags & Configurations
 * Centralised toggle and config for all site features (banners, modes, etc.)
 */

export interface MovemberBannerConfig {
  enabled: boolean;
  kmTotal: number;
  kmDone: number;
  donationGoal: number;
  donationDone: number;
  donationUrl: string;
  endDate: string; // ISO date string for "days remaining" calculation
}

export interface SiteFlags {
  movemberBanner: MovemberBannerConfig;
  // Add other feature flags here as needed
}

// Default configuration - override these values as needed
export const flags: SiteFlags = {
  movemberBanner: {
    enabled: true, // Set to true to display the banner
    kmTotal: 120,
    kmDone: 61.1,
    donationGoal: 200,
    donationDone: 120,
    donationUrl: 'https://movember.com/m/14950664?mc=1',
    endDate: '2026-11-30', // Used for "days remaining" calculation
  },
};
