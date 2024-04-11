# Results

```sh
bombardier http://localhost:3000
```

## Next.js app-dir

```
Statistics        Avg      Stdev        Max
  Reqs/sec       769.09     482.71    3003.41
  Latency      161.33ms    92.93ms      1.67s
  HTTP codes:
    1xx - 0, 2xx - 7786, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     2.97MB/s
```

## Remix

```
npm run build  1.81s user 0.20s system 124% cpu 1.618 total

Statistics        Avg      Stdev        Max
  Reqs/sec      3486.61     687.41    4930.03
  Latency       35.79ms    29.17ms      1.01s
  HTTP codes:
    1xx - 0, 2xx - 34988, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     6.80MB/s
```

## Rakkas

```
npm run build  1.61s user 0.16s system 102% cpu 1.719 total

Statistics        Avg      Stdev        Max
  Reqs/sec      4761.37    1159.54    6353.24
  Latency       26.22ms    44.05ms      1.78s
  HTTP codes:
    1xx - 0, 2xx - 47730, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.76MB/s
```
