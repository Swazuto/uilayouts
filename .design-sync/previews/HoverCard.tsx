import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../../packages/shadcn/src/base/hover-card';

export function AuthorPreview() {
  return (
    <HoverCard defaultOpen>
      <HoverCardTrigger className="text-sm font-medium text-foreground underline underline-offset-4">
        @sofia-chen
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
              SC
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sofia Chen</span>
              <span className="text-xs text-muted-foreground">@sofia-chen</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Product designer building design systems. Previously at Linear.
          </p>
          <span className="text-xs text-muted-foreground">Joined March 2021</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
