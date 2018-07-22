import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *issuemorefrom* command.
 */
export interface IssueMoreFromRequest extends RpcRequest {
  readonly method: 'issuemorefrom'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *issuemorefrom* command.
 */
export interface IssueMoreFromResponse extends RpcResponse {
  readonly result: IssueMoreFromResult | null
}

/**
 * Result of the *issuemorefrom* command.
 */
export type IssueMoreFromResult = any

export function IssueMoreFrom(...params: any[]): IssueMoreFromRequest {
  return params.length === 0 ? { method: 'issuemorefrom' } : { method: 'issuemorefrom', params }
}
