import {
  CopyIcon,
  ScissorsIcon,
  ClipboardIcon,
  Trash2Icon,
  PencilIcon,
} from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '../../packages/shadcn/src/base/context-menu';

export function FileActions() {
  return (
    <ContextMenu defaultOpen>
      <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-sm text-muted-foreground dark:border-neutral-700">
        Right-click this card
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <PencilIcon />
          Rename
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CopyIcon />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon />
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon />
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
