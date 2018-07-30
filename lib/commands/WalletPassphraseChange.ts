import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *walletpassphrasechange* command.
 */
export interface WalletPassphraseChangeRequest extends RpcRequest {
  readonly method: 'walletpassphrasechange'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *walletpassphrasechange* command.
 */
export interface WalletPassphraseChangeResponse extends RpcResponse {
  readonly result: WalletPassphraseChangeResult | null
}

/**
 * Result of the *walletpassphrasechange* command.
 */
export type WalletPassphraseChangeResult = any

export function WalletPassphraseChange(...params: any[]): WalletPassphraseChangeRequest {
  return params.length === 0 ? { method: 'walletpassphrasechange' } : { method: 'walletpassphrasechange', params }
}
