import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from '../../packages/shadcn/src/base/progress';

export function Values() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}>
      <Progress value={25} />
      <Progress value={60} />
      <Progress value={90} />
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ width: 280 }}>
      <Progress value={72}>
        <ProgressLabel>Uploading files</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
}

export function Indeterminate() {
  return (
    <div style={{ width: 280 }}>
      <Progress value={null}>
        <ProgressLabel>Syncing changes…</ProgressLabel>
      </Progress>
    </div>
  );
}
