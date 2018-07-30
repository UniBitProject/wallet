import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *send* command.
 */
export interface SendRequest extends RpcRequest {
  readonly method: 'send'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *send* command.
 */
export interface SendResponse extends RpcResponse {
  readonly result: SendResult | null
}

/**
 * Result of the *send* command.
 */
export type SendResult = any

export function Send(...params: any[]): SendRequest {
  return params.length === 0 ? { method: 'send' } : { method: 'send', params }
}
