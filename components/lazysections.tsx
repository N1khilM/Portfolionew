"use client";

import dynamic from "next/dynamic";

const BackgroundEffect = dynamic(() => import("./background-effect"), {
  ssr: false,
});
const VenomStarParticle = dynamic(() => import("./tsparticles"), {
  ssr: false,
});
const ShootingStars = dynamic(() => import("./tsparticlesShootingstars"), {
  ssr: false,
});
const ScrollIndicator = dynamic(() => import("./scroll-indicator"), {
  ssr: false,
});

export default function LazySections() {
  return (
    <>
      <BackgroundEffect />
      <VenomStarParticle />
      <ShootingStars />
      <ScrollIndicator />
    </>
  );
}
