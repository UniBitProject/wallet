import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createrawexchange* command.
 */
export interface CreateRawExchangeRequest extends RpcRequest {
  readonly method: 'createrawexchange'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createrawexchange* command.
 */
export interface CreateRawExchangeResponse extends RpcResponse {
  readonly result: CreateRawExchangeResult | null
}

/**
 * Result of the *createrawexchange* command.
 */
export type CreateRawExchangeResult = any

export function CreateRawExchange(...params: any[]): CreateRawExchangeRequest {
  return params.length === 0 ? { method: 'createrawexchange' } : { method: 'createrawexchange', params }
}
