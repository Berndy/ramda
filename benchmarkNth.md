# Nth
## Usage
`bun run benchmarkNth.js`

## Results

```
nth old 0 x 43,213,419 ops/sec ±5.71% (23 runs sampled)
nth new 0 x 26,711,312 ops/sec ±5.35% (20 runs sampled)
nth old 1 x 42,951,693 ops/sec ±6.16% (22 runs sampled)
nth new 1 x 26,652,017 ops/sec ±5.74% (22 runs sampled)
nth old -1 x 40,707,893 ops/sec ±0.56% (21 runs sampled)
nth new -1 x 24,465,761 ops/sec ±3.91% (21 runs sampled)
```

## Optimization steps
I tried to avoid creating a var every time the function runs, instead only creating a const when necessary in the scope of the condition

# Effects on path
switch import in ./source/internal/_path.js between _nth.js and _nth_old.js and run
`bun run benchmarkPath.js`

## Results

Path with old Nth function
```
path old      x 2,171,188 ops/sec ±1.04% (24 runs sampled)
path new      x 5,352,858 ops/sec ±2.10% (22 runs sampled)
path internal x 8,065,776 ops/sec ±0.52% (23 runs sampled)
```

path with new Nth function
```
path old      x 2,179,445 ops/sec ±0.81% (22 runs sampled)
path new      x 6,395,729 ops/sec ±3.69% (23 runs sampled)
path internal x 12,270,453 ops/sec ±2.42% (21 runs sampled)
```
