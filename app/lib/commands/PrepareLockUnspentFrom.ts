import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *preparelockunspentfrom* command.
 */
export interface PrepareLockUnspentFromRequest extends RpcRequest {
  readonly method: 'preparelockunspentfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *preparelockunspentfrom* command.
 */
export interface PrepareLockUnspentFromResponse extends RpcResponse {
  readonly result: PrepareLockUnspentFromResult | null
}

/**
 * Result of the *preparelockunspentfrom* command.
 */
export type PrepareLockUnspentFromResult = any

export function PrepareLockUnspentFrom(...params: any[]): PrepareLockUnspentFromRequest {
  return params.length === 0 ? { method: 'preparelockunspentfrom' } : { method: 'preparelockunspentfrom', params }
}
