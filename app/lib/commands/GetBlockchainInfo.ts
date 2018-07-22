import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getblockchaininfo* command.
 */
export interface GetBlockchainInfoRequest extends RpcRequest {
  readonly method: 'getblockchaininfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getblockchaininfo* command.
 */
export interface GetBlockchainInfoResponse extends RpcResponse {
  readonly result: GetBlockchainInfoResult | null
}

/**
 * Result of the *getblockchaininfo* command.
 */
export type GetBlockchainInfoResult = any

export function GetBlockchainInfo(): GetBlockchainInfoRequest {
  return { method: 'getblockchaininfo' }
}
