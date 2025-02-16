import { fetchAndUnblindUtxos } from "ldk";
import { MarinaAddressInterface } from "../wallet/marina/IMarina";

const ESPLORA_API_URL = "https://blockstream.info/liquid/api";

//...

// Get all addresses and blinding keys from marina
// const addrs = await window.marina.getAddresses();

export const fetchUTXOS = async (addresses: MarinaAddressInterface[]) => {
  // fetch and unblind all utxos for given array of address
  //
  // THIS CAN TAKE A LOT OF TIME TO COMPLETE!
  // use fetchAndUnblindUtxosGenerator instead
  const utxos = await fetchAndUnblindUtxos(addresses, ESPLORA_API_URL);

  // It will return an array of unblinded utxos
  // we suggest to cache unblindData in order to speed-up
  // future transaction building and blinding.
  console.log(utxos);
  /* 
[
  {
    txid: string;
    vout: number;
    asset?: string;
    value?: number;
    prevout?: TxOutput;
    unblindData?: confidential.UnblindOutputResult;
  }
] 
*/

  return utxos;
};
