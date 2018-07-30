import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *unsubscribe* command.
 */
export interface UnsubscribeRequest extends RpcRequest {
  readonly method: 'unsubscribe'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *unsubscribe* command.
 */
export interface UnsubscribeResponse extends RpcResponse {
  readonly result: UnsubscribeResult | null
}

/**
 * Result of the *unsubscribe* command.
 */
export type UnsubscribeResult = any

export function Unsubscribe(...params: any[]): UnsubscribeRequest {
  return params.length === 0 ? { method: 'unsubscribe' } : { method: 'unsubscribe', params }
}
