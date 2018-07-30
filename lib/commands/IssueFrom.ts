import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *issuefrom* command.
 */
export interface IssueFromRequest extends RpcRequest {
  readonly method: 'issuefrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *issuefrom* command.
 */
export interface IssueFromResponse extends RpcResponse {
  readonly result: IssueFromResult | null
}

/**
 * Result of the *issuefrom* command.
 */
export type IssueFromResult = any

export function IssueFrom(...params: any[]): IssueFromRequest {
  return params.length === 0 ? { method: 'issuefrom' } : { method: 'issuefrom', params }
}
