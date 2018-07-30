import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the `getruntimeparams` command.
 */
export interface GetRuntimeParamsRequest extends RpcRequest {
  readonly method: 'getruntimeparams'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the `getruntimeparams` command.
 */
export interface GetRuntimeParamsResponse extends RpcResponse {
  readonly result: GetRuntimeParamsResult | null
}

/**
 * Result of the `getruntimeparams` command.
 */
export interface GetRuntimeParamsResult {
  port: number
  reindex: boolean
  rescan: boolean
  txindex: boolean
  autocombineminconf: number
  autocombinemininputs: number
  autocombinemaxinputs: number
  autocombinedelay: number
  autocombinesuspend: number
  autosubscribe: string
  handshakelocal: string
  bantx: string
  lockblock: string
  hideknownopdrops: boolean
  maxshowndata: number
  miningrequirespeers: boolean
  mineemptyrounds: number
  miningturnover: number
  lockadminminerounds: number
  gen: boolean
  genproclimit: number
}

export function GetRuntimeParams(): GetRuntimeParamsRequest {
  return { method: 'getruntimeparams' }
}
