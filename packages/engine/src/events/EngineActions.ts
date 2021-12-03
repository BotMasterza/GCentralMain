import matches from 'ts-matches'
import { Action, defineActionCreator } from '../networking/interfaces/Action'

class ListenerSet extends Set<any> {
  constructor() {
    super()
  }

  addOnce(listener) {
    const onEvent = (args) => {
      this.delete(onEvent)
      listener(args)
    }
    this.add(onEvent)
  }
}

export class EngineActions {
  //Initialization
  static resetEngine = {
    action: defineActionCreator(
      {
        type: 'engine.resetEngine',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }

  static initializedEngine = {
    action: defineActionCreator(
      {
        type: 'engine.initializedEngine',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }

  static connectToWorld = {
    action: defineActionCreator(
      {
        type: 'engine.connectToWorld',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }

  static connectToWorldTimeout = {
    action: defineActionCreator(
      {
        type: 'engine.connectToWorldTimeout',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }
  static joinedWorld = {
    action: defineActionCreator(
      {
        type: 'engine.joinedWorld',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }
  static leaveWorld = {
    action: defineActionCreator(
      {
        type: 'engine.leaveWorld',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }
  static sceneLoaded = {
    action: defineActionCreator(
      {
        type: 'engine.sceneLoaded',
        args: matches.object.defaultTo({})
      },
      { allowDispatchFromAny: true }
    ),
    listeners: new ListenerSet()
  }
}
