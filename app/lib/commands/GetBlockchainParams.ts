import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the `getblockchainparams` command.
 */
export interface GetBlockchainParamsRequest extends RpcRequest {
  readonly method: 'getblockchainparams'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the `getblockchainparams` command.
 */
export interface GetBlockchainParamsResponse extends RpcResponse {
  readonly result: GetBlockchainParamsResult | null
}

/**
 * Result of the `getblockchainparams` command.
 */
export interface GetBlockchainParamsResult {
  'chain-protocol': 'bitcoin' | 'multichain'
  'chain-description': string
  'root-stream-name': string
  'root-stream-open': boolean
  'chain-is-testnet': boolean
  'target-block-time': number
  'maximum-block-size': number
  'default-network-port': number
  'default-rpc-port': number
  'anyone-can-connect': boolean
  'anyone-can-send': boolean
  'anyone-can-receive': boolean
  'anyone-can-receive-empty': boolean
  'anyone-can-create': boolean
  'anyone-can-issue': boolean
  'anyone-can-mine': boolean
  'anyone-can-activate': boolean
  'anyone-can-admin': boolean
  'support-miner-precheck': boolean
  'allow-p2sh-outputs': boolean
  'allow-multisig-outputs': boolean
  'setup-first-blocks': number
  'mining-diversity': number
  'admin-consensus-upgrade': number
  'admin-consensus-admin': number
  'admin-consensus-activate': number
  'admin-consensus-mine': number
  'admin-consensus-create': number
  'admin-consensus-issue': number
  'lock-admin-mine-rounds': number
  'mining-requires-peers': boolean
  'mine-empty-rounds': number
  'mining-turnover': number
  'first-block-reward': number
  'initial-block-reward': number
  'reward-halving-interval': number
  'reward-spendable-delay': number
  'minimum-per-output': number
  'maximum-per-output': number
  'minimum-relay-fee': number
  'native-currency-multiple': number
  'skip-pow-check': boolean
  'pow-minimum-bits': number
  'target-adjust-freq': number
  'allow-min-difficulty-blocks': boolean
  'only-accept-std-txs': boolean
  'max-std-tx-size': number
  'max-std-op-returns-count': number
  'max-std-op-return-size': number
  'max-std-op-drops-count': number
  'max-std-element-size': number
  'chain-name': 'testchain'
  'protocol-version': number
  'network-message-start': string
  'address-pubkeyhash-version': string
  'address-scripthash-version': string
  'private-key-version': string
  'address-checksum-value': string
  'genesis-pubkey': string
  'genesis-version': number
  'genesis-timestamp': number
  'genesis-nbits': number
  'genesis-nonce': number
  'genesis-pubkey-hash': string
  'genesis-hash': string
  'chain-params-hash': string
}

export function GetBlockchainParams(): GetBlockchainParamsRequest {
  return { method: 'getblockchainparams' }
}
