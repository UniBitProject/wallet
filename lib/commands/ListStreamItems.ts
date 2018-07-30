import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *liststreamitems* command.
 */
export interface ListStreamItemsRequest extends RpcRequest {
  readonly method: 'liststreamitems'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *liststreamitems* command.
 */
export interface ListStreamItemsResponse extends RpcResponse {
  readonly result: ListStreamItemsResult | null
}

/**
 * Result of the *liststreamitems* command.
 */
export type ListStreamItemsResult = any

export function ListStreamItems(...params: any[]): ListStreamItemsRequest {
  return params.length === 0 ? { method: 'liststreamitems' } : { method: 'liststreamitems', params }
}
