import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getinfo* command.
 */
export interface GetInfoRequest extends RpcRequest {
  readonly method: 'getinfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getinfo* command.
 */
export interface GetInfoResponse extends RpcResponse {
  readonly result: GetInfoResult | null
}

/**
 * Result of the *getinfo* command.
 */
export interface GetInfoResult {
  version: string
  nodeversion: number
  protocolversion: number
  chainname: string
  description: string
  protocol: string
  port: number
  setupblocks: number
  nodeaddress: string
  burnaddress: string
  incomingpaused: boolean
  miningpaused: boolean
  walletversion: number
  balance: number
  walletdbversion: number
  reindex: boolean
  blocks: number
  timeoffset: number
  connections: number
  proxy: string
  difficulty: number
  testnet: boolean
  keypoololdest: number
  keypoolsize: number
  paytxfee: number
  relayfee: number
  errors: string
}

export function GetInfo(): GetInfoRequest {
  return { method: 'getinfo' }
}
