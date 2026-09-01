import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../packages/shadcn/src/base/drawer';

export function EditProfile() {
  return (
    <Drawer defaultOpen modal={false} swipeDirection="right">
      <DrawerTrigger>Edit profile</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Update your name and handle. Changes save automatically.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm">
            Display name
            <input
              defaultValue="Priya Nair"
              className="h-9 rounded-md border border-neutral-200 bg-white px-3 text-sm dark:border-neutral-800 dark:bg-neutral-950"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Handle
            <input
              defaultValue="@priyanair"
              className="h-9 rounded-md border border-neutral-200 bg-white px-3 text-sm dark:border-neutral-800 dark:bg-neutral-950"
            />
          </label>
        </div>
        <DrawerFooter>
          <DrawerClose>Cancel</DrawerClose>
          <DrawerClose>Save changes</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
