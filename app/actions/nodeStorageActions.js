// @flow
import { createActions } from 'spunky'
import { isEmpty } from 'lodash-es'
import { rpc } from 'neon-js'

import { getStorage, setStorage } from '../core/storage'
import {
  MAIN_NETWORK_ID,
  TEST_NETWORK_ID,
  NODES_MAIN_NET,
  NODES_TEST_NET
} from '../core/constants'
import { findNetworkByLabel } from '../core/networks'

const ID = 'nodeStorage'
const STORAGE_KEY = 'selectedNode'
let cachedRPCUrl

type Props = {
  url: string,
  net: string
}

export const getRPCEndpoint = async (
  net: string,
  excludeCritera: Array<string> = ['ngd', 'neo.org']
) => {
  try {
    if (cachedRPCUrl) return cachedRPCUrl
    const NETWORK = findNetworkByLabel(net)
    let nodeList
    switch (NETWORK.id) {
      case MAIN_NETWORK_ID:
        nodeList = NODES_MAIN_NET
        break
      case TEST_NETWORK_ID:
        nodeList = NODES_TEST_NET
        break
      default:
        nodeList = NODES_MAIN_NET
    }
    const data = nodeList
      .filter(
        data => !excludeCritera.some(criteria => data.url.includes(criteria))
      )
      .map(data => {
        let url = data.protocol ? `${data.protocol}://${data.url}` : data.url
        url = data.port ? `${url}:${data.port}` : url
        const client = new rpc.RPCClient(url)
        // eslint-disable-next-line
        data.client = client
        return data
      })
    await Promise.all(data.map(data => data.client.ping()))
    const nodes = data.sort(
      (a, b) => b.client.lastSeenHeight - a.client.lastSeenHeight
    )
    if (nodes.length === 0) throw new Error('No eligible nodes found!')
    const heightThreshold = nodes[0].client.lastSeenHeight - 1
    const goodNodes = nodes.filter(
      n => n.client.lastSeenHeight >= heightThreshold
    )
    const randomlySelectedRPCUrl =
      goodNodes[Math.floor(Math.random() * goodNodes.length)].client.net
    cachedRPCUrl = randomlySelectedRPCUrl
    return randomlySelectedRPCUrl
  } catch (error) {
    console.log('An error occurred attempting to obtain RPC endpoint', {
      error
    })
    return ''
  }
}

export const getNode = async (net: string): Promise<string> =>
  getStorage(`${STORAGE_KEY}-${net}`)

const setNode = async (node: string, net: string): Promise<string> =>
  setStorage(`${STORAGE_KEY}-${net}`, node)

export default createActions(
  ID,
  ({ url, net }: Props = {}) => async (): Promise<string> => {
    if (url || url === '') {
      await setNode(url, net)
      return url
    }
    const storage = await getNode(net)
    return isEmpty(storage) ? '' : storage
  }
)
