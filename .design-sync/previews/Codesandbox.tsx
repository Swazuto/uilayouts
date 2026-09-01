import { Codesandbox } from '../../packages/ui/src/brand-icons';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
      <Codesandbox width={20} height={20} />
      <Codesandbox width={32} height={32} />
      <Codesandbox width={48} height={48} />
    </div>
  );
}
