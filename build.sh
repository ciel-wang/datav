#!/usr/bin/env bash

yarn build
rm -rf ./dist/img/**
scp -r  ./dist/* ssh root@8.130.12.92:/back/avue/avue/avue-data
