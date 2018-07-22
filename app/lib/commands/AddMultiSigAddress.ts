import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *addmultisigaddress* command.
 */
export interface AddMultiSigAddressRequest extends RpcRequest {
  readonly method: 'addmultisigaddress'
  readonly params: [number, string[]]
}

/**
 * JSON-RPC response for the *addmultisigaddress* command.
 */
export interface AddMultiSigAddressResponse extends RpcResponse {
  readonly result: AddMultiSigAddressResult | null
}

/**
 * Result of the *addmultisigaddress* command.
 */
export type AddMultiSigAddressResult = any

/**
 * Adds a new P2SH multisig address to the wallet.
 * @param requiredSignatures Minimum number of signatures required to spend the outputs sent to the address.
 * @param keys List of public keys (or addresses) that can be used to spend the outputs sent to the address.
 * @returns A JSON-RPC request for the *addmultisigaddress* command.
 */
export function AddMultiSigAddress(requiredSignatures: number, keys: string[]): AddMultiSigAddressRequest {
  return { method: 'addmultisigaddress', params: [requiredSignatures, keys] }
}
