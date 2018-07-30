import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *approvefrom* command.
 */
export interface ApproveFromRequest extends RpcRequest {
  readonly method: 'approvefrom'
  readonly params: [string, string, boolean]
}

/**
 * JSON-RPC response for the *approvefrom* command.
 */
export interface ApproveFromResponse extends RpcResponse {
  readonly result: ApproveFromResult | null
}

/**
 * Result of the *approvefrom* command.
 */
export type ApproveFromResult = any

export function ApproveFrom(address: string, upgrade: string, approve: boolean): ApproveFromRequest {
  return { method: 'approvefrom', params: [address, upgrade, approve] }
}
