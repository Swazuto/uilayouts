import { AspectRatio } from '../../packages/shadcn/src/ui/aspect-ratio';

const image =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='225'><rect width='400' height='225' fill='%23d97757'/><circle cx='120' cy='90' r='40' fill='%23fff' opacity='0.85'/><rect x='0' y='150' width='400' height='75' fill='%23111' opacity='0.15'/></svg>";

export function Widescreen() {
  return (
    <div style={{ width: 320 }}>
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt="Mountain landscape at sunset"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </div>
  );
}

export function Square() {
  return (
    <div style={{ width: 200 }}>
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt="Product thumbnail"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </div>
  );
}

export function Portrait() {
  return (
    <div style={{ width: 180 }}>
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt="Portrait poster art"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </div>
  );
}
