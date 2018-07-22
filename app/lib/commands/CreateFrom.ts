import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createfrom* command.
 */
export interface CreateFromRequest extends RpcRequest {
  readonly method: 'createfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createfrom* command.
 */
export interface CreateFromResponse extends RpcResponse {
  readonly result: CreateFromResult | null
}

/**
 * Result of the *createfrom* command.
 */
export type CreateFromResult = any

export function CreateFrom(...params: any[]): CreateFromRequest {
  return params.length === 0 ? { method: 'createfrom' } : { method: 'createfrom', params }
}
