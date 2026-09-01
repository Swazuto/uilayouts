import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../packages/shadcn/src/base/navigation-menu';

export function ProductNav() {
  return (
    <NavigationMenu defaultValue="products">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[380px] grid-cols-2 gap-2 p-2">
              <li>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Analytics</span>
                    <span className="text-xs text-muted-foreground">
                      Real-time product usage dashboards.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Automations</span>
                    <span className="text-xs text-muted-foreground">
                      Trigger workflows from customer events.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Integrations</span>
                    <span className="text-xs text-muted-foreground">
                      Connect Slack, Notion, and Zapier.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">API</span>
                    <span className="text-xs text-muted-foreground">
                      Build custom tools on our platform.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
