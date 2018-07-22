import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *gettotalbalances* command.
 */
export interface GetTotalBalancesRequest extends RpcRequest {
  readonly method: 'gettotalbalances'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *gettotalbalances* command.
 */
export interface GetTotalBalancesResponse extends RpcResponse {
  readonly result: GetTotalBalancesResult | null
}

/**
 * Result of the *gettotalbalances* command.
 */
export type GetTotalBalancesResult = any

export function GetTotalBalances(...params: any[]): GetTotalBalancesRequest {
  return params.length === 0 ? { method: 'gettotalbalances' } : { method: 'gettotalbalances', params }
}
