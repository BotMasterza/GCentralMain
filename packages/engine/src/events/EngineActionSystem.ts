/**
 * @author Abhishek Pathak <github.com/Abhishek-Pathak-Here>
 */

import { World } from '../ecs/classes/World'
import { System } from '../ecs/classes/System'
import { matches } from 'ts-matches'
import { EngineActions } from './EngineActions'
import { Action } from '../networking/interfaces/Action'

export default async function EngineActionSystem(world: World): Promise<System> {
  const executeListeners = (cbFuncs: Set<any>, args) => {
    console.log('The CallbackFunctions is:' + cbFuncs.size + 'From:' + JSON.stringify(args) + typeof args)
    cbFuncs.forEach((cbFunc) => {
      cbFunc(args)
    })
  }
  world.receptors.push((action) => {
    matches(action)
      .when(
        EngineActions.resetEngine.action.matchesFromAny,
        executeListeners(EngineActions.resetEngine.listeners, (action as any).args ?? {})
      )
      .when(
        EngineActions.initializedEngine.action.matchesFromAny,
        executeListeners(EngineActions.initializedEngine.listeners, (action as any).args ?? {})
      )
      .when(
        EngineActions.connectToWorld.action.matchesFromAny,
        executeListeners(EngineActions.connectToWorld.listeners, (action as any).args ?? {})
      )
      .when(
        EngineActions.connectToWorldTimeout.action.matchesFromAny,
        executeListeners(EngineActions.connectToWorldTimeout.listeners, (action as any).args ?? {})
      )
  })

  return () => {}
}
