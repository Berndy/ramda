## Usage
`bun run benchmarkPath.js`

## Results

```
nth old 0 x 5,320,103 ops/sec ±2.26% (20 runs sampled)
nth new 0 x 5,243,102 ops/sec ±2.57% (24 runs sampled)
nth old 1 x 5,396,598 ops/sec ±2.96% (18 runs sampled)
nth new 1 x 5,339,282 ops/sec ±1.24% (23 runs sampled)
nth old -1 x 5,431,793 ops/sec ±1.04% (24 runs sampled)
nth new -1 x 5,298,789 ops/sec ±2.09% (22 runs sampled)
```

Path with old Nth function
```
path old      x 2,152,120 ops/sec ±0.87% (23 runs sampled)
path new      x 5,383,754 ops/sec ±2.52% (20 runs sampled)
path internal x 11,017,936 ops/sec ±1.25% (21 runs sampled)
```

path with new Nth function
```
path old      x 2,203,569 ops/sec ±1.00% (23 runs sampled)
path new      x 6,128,519 ops/sec ±2.51% (23 runs sampled)
path internal x 14,423,742 ops/sec ±3.52% (22 runs sampled)
```

## Optimization steps
I tried to avoid creating a var every time the function runs, instead only creating a const when necessary in the scope of the condition
