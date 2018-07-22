import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *sendrawtransaction* command.
 */
export interface SendRawTransactionRequest extends RpcRequest {
  readonly method: 'sendrawtransaction'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *sendrawtransaction* command.
 */
export interface SendRawTransactionResponse extends RpcResponse {
  readonly result: SendRawTransactionResult | null
}

/**
 * Result of the *sendrawtransaction* command.
 */
export type SendRawTransactionResult = any

export function SendRawTransaction(...params: any[]): SendRawTransactionRequest {
  return params.length === 0 ? { method: 'sendrawtransaction' } : { method: 'sendrawtransaction', params }
}
