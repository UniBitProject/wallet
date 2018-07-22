import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *liststreams* command.
 */
export interface ListStreamsRequest extends RpcRequest {
  readonly method: 'liststreams'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *liststreams* command.
 */
export interface ListStreamsResponse extends RpcResponse {
  readonly result: ListStreamsResult | null
}

/**
 * Result of the *liststreams* command.
 */
export type ListStreamsResult = any

export function ListStreams(...params: any[]): ListStreamsRequest {
  return params.length === 0 ? { method: 'liststreams' } : { method: 'liststreams', params }
}
