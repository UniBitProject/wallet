import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *sendassetfrom* command.
 */
export interface SendAssetFromRequest extends RpcRequest {
  readonly method: 'sendassetfrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *sendassetfrom* command.
 */
export interface SendAssetFromResponse extends RpcResponse {
  readonly result: SendAssetFromResult | null
}

/**
 * Result of the *sendassetfrom* command.
 */
export type SendAssetFromResult = any

export function SendAssetFrom(...params: any[]): SendAssetFromRequest {
  return params.length === 0 ? { method: 'sendassetfrom' } : { method: 'sendassetfrom', params }
}
