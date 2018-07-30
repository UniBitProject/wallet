import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createrawtransaction* command.
 */
export interface CreateRawTransactionRequest extends RpcRequest {
  readonly method: 'createrawtransaction'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createrawtransaction* command.
 */
export interface CreateRawTransactionResponse extends RpcResponse {
  readonly result: CreateRawTransactionResult | null
}

/**
 * Result of the *createrawtransaction* command.
 */
export type CreateRawTransactionResult = any

export function CreateRawTransaction(...params: any[]): CreateRawTransactionRequest {
  return params.length === 0 ? { method: 'createrawtransaction' } : { method: 'createrawtransaction', params }
}
