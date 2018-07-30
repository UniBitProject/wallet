import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listaddresses* command.
 */
export interface ListAddressesRequest extends RpcRequest {
  readonly method: 'listaddresses'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listaddresses* command.
 */
export interface ListAddressesResponse extends RpcResponse {
  readonly result: ListAddressesResult | null
}

/**
 * Result of the *listaddresses* command.
 */
export type ListAddressesResult = any

export function ListAddresses(...params: any[]): ListAddressesRequest {
  return params.length === 0 ? { method: 'listaddresses' } : { method: 'listaddresses', params }
}
