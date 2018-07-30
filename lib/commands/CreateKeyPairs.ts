import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createkeypairs* command.
 */
export interface CreateKeyPairsRequest extends RpcRequest {
  readonly method: 'createkeypairs'
  readonly params?: [number]
}

/**
 * JSON-RPC response for the *createkeypairs* command.
 */
export interface CreateKeyPairsResponse extends RpcResponse {
  readonly result: CreateKeyPairsResult | null
}

/**
 * Result of the *createkeypairs* command.
 */
export type CreateKeyPairsResult = any

export function CreateKeyPairs(count?: number): CreateKeyPairsRequest {
  return count === undefined ? { method: 'createkeypairs' } : { method: 'createkeypairs', params: [count] }
}
