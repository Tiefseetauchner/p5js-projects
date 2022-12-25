#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR

npx tsc &
$SCRIPT_DIR/node_modules/http-server/bin/http-server
