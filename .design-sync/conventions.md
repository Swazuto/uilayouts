# ui-layouts conventions

Tailwind v4 utility-class system with CSS-variable tokens (oklch). No wrapper
provider is required for styling — tokens and utilities apply as soon as
`styles.css` is loaded. `MotionConfig` (from `motion/react`, exported in this
bundle) IS used internally by many section components for entrance
animations, but only affects motion timing — never required for correct
layout/paint.

## Styling idiom — token-backed Tailwind utilities

Never hardcode raw hex/oklch colors or arbitrary pixel radii — use these
utility classes, which resolve through `--radius`/`--background`/etc.
CSS variables (themeable, dark-mode aware via the `.dark` class):

| Concern | Classes |
|---|---|
| Page/surface | `bg-background text-foreground` |
| Card/panel | `bg-card text-card-foreground` |
| Primary action | `bg-primary text-primary-foreground` |
| Secondary action | `bg-secondary text-secondary-foreground` |
| Muted/subtle | `bg-muted text-muted-foreground` |
| Accent | `bg-accent text-accent-foreground` |
| Destructive | `bg-destructive` |
| Popover/menu surface | `bg-popover text-popover-foreground` |
| Borders/inputs/focus ring | `border-border`, `border-input`, `ring-ring` |
| Sidebar surface | `bg-sidebar text-sidebar-foreground`, plus `sidebar-primary`/`sidebar-accent`/`sidebar-border` variants |
| Corner radius | `rounded-lg`/`rounded-md`/`rounded-xl` (derive from `--radius: 0.625rem`) — never an arbitrary `rounded-[Npx]` |
| Brand type | `font-spaceGrotesk`, `font-dmSans`, `font-manrope`, `font-poppins` (loaded via remote `@import` — see below) |

Base/dark values live in `tokens/token.css`; component CSS lives in
`_ds_bundle.css`, both reachable from `styles.css`'s `@import` closure.

## Where the truth lives

Read `styles.css` (its `@import` chain: `tokens/token.css` for the color/
radius variables, `_ds_bundle.css` for compiled component styles) before
styling anything new. Read the per-component `<Name>.prompt.md` under
`components/<group>/<Name>/` for that component's real prop API and usage
example — it's generated from the actual shipped `.d.ts`, not a guess.

## Composition idiom

- Base primitives (`components/base/*` — Button, Dialog, Sidebar, Select,
  etc.) are Radix-style compound components: import the pieces you need
  (`Dialog`, `DialogTrigger`, `DialogContent`, ...) and compose them
  directly — never reimplement a primitive with raw HTML.
- Section blocks (`components/hero-section/*`, `about-section/*`,
  `team-section/*`, `pricing-section/*`, etc.) are full, self-contained
  page sections — drop one in whole rather than decomposing it further.

## Example — a primary action inside a card

```tsx
import { Button } from '@repo/shadcn'

function Example() {
  return (
    <div className="bg-card text-card-foreground rounded-lg border border-border p-6">
      <h3 className="font-spaceGrotesk text-lg font-semibold">Upgrade plan</h3>
      <p className="text-muted-foreground text-sm">Unlock every section block.</p>
      <Button className="bg-primary text-primary-foreground mt-4 rounded-md">
        Get started
      </Button>
    </div>
  )
}
```
