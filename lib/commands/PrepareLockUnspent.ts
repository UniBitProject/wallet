import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *preparelockunspent* command.
 */
export interface PrepareLockUnspentRequest extends RpcRequest {
  readonly method: 'preparelockunspent'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *preparelockunspent* command.
 */
export interface PrepareLockUnspentResponse extends RpcResponse {
  readonly result: PrepareLockUnspentResult | null
}

/**
 * Result of the *preparelockunspent* command.
 */
export type PrepareLockUnspentResult = any

export function PrepareLockUnspent(...params: any[]): PrepareLockUnspentRequest {
  return params.length === 0 ? { method: 'preparelockunspent' } : { method: 'preparelockunspent', params }
}
