## Usage
`bun run benchmarkPath.js`

## Results
```
path old x 1,856,801 ops/sec ±3.81% (23 runs sampled)
path new x 4,985,123 ops/sec ±2.02% (21 runs sampled)
```

## Optimization steps
- Own code for path function to avoid curry call and extra array when using paths
- moved nth functionality to internal to have access to an uncurried version
- moved path functionality to internal to have access to an uncurried version
- replacing calls of nth and path with uncurried versions will also improve performance of dependant functions