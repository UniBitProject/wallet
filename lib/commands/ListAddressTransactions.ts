import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listaddresstransactions* command.
 */
export interface ListAddressTransactionsRequest extends RpcRequest {
  readonly method: 'listaddresstransactions'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listaddresstransactions* command.
 */
export interface ListAddressTransactionsResponse extends RpcResponse {
  readonly result: ListAddressTransactionsResult | null
}

/**
 * Result of the *listaddresstransactions* command.
 */
export type ListAddressTransactionsResult = any

export function ListAddressTransactions(...params: any[]): ListAddressTransactionsRequest {
  return params.length === 0 ? { method: 'listaddresstransactions' } : { method: 'listaddresstransactions', params }
}
