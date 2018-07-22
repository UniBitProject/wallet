import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getblock* command.
 */
export interface GetBlockRequest extends RpcRequest {
  readonly method: 'getblock'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getblock* command.
 */
export interface GetBlockResponse extends RpcResponse {
  readonly result: GetBlockResult | null
}

/**
 * Result of the *getblock* command.
 */
export type GetBlockResult = any

export function GetBlock(...params: any[]): GetBlockRequest {
  return params.length === 0 ? { method: 'getblock' } : { method: 'getblock', params }
}
