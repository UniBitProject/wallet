import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *revoke* command.
 */
export interface RevokeRequest extends RpcRequest {
  readonly method: 'revoke'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *revoke* command.
 */
export interface RevokeResponse extends RpcResponse {
  readonly result: RevokeResult | null
}

/**
 * Result of the *revoke* command.
 */
export type RevokeResult = any

export function Revoke(...params: any[]): RevokeRequest {
  return params.length === 0 ? { method: 'revoke' } : { method: 'revoke', params }
}
