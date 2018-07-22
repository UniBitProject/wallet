import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *subscribe* command.
 */
export interface SubscribeRequest extends RpcRequest {
  readonly method: 'subscribe'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *subscribe* command.
 */
export interface SubscribeResponse extends RpcResponse {
  readonly result: SubscribeResult | null
}

/**
 * Result of the *subscribe* command.
 */
export type SubscribeResult = any

export function Subscribe(...params: any[]): SubscribeRequest {
  return params.length === 0 ? { method: 'subscribe' } : { method: 'subscribe', params }
}
