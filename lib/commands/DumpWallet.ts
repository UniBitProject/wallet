import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *dumpwallet* command.
 */
export interface DumpWalletRequest extends RpcRequest {
  readonly method: 'dumpwallet'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *dumpwallet* command.
 */
export interface DumpWalletResponse extends RpcResponse {
  readonly result: DumpWalletResult | null
}

/**
 * Result of the *dumpwallet* command.
 */
export type DumpWalletResult = any

export function DumpWallet(filename: string): DumpWalletRequest {
  return { method: 'dumpwallet', params: [filename] }
}
