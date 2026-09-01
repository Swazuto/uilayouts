import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../packages/shadcn/src/base/collapsible';

export function Default() {
  return (
    <div style={{ maxWidth: 380 }}>
      <Collapsible defaultOpen>
        <CollapsibleTrigger
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid var(--border)',
            background: 'var(--card)',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          What is included in the Pro plan?
          <span>▾</span>
        </CollapsibleTrigger>
        <CollapsibleContent
          style={{
            padding: '12px 14px',
            fontSize: 13,
            color: 'var(--muted-foreground)',
            border: '1px solid var(--border)',
            borderTop: 'none',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          The Pro plan includes unlimited projects, priority support,
          advanced analytics, and up to 10 team seats.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export function ClosedByDefault() {
  return (
    <div style={{ maxWidth: 380 }}>
      <Collapsible>
        <CollapsibleTrigger
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid var(--border)',
            background: 'var(--card)',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Can I cancel anytime?
          <span>▸</span>
        </CollapsibleTrigger>
        <CollapsibleContent
          style={{
            padding: '12px 14px',
            fontSize: 13,
            color: 'var(--muted-foreground)',
          }}
        >
          Yes, cancel from your billing settings at any time and keep access
          until the end of the current cycle.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
