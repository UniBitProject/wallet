import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *appendrawdata* command.
 */
export interface AppendRawDataRequest extends RpcRequest {
  readonly method: 'appendrawdata'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *appendrawdata* command.
 */
export interface AppendRawDataResponse extends RpcResponse {
  readonly result: AppendRawDataResult | null
}

/**
 * Result of the *appendrawdata* command.
 */
export type AppendRawDataResult = any

export function AppendRawData(...params: any[]): AppendRawDataRequest {
  return params.length === 0 ? { method: 'appendrawdata' } : { method: 'appendrawdata', params }
}
