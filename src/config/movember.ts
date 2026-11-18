// Yearly Movember campaign banner, shown on the home and "Qui je suis" pages.
// During the campaign: update `kmDone` and `donationDone`, then deploy.
// After the campaign: set `enabled` to false. Next year: update the year and turn it back on.

export interface MovemberCampaign {
  enabled: boolean;
  year: number;
  kmDone: number;
  kmGoal: number;
  donationDone: number;
  donationGoal: number;
  donationUrl: string;
  /** Shown as "Jusqu'au …" (static site: no live countdown). */
  endLabel: string;
}

export const movember: MovemberCampaign = {
  enabled: true,
  year: 2026,
  kmDone: 85.3,
  kmGoal: 120,
  donationDone: 120,
  donationGoal: 200,
  donationUrl: 'https://movember.com/m/14950664',
  endLabel: '30 novembre',
};
