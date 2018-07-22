import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *grantwithdatafrom* command.
 */
export interface GrantWithDataFromRequest extends RpcRequest {
  readonly method: 'grantwithdatafrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *grantwithdatafrom* command.
 */
export interface GrantWithDataFromResponse extends RpcResponse {
  readonly result: GrantWithDataFromResult | null
}

/**
 * Result of the *grantwithdatafrom* command.
 */
export type GrantWithDataFromResult = any

export function GrantWithDataFrom(...params: any[]): GrantWithDataFromRequest {
  return params.length === 0 ? { method: 'grantwithdatafrom' } : { method: 'grantwithdatafrom', params }
}
