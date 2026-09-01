import { Badge } from '../../packages/shadcn/src/base/badge';
import { Check, X, Star } from 'lucide-react';

export function Variants() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  );
}

export function WithIcons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge variant="default">
        <Check data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="destructive">
        <X data-icon="inline-start" />
        Failed
      </Badge>
      <Badge variant="outline">
        <Star data-icon="inline-start" />
        Featured
      </Badge>
    </div>
  );
}

export function Statuses() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge variant="secondary">In progress</Badge>
      <Badge variant="default">Shipped</Badge>
      <Badge variant="destructive">Overdue</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  );
}
