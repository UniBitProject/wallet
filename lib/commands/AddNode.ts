import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *addnode* command.
 */
export interface AddNodeRequest extends RpcRequest {
  readonly method: 'addnode'
  readonly params: [string, 'add' | 'remove' | 'onetry']
}

/**
 * JSON-RPC response for the *addnode* command.
 */
export interface AddNodeResponse extends RpcResponse {
  readonly result: AddNodeResult | null
}

/**
 * Result of the *addnode* command.
 */
export type AddNodeResult = any

/**
 * Manages the peer-to-peer connections:
 * * The `"add"` command queues the specified node for the next available slot;
 * * The `"remove"` command removes the connection to the specified node;
 * * The `"onetry"` command adds a connection to the specified node, whether a slot is available or not.
 * @param host IP address or hostname of the node, optionally including a port number.
 * @param command Command name.
 * @returns A JSON-RPC request for the *addnode* command.
 */
export function AddNode(host: string, command: 'add' | 'remove' | 'onetry'): AddNodeRequest {
  return { method: 'addnode', params: [host, command] }
}
