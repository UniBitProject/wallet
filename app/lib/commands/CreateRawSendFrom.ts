import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createrawsendfrom* command.
 */
export interface CreateRawSendFromRequest extends RpcRequest {
  readonly method: 'createrawsendfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createrawsendfrom* command.
 */
export interface CreateRawSendFromResponse extends RpcResponse {
  readonly result: CreateRawSendFromResult | null
}

/**
 * Result of the *createrawsendfrom* command.
 */
export type CreateRawSendFromResult = any

export function CreateRawSendFrom(...params: any[]): CreateRawSendFromRequest {
  return params.length === 0 ? { method: 'createrawsendfrom' } : { method: 'createrawsendfrom', params }
}
