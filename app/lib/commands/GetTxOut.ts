import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *gettxout* command.
 */
export interface GetTxOutRequest extends RpcRequest {
  readonly method: 'gettxout'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *gettxout* command.
 */
export interface GetTxOutResponse extends RpcResponse {
  readonly result: GetTxOutResult | null
}

/**
 * Result of the *gettxout* command.
 */
export type GetTxOutResult = any

export function GetTxOut(...params: any[]): GetTxOutRequest {
  return params.length === 0 ? { method: 'gettxout' } : { method: 'gettxout', params }
}
