import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *pause* command.
 */
export interface PauseRequest extends RpcRequest {
  readonly method: 'pause'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *pause* command.
 */
export interface PauseResponse extends RpcResponse {
  readonly result: PauseResult | null
}

/**
 * Result of the *pause* command.
 */
export type PauseResult = any

export function Pause(...params: any[]): PauseRequest {
  return params.length === 0 ? { method: 'pause' } : { method: 'pause', params }
}
