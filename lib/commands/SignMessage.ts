import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *signmessage* command.
 */
export interface SignMessageRequest extends RpcRequest {
  readonly method: 'signmessage'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *signmessage* command.
 */
export interface SignMessageResponse extends RpcResponse {
  readonly result: SignMessageResult | null
}

/**
 * Result of the *signmessage* command.
 */
export type SignMessageResult = any

export function SignMessage(...params: any[]): SignMessageRequest {
  return params.length === 0 ? { method: 'signmessage' } : { method: 'signmessage', params }
}
