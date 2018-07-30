import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *issue* command.
 */
export interface IssueRequest extends RpcRequest {
  readonly method: 'issue'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *issue* command.
 */
export interface IssueResponse extends RpcResponse {
  readonly result: IssueResult | null
}

/**
 * Result of the *issue* command.
 */
export type IssueResult = any

export function Issue(...params: any[]): IssueRequest {
  return params.length === 0 ? { method: 'issue' } : { method: 'issue', params }
}
