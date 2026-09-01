import { Github } from '../../packages/ui/src/brand-icons';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
      <Github width={20} height={20} />
      <Github width={32} height={32} />
      <Github width={48} height={48} />
    </div>
  );
}
