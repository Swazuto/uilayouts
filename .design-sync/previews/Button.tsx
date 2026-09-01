import { Button } from '../../packages/shadcn/src/base/button';
import { Download, Loader2, Trash2 } from 'lucide-react';

export function Variants() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Download">
        <Download />
      </Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button>
        <Download /> Download report
      </Button>
      <Button variant="destructive">
        <Trash2 /> Delete project
      </Button>
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Loader2 className="animate-spin" /> Saving...
      </Button>
    </div>
  );
}
