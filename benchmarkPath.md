## Usage
`bun run benchmarkPath.js`

## Results
```
path old      x 2,060,753 ops/sec ±3.83% (22 runs sampled)
path new      x 4,981,880 ops/sec ±0.92% (24 runs sampled)
path internal x 8,866,690 ops/sec ±4.40% (23 runs sampled)
```

## Optimization steps
- Own code for path function to avoid curry call and extra array when using paths
- moved nth functionality to internal to have access to an uncurried version
- moved path functionality to internal to have access to an uncurried version
- replacing calls of nth and path with uncurried versions will also improve performance of dependant functions