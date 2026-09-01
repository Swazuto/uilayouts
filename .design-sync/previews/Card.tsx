import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '../../packages/shadcn/src/ui/card';
import { Button } from '../../packages/shadcn/src/base/button';

export function Composition() {
  return (
    <Card style={{ width: 360 }}>
      <CardHeader className="border-b">
        <CardTitle>Team Plan</CardTitle>
        <CardDescription>For growing teams that need more seats.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          Includes unlimited projects, priority support, and advanced analytics
          for up to 25 team members.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Upgrade now</Button>
      </CardFooter>
    </Card>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Card size="default" style={{ width: 260 }}>
        <CardHeader>
          <CardTitle>Default size</CardTitle>
          <CardDescription>Standard padding and spacing.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Used for most dashboard cards.</p>
        </CardContent>
      </Card>
      <Card size="sm" style={{ width: 260 }}>
        <CardHeader>
          <CardTitle>Compact size</CardTitle>
          <CardDescription>Tighter padding for dense layouts.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Used in sidebars and list views.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function SimpleContent() {
  return (
    <Card style={{ width: 300 }}>
      <CardContent>
        <p>
          A minimal card with just body content — no header or footer, useful
          for grouping loose information.
        </p>
      </CardContent>
    </Card>
  );
}
