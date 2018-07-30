import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *decoderawtransaction* command.
 */
export interface DecodeRawTransactionRequest extends RpcRequest {
  readonly method: 'decoderawtransaction'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *decoderawtransaction* command.
 */
export interface DecodeRawTransactionResponse extends RpcResponse {
  readonly result: DecodeRawTransactionResult | null
}

/**
 * Result of the *decoderawtransaction* command.
 */
export type DecodeRawTransactionResult = any

export function DecodeRawTransaction(transaction: string): DecodeRawTransactionRequest {
  return { method: 'decoderawtransaction', params: [transaction] }
}
