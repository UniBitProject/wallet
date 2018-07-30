import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *issuemore* command.
 */
export interface IssueMoreRequest extends RpcRequest {
  readonly method: 'issuemore'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *issuemore* command.
 */
export interface IssueMoreResponse extends RpcResponse {
  readonly result: IssueMoreResult | null
}

/**
 * Result of the *issuemore* command.
 */
export type IssueMoreResult = any

export function IssueMore(...params: any[]): IssueMoreRequest {
  return params.length === 0 ? { method: 'issuemore' } : { method: 'issuemore', params }
}
