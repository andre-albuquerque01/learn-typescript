import { useEffect, useState } from "react";
import { fetchAll } from "../lib/data.tsx";
import { Faturamento } from "../type/data.ts";
import { Tabela } from "./Tabela.tsx";
import { Estatisca } from "./Estatisca.tsx";

export const Dashboard = () => {
  const [data, setData] = useState<Faturamento[]>([]);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAll();
        const formattedData = response.map((item: any) => {
          return Object.keys(item).reduce((acc: any, key) => {
            acc[key.toLowerCase().replace(/\s/g, '')] = item[key];
            return acc;
          }, {});
        });
        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Estatisca data={data} />
      <Tabela data={data} />
    </div >
  )
}
