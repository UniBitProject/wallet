import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *clearmempool* command.
 */
export interface ClearMemPoolRequest extends RpcRequest {
  readonly method: 'clearmempool'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *clearmempool* command.
 */
export interface ClearMemPoolResponse extends RpcResponse {
  readonly result: ClearMemPoolResult | null
}

/**
 * Result of the *clearmempool* command.
 */
export type ClearMemPoolResult = any

export function ClearMemPool(): ClearMemPoolRequest {
  return { method: 'clearmempool' }
}
