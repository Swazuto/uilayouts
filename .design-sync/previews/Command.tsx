import {
  CalendarIcon,
  SmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
} from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../../packages/shadcn/src/ui/command';

export function QuickActions() {
  return (
    <Command className="w-[360px] rounded-lg border shadow-md">
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            Schedule a meeting
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            Set a status
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
            Open calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function EmptyState() {
  return (
    <Command className="w-[360px] rounded-lg border shadow-md">
      <CommandList>
        <CommandEmpty>No results found for "kubernetes".</CommandEmpty>
      </CommandList>
    </Command>
  );
}
