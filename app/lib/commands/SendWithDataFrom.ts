import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *sendwithdatafrom* command.
 */
export interface SendWithDataFromRequest extends RpcRequest {
  readonly method: 'sendwithdatafrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *sendwithdatafrom* command.
 */
export interface SendWithDataFromResponse extends RpcResponse {
  readonly result: SendWithDataFromResult | null
}

/**
 * Result of the *sendwithdatafrom* command.
 */
export type SendWithDataFromResult = any

export function SendWithDataFrom(...params: any[]): SendWithDataFromRequest {
  return params.length === 0 ? { method: 'sendwithdatafrom' } : { method: 'sendwithdatafrom', params }
}
