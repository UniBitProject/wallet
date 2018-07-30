import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listunspent* command.
 */
export interface ListUnspentRequest extends RpcRequest {
  readonly method: 'listunspent'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listunspent* command.
 */
export interface ListUnspentResponse extends RpcResponse {
  readonly result: ListUnspentResult | null
}

/**
 * Result of the *listunspent* command.
 */
export type ListUnspentResult = any

export function ListUnspent(...params: any[]): ListUnspentRequest {
  return params.length === 0 ? { method: 'listunspent' } : { method: 'listunspent', params }
}
