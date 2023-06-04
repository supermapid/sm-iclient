# sm-iclient

sm-iclient is a small subset of SuperMap iClient which is written in typescript, ESM module by default, and use ky-universal as the HTTP request.
By using ky-universal, it can be run on node and browser

This is created to provide smaller bundle than the full package SuperMap iClient and focus on providing simple typescript client to access iServer API.


## NOTICE
This package is in heavy development, so it is prone to API changes even though the breaking changes API versioning not changes.
The API will be fixed after all services are included and complete.

## Installation

Use the package manager pnpm, npm or yarn.

```bash
pnpm install @sm-iclient/iserver
pnpm install @sm-iclient/ol
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
