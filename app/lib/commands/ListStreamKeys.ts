import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *liststreamkeys* command.
 */
export interface ListStreamKeysRequest extends RpcRequest {
  readonly method: 'liststreamkeys'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *liststreamkeys* command.
 */
export interface ListStreamKeysResponse extends RpcResponse {
  readonly result: ListStreamKeysResult | null
}

/**
 * Result of the *liststreamkeys* command.
 */
export type ListStreamKeysResult = any

export function ListStreamKeys(...params: any[]): ListStreamKeysRequest {
  return params.length === 0 ? { method: 'liststreamkeys' } : { method: 'liststreamkeys', params }
}
