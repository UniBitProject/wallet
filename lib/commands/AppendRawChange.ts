import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *appendrawchange* command.
 */
export interface AppendRawChangeRequest extends RpcRequest {
  readonly method: 'appendrawchange'
  readonly params: [string, string, number | undefined]
}

/**
 * JSON-RPC response for the *appendrawchange* command.
 */
export interface AppendRawChangeResponse extends RpcResponse {
  readonly result: AppendRawChangeResult | null
}

/**
 * Result of the *appendrawchange* command.
 */
export type AppendRawChangeResult = any

export function AppendRawChange(transaction: string, address: string, fee?: number): AppendRawChangeRequest {
  const params: any = [transaction, address, fee].filter(v => v !== undefined)
  return { method: 'appendrawchange', params }
}
