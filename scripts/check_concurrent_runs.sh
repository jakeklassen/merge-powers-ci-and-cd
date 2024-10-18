#!/bin/bash

repo=$1
workflow_id=$2

if [[ $(curl -s https://api.github.com/repos/$repo/actions/workflows/$workflow_id/runs?per_page=10) =~ "queued" || $(curl -s https://api.github.com/repos/$repo/actions/workflows/$workflow_id/runs?per_page=10) =~ "in_progress" ]]; then
  echo "Another instance of this workflow is already running. Aborting."
  exit 1
fi