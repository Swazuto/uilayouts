import { Separator } from '../../packages/shadcn/src/base/separator';

export function Horizontal() {
  return (
    <div style={{ width: 320 }}>
      <div style={{ fontSize: 14, fontWeight: 500 }}>Account settings</div>
      <Separator style={{ margin: '12px 0' }} />
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        Manage your profile, notifications, and security preferences.
      </div>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
      <span style={{ fontSize: 14 }}>Blog</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 14 }}>Docs</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 14 }}>Pricing</span>
    </div>
  );
}
