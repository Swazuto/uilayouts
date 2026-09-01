import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '../../packages/shadcn/src/base/sidebar';
import { Home, Inbox, Search, Settings, Users } from 'lucide-react';

const items = [
  { title: 'Home', icon: Home },
  { title: 'Inbox', icon: Inbox },
  { title: 'Search', icon: Search },
  { title: 'Team', icon: Users },
  { title: 'Settings', icon: Settings },
];

export function Default() {
  return (
    <SidebarProvider defaultOpen style={{ minHeight: 420 }}>
      <Sidebar>
        <SidebarHeader>
          <div style={{ fontWeight: 600, padding: '4px 8px' }}>Acme Inc</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div style={{ fontSize: 12, color: '#71717a', padding: '4px 8px' }}>
            v1.0.0
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 16 }}>
          <SidebarTrigger />
          <span style={{ fontWeight: 500 }}>Dashboard</span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
