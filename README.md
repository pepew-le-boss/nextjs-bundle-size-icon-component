# Icon Component Bundle Size Optimization

When building the app with the bundle analyzer, under certain conditions the Icon.tsx chunk (in the client.html) has a huge parsed size (to better view the chunk choose the "Stat" view).
Here's the explanation:

There is an Icon.tsx component that looks like this:
```javascript
export const Icon = {
  ICON_NAME_1: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      ...
    </svg>
  ),
  ICON_NAME_2: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      ...
    </svg>
  ),
  ...
}
```

Then it can be used like this:
```javascript
<Icon.ICON_NAME_1 style={{ width: 100, height: 100, fill: "orange" }} />
```

When used is server components, there are no problems.

When imported in a client component, a chunk Icon.tsx is created with an optimized parsed size (stat size: 195kB / parsed size: 1kB).

For example:
```javascript
"use client"

import { Icon } from "@/components/Icon"

export function ClientComponent() {
  return (
    <Icon.ICON_NAME_1 style={{ width: 100, height: 100, fill: "purple" }} />
  )
}
```

And then used like this:
```javascript
export default function Home() {
  return (
    <main>
      <ClientComponent />
    </main>
  );
}
```

However, when at least another client component that is importing Icon.tsx is used anywhere in the app, the bundle analyzer shows that the Icon.tsx chunk is not optimized at all (stat size: 195kB / parsed size: 168kB).

For example:
```javascript
export default function Home() {
  return (
    <main>
      <ClientComponent />
      <ClientComponent2 />
    </main>
  );
}
```

Is it a normal behaviour ? Is there a way to fix that ?
