import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../packages/shadcn/src/base/dialog';
import { Button } from '../../packages/shadcn/src/base/button';

export function Confirmation() {
  return (
    <Dialog defaultOpen modal={false}>
      <DialogTrigger render={<Button variant="outline">Delete project</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This permanently removes the project and all of its data. This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
