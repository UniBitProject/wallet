import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listwallettransactions* command.
 */
export interface ListWalletTransactionsRequest extends RpcRequest {
  readonly method: 'listwallettransactions'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listwallettransactions* command.
 */
export interface ListWalletTransactionsResponse extends RpcResponse {
  readonly result: ListWalletTransactionsResult | null
}

/**
 * Result of the *listwallettransactions* command.
 */
export type ListWalletTransactionsResult = any

export function ListWalletTransactions(...params: any[]): ListWalletTransactionsRequest {
  return params.length === 0 ? { method: 'listwallettransactions' } : { method: 'listwallettransactions', params }
}
