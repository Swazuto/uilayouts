import { Dribbble } from '../../packages/ui/src/brand-icons';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
      <Dribbble width={20} height={20} />
      <Dribbble width={32} height={32} />
      <Dribbble width={48} height={48} />
    </div>
  );
}
