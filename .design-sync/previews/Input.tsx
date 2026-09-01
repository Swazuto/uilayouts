import { Input } from '../../packages/shadcn/src/base/input';

export function Basic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 260 }}>
      <Input type="text" placeholder="Full name" />
      <Input type="email" placeholder="you@example.com" />
      <Input type="password" placeholder="Password" />
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 260 }}>
      <Input type="text" defaultValue="Jordan Blake" />
      <Input type="text" placeholder="Disabled field" disabled />
      <Input type="email" defaultValue="not-an-email" aria-invalid="true" />
    </div>
  );
}
