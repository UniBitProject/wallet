import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *disablerawtransaction* command.
 */
export interface DisableRawTransactionRequest extends RpcRequest {
  readonly method: 'disablerawtransaction'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *disablerawtransaction* command.
 */
export interface DisableRawTransactionResponse extends RpcResponse {
  readonly result: DisableRawTransactionResult | null
}

/**
 * Result of the *disablerawtransaction* command.
 */
export type DisableRawTransactionResult = any

export function DisableRawTransaction(transaction: string): DisableRawTransactionRequest {
  return { method: 'disablerawtransaction', params: [transaction] }
}
