import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *encryptwallet* command.
 */
export interface EncryptWalletRequest extends RpcRequest {
  readonly method: 'encryptwallet'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *encryptwallet* command.
 */
export interface EncryptWalletResponse extends RpcResponse {
  readonly result: EncryptWalletResult | null
}

/**
 * Result of the *encryptwallet* command.
 */
export type EncryptWalletResult = any

export function EncryptWallet(passphrase: string): EncryptWalletRequest {
  return { method: 'encryptwallet', params: [passphrase] }
}
