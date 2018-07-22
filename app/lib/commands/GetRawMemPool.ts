import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getrawmempool* command.
 */
export interface GetRawMemPoolRequest extends RpcRequest {
  readonly method: 'getrawmempool'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getrawmempool* command.
 */
export interface GetRawMemPoolResponse extends RpcResponse {
  readonly result: GetRawMemPoolResult | null
}

/**
 * Result of the *getrawmempool* command.
 */
export type GetRawMemPoolResult = any

export function GetRawMemPool(...params: any[]): GetRawMemPoolRequest {
  return params.length === 0 ? { method: 'getrawmempool' } : { method: 'getrawmempool', params }
}
