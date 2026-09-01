import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../packages/shadcn/src/base/tooltip';
import { Button } from '../../packages/shadcn/src/base/button';

export function IconButtonHint() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline">Save changes</Button>} />
        <TooltipContent>Saves the draft (⌘S)</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
