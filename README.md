 
 ## Description

Application for exchanging messages between two EC2 servers.  

In order to make it easier to test application, please use Swagger UI:
    http://{service-host}:{service-port}/api
    
 I used Nestjs for back end, and Redis for DB.
 
  Diagram of the flow you can find [here](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#R7Vpdk5o8FP41XNoxBBEu98PuzrQ7u1P7vu1thKiZRUIhrtpf37AkaEhUsKLu2J29gJN4Ep5znieHoxa8my0fUpRMn2iII8vuhksL3lu2DRzbtvL%2FbrgqLH1XGCYpCcWktWFIfmNh7ArrnIQ4UyYySiNGEtUY0DjGAVNsKE3pQp02ppG6aoImWDMMAxTp1h8kZFNhBa6%2FHnjEZDIVS3t2vxgYoeB1ktJ5LNazbDh%2B%2FyuGZ0j6Eg%2BaTVFIFxsmOLDgXUopK65myzsc5dhK2IrPfd4yWu47xTGr84HvQUB%2B%2FhjAmy%2BvHXvwP%2F1v%2BpJ2hJc3FM2xfIzPL8%2FD72LPbCVxen9SnPsCFrxdTAnDwwQF%2BeiCZwa3TdksEsP63uRCOGV4uWESe33AdIZZuuJTxGhPwCbSCvjifrERJAntdCM%2BrrAhkReT0vMaG34h4GkAlW2AqoIRD3GSX44jvLzJc5NDgeNQXN4HEcoyEtSECodK4upAbSDRMwAhbSmOECNvarqb0BErvFDCd1LGoSSqDITnf%2BqpTjI6TwMsPreZgRVXsLvXFUPpBDPNFUcQrTamJfmEbMemt2TPOv6Fx3U2lLgeniCuliAZTt8Ip0g1T7gzLm%2F85lZmTBDReXgSXkG3Ak3PQCzfkE8l247OLOCYVOhhcHEi5NjnFiHQ%2B6dC75FwjqZCBldbVOhYQgE%2BplJA0xF8WqWQjjeQ%2BzbIixWeX7808PhzMhWVjKX0Fd%2FRiKbcEtM4R3ZMoqhiQhGZxDnYHD3M7bc5aoQXjTdiYEbCMF%2FGGIa1SnWPEwmes6pmQz0SjiEQ7cUBXqcMVbWj9NtUhKp6pjlqqRDi90LsWi2FbP1Ezxhic77Tri0xvAam2l49poLWmNq%2FTsW0e%2BrZ5Z5bMf3rVEzbVwnRqyJcWzG7exwdSzEdbZ1TKCbUK5trUUxHxdvwPnpSxYQ1Gj153y%2Bp%2F%2FBl9xKNpIfuTlD6XuUYMciXawKlNf2CDSq%2BYBURniTp%2FreUUZFNX0eloWyqPs8Z94K3ytzu2O1Pv5WaWnuA9VrDVa%2BUvuGQZB%2BG8H8bBzl65vMZ6o2VmySJOEyM0LhxNCxecQQeHo0rIeH2EGFvHFyiEKslk6HXBU2FQnvU0NskW4Q4R4MVgYL3sBkejbXZrXaxDdpsbAqC9rqCevGwVZybFJfyiQAsJotv79xPdhNNFmG8kIIUeEr05LnWtBwFEmLhx6%2F4abuFqL9OPD4NDR3zyzg29tNztwLUFrG%2BqmH%2BeQ8VmSPtv%2FR9BOb5KmOAc2ADvwNUR95pu%2Fe2Xik8f7l23qm0AxCcl3jQO6h06LRdO%2FQq3RBoaOSba4d%2Ba7WD3iA8qUZ5F6VRncr5cWB14Ps7i4y2FUovnB%2BfTF%2BnX5xIbSPgbpLXrw7Uc%2BPMxUENjboe4oFKG9B3DmOePHnKX7dU%2FLRMPbn8BysO2uad%2Bs4FDE23I1GP365%2FUVkEdf2zVTj4Aw%3D%3D).

I tried to make this app as simple as possible, but yet fully functionally - its only POC :) 


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
