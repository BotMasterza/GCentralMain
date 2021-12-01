/**
 * @author Abhishek Pathak <github.com/Abhishek-Pathak-Here>
 */

import { World } from '../ecs/classes/World'
import { System } from '../ecs/classes/System'
import { matches } from 'ts-matches'
import { EngineActions } from './EngineActions'

export default async function EngineActionSystem(world: World): Promise<System> {
  const executeCallbackFunctions = (cbFuncs: Set<any>) => {
    console.log('The CallbackFunctions is:' + cbFuncs.size)
    cbFuncs.forEach((cbFunc) => cbFunc())
  }
  world.receptors.push((action) => {
    console.log('The Action is:' + JSON.stringify(action))
    matches(action)
      .when(
        EngineActions.resetEngine.action.matchesFromAny,
        executeCallbackFunctions(EngineActions.resetEngine.callbackFunctions)
      )
      .when(
        EngineActions.initializedEngine.action.matchesFromAny,
        executeCallbackFunctions(EngineActions.initializedEngine.callbackFunctions)
      )
      .when(
        EngineActions.connectToWorld.action.matchesFromAny,
        executeCallbackFunctions(EngineActions.connectToWorld.callbackFunctions)
      )
      .when(
        EngineActions.connectToWorldTimeout.action.matchesFromAny,
        executeCallbackFunctions(EngineActions.connectToWorldTimeout.callbackFunctions)
      )
  })

  return () => {
    console.log('This is Engine Action System')
    world.receptors.forEach((receptor) => {
      world.outgoingActions.forEach((action) => {
        receptor(action)
        world.outgoingActions.delete(action)
      })
    })
  }
}
