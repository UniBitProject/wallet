import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *resume* command.
 */
export interface ResumeRequest extends RpcRequest {
  readonly method: 'resume'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *resume* command.
 */
export interface ResumeResponse extends RpcResponse {
  readonly result: ResumeResult | null
}

/**
 * Result of the *resume* command.
 */
export type ResumeResult = any

export function Resume(...params: any[]): ResumeRequest {
  return params.length === 0 ? { method: 'resume' } : { method: 'resume', params }
}
