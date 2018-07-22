import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getassettransaction* command.
 */
export interface GetAssetTransactionRequest extends RpcRequest {
  readonly method: 'getassettransaction'
  readonly params: [string, string, boolean | undefined]
}

/**
 * JSON-RPC response for the *getassettransaction* command.
 */
export interface GetAssetTransactionResponse extends RpcResponse {
  readonly result: GetAssetTransactionResult | null
}

/**
 * Result of the *getassettransaction* command.
 */
export type GetAssetTransactionResult = any

export function GetAssetTransaction(asset: string, txId: string, verbose?: boolean): GetAssetTransactionRequest {
  const params: any = [asset, txId, verbose].filter(v => v !== undefined)
  return { method: 'getassettransaction', params }
}
