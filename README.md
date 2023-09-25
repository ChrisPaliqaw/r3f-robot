# r3f-robot

## Installation

```bash
npm install
```

## Linting

eslint is disabled for most components, because eslint can't handle non-standard
attribute for elements with lowercase names:
```JavaScript
<group ref={groupRef} position={[0, 0, 0]}>
```
But this a convention of react-three-fiber. It's disabled like this at the top
of a tsx file:
```JavaScript
/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
...
```

You can run prettier and lint like so:

```bash
npm run prettier
npm run lint
```

## Testing

```bash
npm run test
```

## Production build

```bash
npm run build
```