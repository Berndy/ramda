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
Varying results from minor to about 100% performance gains, but seemingly always faster?
```
path         x 10,047,843 ops/sec ±6.63% (19 runs sampled)
path alt nth x 11,808,051 ops/sec ±4.07% (23 runs sampled)
```

```
path         x 9,025,663 ops/sec ±3.51% (23 runs sampled)
path alt nth x 22,340,029 ops/sec ±3.89% (20 runs sampled)
```
