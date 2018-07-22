import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listblocks* command.
 */
export interface ListBlocksRequest extends RpcRequest {
  readonly method: 'listblocks'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listblocks* command.
 */
export interface ListBlocksResponse extends RpcResponse {
  readonly result: ListBlocksResult | null
}

/**
 * Result of the *listblocks* command.
 */
export type ListBlocksResult = any

export function ListBlocks(...params: any[]): ListBlocksRequest {
  return params.length === 0 ? { method: 'listblocks' } : { method: 'listblocks', params }
}
