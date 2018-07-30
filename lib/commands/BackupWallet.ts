import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *backupwallet* command.
 */
export interface BackupWalletRequest extends RpcRequest {
  readonly method: 'backupwallet'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *backupwallet* command.
 */
export interface BackupWalletResponse extends RpcResponse {
  readonly result: BackupWalletResult | null
}

/**
 * Result of the *backupwallet* command.
 */
export type BackupWalletResult = any

export function BackupWallet(filename: string): BackupWalletRequest {
  return { method: 'backupwallet', params: [filename] }
}
