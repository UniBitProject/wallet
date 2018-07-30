import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *importprivkey* command.
 */
export interface ImportPrivKeyRequest extends RpcRequest {
  readonly method: 'importprivkey'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *importprivkey* command.
 */
export interface ImportPrivKeyResponse extends RpcResponse {
  readonly result: ImportPrivKeyResult | null
}

/**
 * Result of the *importprivkey* command.
 */
export type ImportPrivKeyResult = any

export function ImportPrivKey(...params: any[]): ImportPrivKeyRequest {
  return params.length === 0 ? { method: 'importprivkey' } : { method: 'importprivkey', params }
}
