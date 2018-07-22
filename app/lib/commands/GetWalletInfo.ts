import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getwalletinfo* command.
 */
export interface GetWalletInfoRequest extends RpcRequest {
  readonly method: 'getwalletinfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getwalletinfo* command.
 */
export interface GetWalletInfoResponse extends RpcResponse {
  readonly result: GetWalletInfoResult | null
}

/**
 * Result of the *getwalletinfo* command.
 */
export type GetWalletInfoResult = any

export function GetWalletInfo(): GetWalletInfoRequest {
  return { method: 'getwalletinfo' }
}
