import { Checkbox } from '../../packages/shadcn/src/base/checkbox';

export function States() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <Checkbox />
        Unchecked
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <Checkbox defaultChecked />
        Checked
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.6 }}>
        <Checkbox disabled />
        Disabled
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.6 }}>
        <Checkbox disabled defaultChecked />
        Disabled checked
      </label>
    </div>
  );
}

export function TaskList() {
  const tasks = [
    { label: 'Write the quarterly report', done: true },
    { label: 'Review pull requests', done: true },
    { label: 'Schedule design review', done: false },
    { label: 'Update onboarding docs', done: false },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 260 }}>
      {tasks.map((t) => (
        <label key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          <Checkbox defaultChecked={t.done} />
          {t.label}
        </label>
      ))}
    </div>
  );
}
