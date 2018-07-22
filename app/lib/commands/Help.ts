import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the `help` command.
 */
export interface HelpRequest extends RpcRequest {
  readonly method: 'help'
  readonly params?: [string]
}

/**
 * JSON-RPC response for the `help` command.
 */
export interface HelpResponse extends RpcResponse {
  readonly result: HelpResult | null
}

/**
 * Result of the `help` command.
 */
export type HelpResult = string

export function Help(command?: string): HelpRequest {
  return command === undefined ? { method: 'help' } : { method: 'help', params: [command] }
}
