import { Twitter } from '../../packages/ui/src/brand-icons';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
      <Twitter width={20} height={20} />
      <Twitter width={32} height={32} />
      <Twitter width={48} height={48} />
    </div>
  );
}
