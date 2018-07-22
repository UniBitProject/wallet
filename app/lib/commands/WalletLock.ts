import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *walletlock* command.
 */
export interface WalletLockRequest extends RpcRequest {
  readonly method: 'walletlock'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *walletlock* command.
 */
export interface WalletLockResponse extends RpcResponse {
  readonly result: WalletLockResult | null
}

/**
 * Result of the *walletlock* command.
 */
export type WalletLockResult = any

export function WalletLock(...params: any[]): WalletLockRequest {
  return params.length === 0 ? { method: 'walletlock' } : { method: 'walletlock', params }
}
