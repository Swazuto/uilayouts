import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '../../packages/shadcn/src/base/popover';
import { Button } from '../../packages/shadcn/src/base/button';

export function NotificationSettings() {
  return (
    <Popover defaultOpen modal={false}>
      <PopoverTrigger render={<Button variant="outline">Notifications</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Notification preferences</PopoverTitle>
          <PopoverDescription>
            Choose how you'd like to be notified about activity on your projects.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center justify-between gap-4">
            Email digest
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between gap-4">
            Push alerts
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between gap-4">
            Weekly summary
            <input type="checkbox" />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
