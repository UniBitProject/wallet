import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *liststreampublisheritems* command.
 */
export interface ListStreamPublisherItemsRequest extends RpcRequest {
  readonly method: 'liststreampublisheritems'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *liststreampublisheritems* command.
 */
export interface ListStreamPublisherItemsResponse extends RpcResponse {
  readonly result: ListStreamPublisherItemsResult | null
}

/**
 * Result of the *liststreampublisheritems* command.
 */
export type ListStreamPublisherItemsResult = any

export function ListStreamPublisherItems(...params: any[]): ListStreamPublisherItemsRequest {
  return params.length === 0 ? { method: 'liststreampublisheritems' } : { method: 'liststreampublisheritems', params }
}
