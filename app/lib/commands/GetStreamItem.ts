import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getstreamitem* command.
 */
export interface GetStreamItemRequest extends RpcRequest {
  readonly method: 'getstreamitem'
  readonly params: [string, string, boolean | undefined]
}

/**
 * JSON-RPC response for the *getstreamitem* command.
 */
export interface GetStreamItemResponse extends RpcResponse {
  readonly result: GetStreamItemResult | null
}

/**
 * Result of the *getstreamitem* command.
 */
export type GetStreamItemResult = any

export function GetStreamItem(stream: string, txId: string, verbose?: boolean): GetStreamItemRequest {
  const params: any = [stream, txId, verbose].filter(v => v !== undefined)
  return { method: 'getstreamitem', params }
}
