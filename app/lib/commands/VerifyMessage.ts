import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *verifymessage* command.
 */
export interface VerifyMessageRequest extends RpcRequest {
  readonly method: 'verifymessage'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *verifymessage* command.
 */
export interface VerifyMessageResponse extends RpcResponse {
  readonly result: VerifyMessageResult | null
}

/**
 * Result of the *verifymessage* command.
 */
export type VerifyMessageResult = any

export function VerifyMessage(...params: any[]): VerifyMessageRequest {
  return params.length === 0 ? { method: 'verifymessage' } : { method: 'verifymessage', params }
}
