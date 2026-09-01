import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '../../packages/shadcn/src/base/item';

export function Default() {
  return (
    <div style={{ maxWidth: 420 }}>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Payment received</ItemTitle>
          <ItemDescription>Invoice #4821 from Northwind Traders</ItemDescription>
        </ItemContent>
        <ItemActions>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>
            2m ago
          </span>
        </ItemActions>
      </Item>
    </div>
  );
}

export function GroupWithSeparators() {
  const notifications = [
    {
      title: 'New comment on your PR',
      description: 'Priya Sharma left feedback on "Refactor auth flow"',
    },
    {
      title: 'Deployment succeeded',
      description: 'staging-web deployed commit a3f21c9 in 42s',
    },
    {
      title: 'Weekly summary ready',
      description: 'Your team closed 18 tasks this week',
    },
  ];

  return (
    <div style={{ maxWidth: 420 }}>
      <ItemGroup>
        {notifications.map((n, i) => (
          <div key={n.title}>
            <Item>
              <ItemMedia variant="image">
                <img
                  src={`https://i.pravatar.cc/80?img=${i + 12}`}
                  alt=""
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{n.title}</ItemTitle>
                <ItemDescription>{n.description}</ItemDescription>
              </ItemContent>
            </Item>
            {i < notifications.length - 1 && <ItemSeparator />}
          </div>
        ))}
      </ItemGroup>
    </div>
  );
}

export function CompactMuted() {
  return (
    <div style={{ maxWidth: 420 }}>
      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Storage almost full</ItemTitle>
          <ItemDescription>You have used 92% of your 50GB plan</ItemDescription>
        </ItemContent>
        <ItemActions>
          <button
            type="button"
            style={{
              fontSize: 12,
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'transparent',
            }}
          >
            Upgrade
          </button>
        </ItemActions>
      </Item>
    </div>
  );
}
