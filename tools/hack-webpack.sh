#!/usr/bin/env bash

cdir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
root_dir=${cdir%/*}

node_modules_dir="$root_dir/portal/node_modules"
config_dir="$node_modules_dir/react-scripts/config"
config_file="$config_dir/webpack.config.js"

stuffineed="fallback: { '@material-ui/core': false, '@material-ui/icons': false },"

echo "Replacing stuffineed in $config_file"

sed -i'' -e 's|// https://github.com/facebook/create-react-app/issues/290|'"$stuffineed"'|g' "$config_file"

