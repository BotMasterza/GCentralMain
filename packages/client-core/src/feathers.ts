import io from 'socket.io-client'
import feathers from '@feathersjs/client'
// import type { Application } from '../../server-core/declarations'

const feathersClient = feathers() // as Application

const socket = io(`https://${process.env.VITE_SERVER_HOST}:${process.env.VITE_SERVER_PORT}`, {
  withCredentials: true
})
feathersClient.configure(feathers.socketio(socket, { timeout: 10000 }))
feathersClient.configure(
  feathers.authentication({
    storageKey: process.env.FEATHERS_STORE_KEY
  })
)

export const client = feathersClient
