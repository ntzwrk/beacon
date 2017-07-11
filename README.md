# Beacon

[![Travis Build Status](https://travis-ci.org/ntzwrk/beacon.svg?branch=develop)](https://travis-ci.org/ntzwrk/beacon)

_This software is currently under heavy development. If you like to stay updated and follow the development, you can
track https://blog.ntzwrk.org/tags/beacon/ or track the [`develop`](https://github.com/ntzwrk/beacon/tree/develop)
branch._

---
Beacon is a transparent and secure voting software powered by Blockstack's software stack. It lets you issue votes into
a blockchain and other users vote on that.

Because of Blockstack's properties the app works completely decentralized without having to trust anyone. Beacon uses
decentral naming, identity and storage as provided by [blockstack.js](https://github.com/blockstack/blockstack.js).

## Developing

If you don't have already, you need to [install `yarn`](https://yarnpkg.com/en/docs/install).

Clone this repository and go into the new folder:
```bash
$ git clone https://github.com/ntzwrk/beacon
$ cd beacon
```

Then install all necessary dependencies with:
```bash
$ yarn install
```

That's it, you have set up the repository and are able to run the following commands.

### Start development environment
```bash
$ yarn dev
```

### Run tests
```bash
$ yarn test
```

### Generate documentation
```bash
$ yarn document
```


## Contributing

Great to hear!

If you'd like to contribute code, please raise it against the [`develop`](https://github.com/ntzwrk/beacon/tree/develop)
branch (and if you're familiar with [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) you're welcome
to use it).
If you change backend code that's in the documentation, please re-create it with `yarn document`.

If you're not a developer but like to contribute anyway, you can help by testing the software, finding and reporting
bugs, and of course spreading the word.

## License

This code is published under the [GNU General Public License v3.0](LICENSE.md).
