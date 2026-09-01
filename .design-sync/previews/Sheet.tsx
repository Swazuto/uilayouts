import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../packages/shadcn/src/base/sheet';
import { Button } from '../../packages/shadcn/src/base/button';

export function ShareLink() {
  return (
    <Sheet defaultOpen modal={false}>
      <SheetTrigger render={<Button variant="outline">Share</Button>} />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Share this project</SheetTitle>
          <SheetDescription>
            Anyone with the link can view this project. Only editors can make changes.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          <label className="flex flex-col gap-1 text-sm">
            Link
            <input
              readOnly
              defaultValue="https://uilayouts.app/share/roadmap-q3"
              className="h-9 rounded-md border border-neutral-200 bg-white px-3 text-sm dark:border-neutral-800 dark:bg-neutral-950"
            />
          </label>
        </div>
        <SheetFooter>
          <Button variant="outline">Copy link</Button>
          <Button>Done</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
