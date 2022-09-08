#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

git subtree push --prefix dist origin gh-pages