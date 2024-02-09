import { useEffect, useState } from "react";
import { fetchAll } from "../lib/data.tsx";

interface Faturamento {
  status: string,
  id: number,
  data: string,
  nome: string,
  email: string,
  formadepagamento: string,
  'valor(r$)': string
}

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

  console.log(data);


  return (
    <div>
      <table bgcolor="aliceblue" width="80%" style={{ textAlign: 'center', tableLayout: 'fixed' }}>
        <tr style={{ backgroundColor: 'lightgray'}}>
          <th>Nome</th>
          <th>Email</th>
          <th>Valor</th>
          <th>Pagamento</th>
          <th>Status</th>
        </tr>
        {data?.map((item, key) => (
          <tr key={key} style={{ backgroundColor: key % 2 === 0 ? 'aliceblue' : 'white' }}>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item["valor(r$)"]}</td>
            <td>{item.formadepagamento}</td>
            <td>{item.status}</td>
          </tr>
        ))
        }
      </table>
    </div >
  )
}
