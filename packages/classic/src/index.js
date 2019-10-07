'use strict'

import * as Subsystem from './subsystem'
import * as Kernel from './kernel'

import core, { defaultSubsystems } from './core'
import { data, zip, skeleZip } from '@skele/core'
import * as action from './action'
import * as registry from './registry'
import * as propNames from './propNames'
import * as http from './read/http'

// various action Types
import * as readActions from './read/actions'
import * as effectActions from './effect/actions'

import { Engine, EntryPoint } from './engine'

let { ui, read, effect, update, transform, enrich, enhance } = core

let actions = {
  types: {
    read: readActions.types,
    effect: effectActions.types,
  },
  read: readActions.read,
  readRefresh: readActions.readRefresh,
  ...action,
}

export {
  ui,
  read,
  effect,
  update,
  transform,
  enrich,
  enhance,
  data,
  zip,
  skeleZip,
  actions,
  Engine,
  EntryPoint,
  Kernel,
  Subsystem,
  defaultSubsystems,
  registry,
  propNames,
  http,
}
export default {
  ...core,
  data,
  zip,
  skeleZip,
  actions,
  Engine,
  EntryPoint,
  Kernel,
  Subsystem,
  defaultSubsystems,
  registry,
  propNames,
  http,
}
