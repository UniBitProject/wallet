import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *sendfrom* command.
 */
export interface SendFromRequest extends RpcRequest {
  readonly method: 'sendfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *sendfrom* command.
 */
export interface SendFromResponse extends RpcResponse {
  readonly result: SendFromResult | null
}

/**
 * Result of the *sendfrom* command.
 */
export type SendFromResult = any

export function SendFrom(...params: any[]): SendFromRequest {
  return params.length === 0 ? { method: 'sendfrom' } : { method: 'sendfrom', params }
}
