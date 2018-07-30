import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *setlastblock* command.
 */
export interface SetLastBlockRequest extends RpcRequest {
  readonly method: 'setlastblock'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *setlastblock* command.
 */
export interface SetLastBlockResponse extends RpcResponse {
  readonly result: SetLastBlockResult | null
}

/**
 * Result of the *setlastblock* command.
 */
export type SetLastBlockResult = any

export function SetLastBlock(...params: any[]): SetLastBlockRequest {
  return params.length === 0 ? { method: 'setlastblock' } : { method: 'setlastblock', params }
}
