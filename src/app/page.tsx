import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffee } from "../../components/BuyMeCoffee";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      marginTop: "2rem",
    }}>
      <h1 style={{ marginBottom: '1rem'}}>Faça uma doação</h1>

      <ConnectEmbed 
      client={client}
      chain={chain}
      />
      <BuyMeCoffee  />
      

    </div>
  );
}
