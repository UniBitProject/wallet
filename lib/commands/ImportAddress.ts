import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *importaddress* command.
 */
export interface ImportAddressRequest extends RpcRequest {
  readonly method: 'importaddress'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *importaddress* command.
 */
export interface ImportAddressResponse extends RpcResponse {
  readonly result: ImportAddressResult | null
}

/**
 * Result of the *importaddress* command.
 */
export type ImportAddressResult = any

export function ImportAddress(...params: any[]): ImportAddressRequest {
  return params.length === 0 ? { method: 'importaddress' } : { method: 'importaddress', params }
}
