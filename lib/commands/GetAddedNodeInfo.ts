import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getaddednodeinfo* command.
 */
export interface GetAddedNodeInfoRequest extends RpcRequest {
  readonly method: 'getaddednodeinfo'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getaddednodeinfo* command.
 */
export interface GetAddedNodeInfoResponse extends RpcResponse {
  readonly result: GetAddedNodeInfoResult | null
}

/**
 * Result of the *getaddednodeinfo* command.
 */
export type GetAddedNodeInfoResult = any

export function GetAddedNodeInfo(...params: any[]): GetAddedNodeInfoRequest {
  return params.length === 0 ? { method: 'getaddednodeinfo' } : { method: 'getaddednodeinfo', params }
}
