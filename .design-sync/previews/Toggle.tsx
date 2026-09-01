import { Toggle } from '../../packages/shadcn/src/base/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

export function Variants() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Toggle variant="default" aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle variant="outline" aria-label="Italic">
        <Italic />
      </Toggle>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Toggle size="sm" aria-label="Bold small">
        <Bold />
      </Toggle>
      <Toggle size="default" aria-label="Bold default">
        <Bold />
      </Toggle>
      <Toggle size="lg" aria-label="Bold large">
        <Bold />
      </Toggle>
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Toggle variant="outline" defaultPressed aria-label="Underline pressed">
        <Underline />
        Underline
      </Toggle>
      <Toggle variant="outline" aria-label="Italic off">
        <Italic />
        Italic
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Bold disabled">
        <Bold />
        Bold
      </Toggle>
    </div>
  );
}
