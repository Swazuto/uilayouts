import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from '../../packages/shadcn/src/base/combobox';

const frameworks = ['Next.js', 'Remix', 'Astro', 'SvelteKit', 'Nuxt'];

export function FrameworkPicker() {
  return (
    <Combobox items={frameworks} defaultOpen defaultValue="Next.js">
      <ComboboxInput placeholder="Search frameworks..." />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework} value={framework}>
                {framework}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
