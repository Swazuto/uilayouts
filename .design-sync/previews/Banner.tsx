import { Banner } from '../../packages/ui/src/banner';

export function Default() {
  return (
    <Banner
      id="release-2026"
      height="3rem"
      message="UI Layouts Pro is here — 60+ new blocks, ship faster."
    />
  );
}

export function Rainbow() {
  return (
    <Banner
      id="rainbow-launch"
      variant="rainbow"
      height="3rem"
      message="Join the beta: real-time collaboration is now live."
    />
  );
}
