import { Switch } from '../../packages/shadcn/src/base/switch';

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      <Switch size="sm" defaultChecked />
      <Switch size="default" defaultChecked />
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <Switch />
        Off
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <Switch defaultChecked />
        On
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.6 }}>
        <Switch disabled />
        Disabled
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.6 }}>
        <Switch disabled defaultChecked />
        Disabled on
      </label>
    </div>
  );
}
