import { Linkedin } from '../../packages/ui/src/brand-icons';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
      <Linkedin width={20} height={20} />
      <Linkedin width={32} height={32} />
      <Linkedin width={48} height={48} />
    </div>
  );
}
