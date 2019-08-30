const path = require('path');
const fetch = require('node-fetch');
const Client = require('shopify-buy');

const envPath = path.resolve(process.cwd(), 'src', '.env');
require('dotenv').config({
  path: envPath,
});

const shopName = process.env.SHOP_NAME;
const storeFrontToken = process.env.STOREFRONT_ACCESS_TOKEN;

const shopClient = Client.buildClient({
  domain: `${shopName}.myshopify.com`,
  storefrontAccessToken: storeFrontToken
}, fetch);

const getProductByHandle = async (handle) => {
  return new Promise((resolve, reject) => {
    try{
      shopClient.product.fetchQuery({handle}).then(function(products) {
        resolve(products[0]);
      });
    }catch(err){
      reject(err)
    }
  })
}

const addProductToCart = async ()



module.exports = {
  getProductByHandle,
  addProductToCart
}