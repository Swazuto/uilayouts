import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../packages/shadcn/src/base/tabs';

export function AccountSettings() {
  return (
    <Tabs defaultValue="account" className="w-[360px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-lg border p-4 text-sm">
        <p className="font-medium">Account details</p>
        <p className="mt-1 text-muted-foreground">
          Update your name, email, and profile photo.
        </p>
      </TabsContent>
      <TabsContent value="password" className="rounded-lg border p-4 text-sm">
        <p className="font-medium">Change password</p>
        <p className="mt-1 text-muted-foreground">
          Choose a new password with at least 8 characters.
        </p>
      </TabsContent>
      <TabsContent value="team" className="rounded-lg border p-4 text-sm">
        <p className="font-medium">Team members</p>
        <p className="mt-1 text-muted-foreground">
          Invite teammates and manage their permissions.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export function LineVariant() {
  return (
    <Tabs defaultValue="overview" className="w-[360px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-sm text-muted-foreground">
        A snapshot of your workspace activity this week.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-sm text-muted-foreground">
        Traffic is up 12% compared to last month.
      </TabsContent>
      <TabsContent value="reports" className="p-4 text-sm text-muted-foreground">
        Export weekly or monthly summaries as PDF.
      </TabsContent>
    </Tabs>
  );
}
