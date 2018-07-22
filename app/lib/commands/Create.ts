import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *create* command.
 */
export interface CreateRequest extends RpcRequest {
  readonly method: 'create'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *create* command.
 */
export interface CreateResponse extends RpcResponse {
  readonly result: CreateResult | null
}

/**
 * Result of the *create* command.
 */
export type CreateResult = any

export function Create(...params: any[]): CreateRequest {
  return params.length === 0 ? { method: 'create' } : { method: 'create', params }
}
