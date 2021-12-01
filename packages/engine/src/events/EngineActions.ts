import matches from 'ts-matches'
import { defineActionCreator } from '../networking/interfaces/Action'

export class EngineActions {
  //Initialization
  static resetEngine = {
    action: defineActionCreator(
      {
        type: 'engine.resetEngine',
        instance: matches.any
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }

  static initializedEngine = {
    action: defineActionCreator(
      {
        type: 'engine.initializedEngine'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }

  static connectToWorld = {
    action: defineActionCreator(
      {
        type: 'engine.connectToWorld'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }

  static connectToWorldTimeout = {
    action: defineActionCreator(
      {
        type: 'engine.connectToWorldTimeout'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }
  static joinedWorld = {
    action: defineActionCreator(
      {
        type: 'engine.joinedWorld'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }
  static leaveWorld = {
    action: defineActionCreator(
      {
        type: 'engine.leaveWorld'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }
  static sceneLoaded = {
    action: defineActionCreator(
      {
        type: 'engine.sceneLoaded'
      },
      { allowDispatchFromAny: true }
    ),
    callbackFunctions: new Set()
  }
}
