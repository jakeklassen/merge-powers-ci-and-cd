#!/bin/bash

# Does not work!
act schedule -W .github/workflows/automerge.yaml --container-options '--name=automerge-run-001' &
act schedule -W .github/workflows/automerge.yaml --container-options '--name=automerge-run-002' &
wait
