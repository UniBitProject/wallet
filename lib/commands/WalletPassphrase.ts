import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *walletpassphrase* command.
 */
export interface WalletPassphraseRequest extends RpcRequest {
  readonly method: 'walletpassphrase'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *walletpassphrase* command.
 */
export interface WalletPassphraseResponse extends RpcResponse {
  readonly result: WalletPassphraseResult | null
}

/**
 * Result of the *walletpassphrase* command.
 */
export type WalletPassphraseResult = any

export function WalletPassphrase(...params: any[]): WalletPassphraseRequest {
  return params.length === 0 ? { method: 'walletpassphrase' } : { method: 'walletpassphrase', params }
}
