import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from '../../packages/shadcn/src/base/avatar';
import { Check } from 'lucide-react';

const photo1 =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%23d97757'/><circle cx='40' cy='32' r='16' fill='%23fff'/><rect x='16' y='52' width='48' height='28' rx='14' fill='%23fff'/></svg>";
const photo2 =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%233b82f6'/><circle cx='40' cy='32' r='16' fill='%23fff'/><rect x='16' y='52' width='48' height='28' rx='14' fill='%23fff'/></svg>";
const photo3 =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%2310b981'/><circle cx='40' cy='32' r='16' fill='%23fff'/><rect x='16' y='52' width='48' height='28' rx='14' fill='%23fff'/></svg>";

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function WithImage() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Avatar>
        <AvatarImage src={photo1} alt="Maria Chen" />
        <AvatarFallback>MC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={photo2} alt="James Ford" />
        <AvatarFallback>JF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
        <AvatarBadge>
          <Check />
        </AvatarBadge>
      </Avatar>
    </div>
  );
}

export function Group() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={photo1} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={photo3} alt="Tom Reyes" />
        <AvatarFallback>TR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KL</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  );
}
