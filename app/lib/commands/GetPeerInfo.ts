import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getpeerinfo* command.
 */
export interface GetPeerInfoRequest extends RpcRequest {
  readonly method: 'getpeerinfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getpeerinfo* command.
 */
export interface GetPeerInfoResponse extends RpcResponse {
  readonly result: GetPeerInfoResult | null
}

/**
 * Result of the *getpeerinfo* command.
 */
export type GetPeerInfoResult = GetPeerInfoItem[]

export interface GetPeerInfoItem {
  id: number
  addr: string
  addrlocal: string
  services: string
  lastsend: number
  lastrecv: number
  bytessent: number
  bytesrecv: number
  conntime: number
  pingtime: number
  version: number
  subver: string
  handshakelocal: string
  handshake: string
  inbound: boolean
  startingheight: number
  banscore: number
  synced_headers: number
  synced_blocks: number
  inflight: number[]
  whitelisted: boolean
}

export function GetPeerInfo(): GetPeerInfoRequest {
  return { method: 'getpeerinfo' }
}
