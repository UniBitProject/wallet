import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *listupgrades* command.
 */
export interface ListUpgradesRequest extends RpcRequest {
  readonly method: 'listupgrades'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *listupgrades* command.
 */
export interface ListUpgradesResponse extends RpcResponse {
  readonly result: ListUpgradesResult | null
}

/**
 * Result of the *listupgrades* command.
 */
export type ListUpgradesResult = any

export function ListUpgrades(...params: any[]): ListUpgradesRequest {
  return params.length === 0 ? { method: 'listupgrades' } : { method: 'listupgrades', params }
}
