import { config as loadEnv } from "dotenv";
import { SDK, Auth, TEMPLATES, Metadata } from "@infura/sdk";

loadEnv();

const auth = new Auth({
  projectId: process.env.INFURA_API_KEY,
  secretId: process.env.INFURA_API_KEY_SECRET,
  privateKey: process.env.WALLET_PRIVATE_KEY,
  chainId: 5,
});

const sdk = new SDK(auth);

const newContract = await sdk.deploy({
  template: TEMPLATES.ERC721Mintable,
  params: {
    name: "NFT contract",
    symbol: "CNSYS",
    contractURI:
      "https://bafybeiesrdovwqtcueo2cflwtgkurjkvvvnufwwp2dlnnbsxmnwezdrali.ipfs.infura-ipfs.io/",
  },
});
console.log(`Contract address is: ${newContract.contractAddress}`);
