import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getmultibalances* command.
 */
export interface GetMultiBalancesRequest extends RpcRequest {
  readonly method: 'getmultibalances'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getmultibalances* command.
 */
export interface GetMultiBalancesResponse extends RpcResponse {
  readonly result: GetMultiBalancesResult | null
}

/**
 * Result of the *getmultibalances* command.
 */
export type GetMultiBalancesResult = any

export function GetMultiBalances(...params: any[]): GetMultiBalancesRequest {
  return params.length === 0 ? { method: 'getmultibalances' } : { method: 'getmultibalances', params }
}
