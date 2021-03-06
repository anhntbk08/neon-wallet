// @flow
import { api } from '@cityofzion/neon-js'

import { imageMap } from '../assets/nep5/png'
import { getDefaultTokens } from '../core/nep5'
import { ASSETS, NEO_ID, GAS_ID } from '../core/constants'
import { getRPCEndpoint } from '../actions/nodeStorageActions'

export const getImageBySymbol = (symbol: string) => imageMap[symbol]

export const findAndReturnTokenInfo = async (
  scriptHash: string,
  net: string,
  symbol?: string,
): Promise<any> => {
  const NEO = {
    symbol: ASSETS.NEO,
    image: getImageBySymbol(ASSETS.NEO),
  }
  const GAS = {
    symbol: ASSETS.GAS,
    image: getImageBySymbol(ASSETS.GAS),
  }

  if (symbol === ASSETS.NEO || scriptHash.includes(NEO_ID)) return NEO
  if (symbol === ASSETS.GAS || scriptHash.includes(GAS_ID)) return GAS

  const tokens = await getDefaultTokens()
  // if token is found in our list return it
  const token = tokens.find(token => token.scriptHash.includes(scriptHash))
  if (token) return token

  // if token is unknown to application query neoscan
  const endpoint = await getRPCEndpoint(net)
  const tokenInfo = await api.nep5.getToken(endpoint, scriptHash).catch(e => {
    console.error(e)
    return {}
  })
  return {
    symbol: tokenInfo.symbol,
  }
}
