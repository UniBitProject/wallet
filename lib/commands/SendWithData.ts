import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *sendwithdata* command.
 */
export interface SendWithDataRequest extends RpcRequest {
  readonly method: 'sendwithdata'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *sendwithdata* command.
 */
export interface SendWithDataResponse extends RpcResponse {
  readonly result: SendWithDataResult | null
}

/**
 * Result of the *sendwithdata* command.
 */
export type SendWithDataResult = any

export function SendWithData(...params: any[]): SendWithDataRequest {
  return params.length === 0 ? { method: 'sendwithdata' } : { method: 'sendwithdata', params }
}
