import { RadioGroup, RadioGroupItem } from '../../packages/shadcn/src/base/radio-group';

export function Basic() {
  return (
    <RadioGroup defaultValue="standard" style={{ width: 260 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <RadioGroupItem value="standard" />
        Standard shipping
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <RadioGroupItem value="express" />
        Express shipping
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <RadioGroupItem value="overnight" />
        Overnight shipping
      </label>
    </RadioGroup>
  );
}

export function DisabledOption() {
  return (
    <RadioGroup defaultValue="monthly" style={{ width: 260 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <RadioGroupItem value="monthly" />
        Monthly billing
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <RadioGroupItem value="yearly" />
        Yearly billing
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.6 }}>
        <RadioGroupItem value="lifetime" disabled />
        Lifetime billing (unavailable)
      </label>
    </RadioGroup>
  );
}
