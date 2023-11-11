import '@shopify/shopify-api/adapters/web-api';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api'
import { NextResponse, type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: 'cda9530df1b3ad8863f567650dc71fdc',
  apiSecretKey: 'f308cad37fe67183ba4104e3692ded23',
  scopes: ['read_products'],
  hostName: 'nextjs-dashboard-three-omega.vercel.app',
  hostScheme: 'https',
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export async function GET(request: NextRequest, response: NextResponse) {
  // The library will automatically set the appropriate HTTP headers
  const callback = await shopify.auth.callback({
    rawRequest: request,
    rawResponse: response,
  });

  // You can now use callback.session to make API requests

  redirect('/dashboard')
}