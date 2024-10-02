#!/bin/bash

npm run start &
npm run test-chrome
sleep 2
npm run test-chrome
exit $?
