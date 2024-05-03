import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x27642B0D5e16E38e6dBaE56BDB4F9659E16ccC9d";

export const contract= getContract({
    client:client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});