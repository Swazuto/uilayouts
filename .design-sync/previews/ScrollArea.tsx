import { ScrollArea } from '../../packages/shadcn/src/base/scroll-area';

const activities = [
  'Sofia Chen commented on "Q3 Roadmap"',
  'Deploy to production succeeded',
  'Jordan Lee opened pull request #482',
  'New member Maya Torres joined Engineering',
  'Design review scheduled for Thursday',
  'Invoice #4021 was paid',
  'Alex Kim resolved 3 issues in "Billing"',
  'Weekly digest sent to 128 subscribers',
  'Priya Nair updated the brand guidelines',
  'Backup completed for workspace "Acme Inc"',
];

export function ActivityFeed() {
  return (
    <ScrollArea className="h-72 w-80 rounded-lg border">
      <div className="flex flex-col gap-3 p-4">
        {activities.map((activity) => (
          <div key={activity} className="text-sm text-foreground">
            {activity}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export function ChangelogList() {
  const entries = [
    { version: '2.4.0', note: 'Added dark mode support across all components.' },
    { version: '2.3.2', note: 'Fixed a rendering issue in the date picker.' },
    { version: '2.3.1', note: 'Improved keyboard navigation for menus.' },
    { version: '2.3.0', note: 'Introduced the new combobox component.' },
    { version: '2.2.0', note: 'Redesigned the settings page layout.' },
    { version: '2.1.0', note: 'Added export to CSV for reports.' },
  ];
  return (
    <ScrollArea className="h-64 w-80 rounded-lg border">
      <div className="flex flex-col gap-4 p-4">
        {entries.map((entry) => (
          <div key={entry.version} className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-foreground">v{entry.version}</span>
            <span className="text-sm text-muted-foreground">{entry.note}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
