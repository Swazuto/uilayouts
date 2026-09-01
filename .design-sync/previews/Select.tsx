import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../packages/shadcn/src/base/select';

export function Default() {
  return (
    <div style={{ maxWidth: 320 }}>
      <Select defaultValue="ready" defaultOpen>
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Task status</SelectLabel>
            <SelectItem value="backlog">Backlog</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="ready">Ready for Review</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
