/**
 * @author Abhishek Pathak <github.com/Abhishek-Pathak-Here>
 */

import { World } from '../ecs/classes/World'
import { System } from '../ecs/classes/System'
import { matches } from 'ts-matches'

export default async function EngineActionSystem(world: World): Promise<System> {
  const executeCallbackFunctions = (cbFuncs: Set<any>) => {
    console.log('The CallbackFunctions is:' + cbFuncs.size)
    cbFuncs.forEach((cbFunc) => cbFunc())
  }
  world.receptors.push((action) => {
    matches(action)
      .when(
        EditorActions.selectionChanged.action.matchesFromAny,
        executeCallbackFunctions(EditorActions.selectionChanged.callbackFunctions)
      )
      .when(
        EditorActions.beforeSelectionChanged.action.matchesFromAny,
        executeCallbackFunctions(EditorActions.beforeSelectionChanged.callbackFunctions)
      )
      .when(
        EditorActions.sceneGraphChanged.action.matchesFromAny,
        executeCallbackFunctions(EditorActions.sceneGraphChanged.callbackFunctions)
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
