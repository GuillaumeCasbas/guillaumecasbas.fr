import React, { useEffect, useState } from 'react';
import { flags, MovemberBannerConfig } from '../config/flags';
import '../css/movember-banner.css';

export interface MovemberBannerProps {
  config?: MovemberBannerConfig; // Optional override for testing
}

/**
 * Movember Banner Component
 * Temporary banner displayed at the top of the site (under header)
 * Features: progress bars for km/donation, days remaining counter, CTA to donation page
 */
export function MovemberBanner({ config }: MovemberBannerProps) {
  const bannerConfig = config ?? flags.movemberBanner;
  
  // Only render if enabled
  if (!bannerConfig.enabled) {
    return null;
  }

  // Calculate days remaining
  const calculateDaysRemaining = (): number => {
    const endDate = new Date(bannerConfig.endDate + 'T23:59:59');
    const now = new Date();
    const diffTime = endDate.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const daysRemaining = calculateDaysRemaining();

  // Calculate percentages for progress bars
  const kmPercentage = Math.min(100, (bannerConfig.kmDone / bannerConfig.kmTotal) * 100);
  const donationPercentage = Math.min(
    100,
    (bannerConfig.donationDone / bannerConfig.donationGoal) * 100
  );

  // Format numbers with French decimal separator (comma)
  const formatNumber = (num: number): string => {
    return num.toString().replace('.', ',');
  };

  // Animation state for progress bars
  const [kmProgress, setKmProgress] = useState(0);
  const [donationProgress, setDonationProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animation, set final values immediately
      setKmProgress(kmPercentage);
      setDonationProgress(donationPercentage);
    } else {
      // Animate progress bars on mount
      const animateProgress = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
        let current = 0;
        const increment = target / 20; // 20 steps for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(current);
          }
        }, 16); // ~60fps
        return timer;
      };

      const timer1 = animateProgress(kmPercentage, setKmProgress);
      const timer2 = animateProgress(donationPercentage, setDonationProgress);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }
  }, [kmPercentage, donationPercentage]);

  return (
    <div
      className="movember-banner"
      role="region"
      aria-label="Movember 2026 - Campagne de sensibilisation et collecte"
    >
      <div className="movember-banner__content">
        {/* Title - clickable to donation page */}
        <a
          href={bannerConfig.donationUrl}
          className="movember-banner__title"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Movember 2026 - Soutenir la cagnotte"
        >
          Movember 2026
        </a>

        {/* Indicators */}
        <div className="movember-banner__indicators">
          {/* KM Progress */}
          <div className="movember-banner__indicator">
            <span className="movember-banner__indicator-label">
              Course : {formatNumber(bannerConfig.kmDone)} / {bannerConfig.kmTotal} km
            </span>
            <div
              className="movember-banner__progress-bar"
              role="progressbar"
              aria-valuenow={kmPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${formatNumber(bannerConfig.kmDone)} kilomètres parcourus sur ${bannerConfig.kmTotal}`}
            >
              <div
                className="movember-banner__progress-fill"
                style={{ width: `${kmProgress}%` }}
              />
            </div>
          </div>

          {/* Donation Progress */}
          <div className="movember-banner__indicator">
            <span className="movember-banner__indicator-label">
              Collecte : {bannerConfig.donationDone} / {bannerConfig.donationGoal} €
            </span>
            <div
              className="movember-banner__progress-bar"
              role="progressbar"
              aria-valuenow={donationPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${bannerConfig.donationDone} euros collectés sur ${bannerConfig.donationGoal}`}
            >
              <div
                className="movember-banner__progress-fill"
                style={{ width: `${donationProgress}%` }}
              />
            </div>
          </div>

          {/* Days Remaining */}
          <div className="movember-banner__indicator">
            <span className="movember-banner__indicator-label">
              Jours restants : {daysRemaining}
            </span>
          </div>
        </div>

        {/* Primary CTA */}
        <a
          href={bannerConfig.donationUrl}
          className="movember-banner__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soutenir la cagnotte
        </a>
      </div>
    </div>
  );
}

export default MovemberBanner;
