import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listlockunspent* command.
 */
export interface ListLockUnspentRequest extends RpcRequest {
  readonly method: 'listlockunspent'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *listlockunspent* command.
 */
export interface ListLockUnspentResponse extends RpcResponse {
  readonly result: ListLockUnspentResult | null
}

/**
 * Result of the *listlockunspent* command.
 */
export type ListLockUnspentResult = any

export function ListLockUnspent(): ListLockUnspentRequest {
  return { method: 'listlockunspent' }
}
