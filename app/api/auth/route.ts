import '@shopify/shopify-api/adapters/node'
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api'
import { type NextRequest, type NextResponse } from 'next/server'

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: 'cda9530df1b3ad8863f567650dc71fdc',
  apiSecretKey: 'f308cad37fe67183ba4104e3692ded23',
  scopes: ['read_products'],
  hostName: 'https://nextjs-dashboard-three-omega.vercel.app',
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams
  console.log('ASDF:', searchParams.get('shop'))

  // The library will return a Response object
  return await shopify.auth.begin({
    // @ts-ignore
    shop: shopify.utils.sanitizeShop(searchParams.get('shop'), true),
    callbackPath: '/api/auth/callback',
    isOnline: false,
    rawRequest: request,
    rawResponse: response,
  })
  } catch (error) {
    console.log('console log error:', error)
  }
}
