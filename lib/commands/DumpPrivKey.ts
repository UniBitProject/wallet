import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *dumpprivkey* command.
 */
export interface DumpPrivKeyRequest extends RpcRequest {
  readonly method: 'dumpprivkey'
  readonly params: [string]
}

/**
 * JSON-RPC response for the *dumpprivkey* command.
 */
export interface DumpPrivKeyResponse extends RpcResponse {
  readonly result: DumpPrivKeyResult | null
}

/**
 * Result of the *dumpprivkey* command.
 */
export type DumpPrivKeyResult = any

export function DumpPrivKey(address: string): DumpPrivKeyRequest {
  return { method: 'dumpprivkey', params: [address] }
}
