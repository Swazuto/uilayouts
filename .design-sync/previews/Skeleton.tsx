import { Skeleton } from '../../packages/shadcn/src/ui/skeleton';

export function TextLines() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 260 }}>
      <Skeleton style={{ height: 16, width: '80%' }} />
      <Skeleton style={{ height: 16, width: '100%' }} />
      <Skeleton style={{ height: 16, width: '60%' }} />
    </div>
  );
}

export function CardPlaceholder() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 260 }}>
      <Skeleton style={{ height: 140, width: '100%' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Skeleton style={{ height: 40, width: 40, borderRadius: '9999px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <Skeleton style={{ height: 12, width: '70%' }} />
          <Skeleton style={{ height: 12, width: '40%' }} />
        </div>
      </div>
    </div>
  );
}
