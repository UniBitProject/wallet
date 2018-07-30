import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *publishfrom* command.
 */
export interface PublishFromRequest extends RpcRequest {
  readonly method: 'publishfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *publishfrom* command.
 */
export interface PublishFromResponse extends RpcResponse {
  readonly result: PublishFromResult | null
}

/**
 * Result of the *publishfrom* command.
 */
export type PublishFromResult = any

export function PublishFrom(...params: any[]): PublishFromRequest {
  return params.length === 0 ? { method: 'publishfrom' } : { method: 'publishfrom', params }
}
