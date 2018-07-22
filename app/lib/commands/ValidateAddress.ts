import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *validateaddress* command.
 */
export interface ValidateAddressRequest extends RpcRequest {
  readonly method: 'validateaddress'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *validateaddress* command.
 */
export interface ValidateAddressResponse extends RpcResponse {
  readonly result: ValidateAddressResult | null
}

/**
 * Result of the *validateaddress* command.
 */
export type ValidateAddressResult = any

export function ValidateAddress(...params: any[]): ValidateAddressRequest {
  return params.length === 0 ? { method: 'validateaddress' } : { method: 'validateaddress', params }
}
