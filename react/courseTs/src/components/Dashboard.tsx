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
  const [total, setTotal] = useState<number>(0);

  function soma() {
    let c: number = 0;
    data.forEach(element => {
      if (element["valor(r$)"] !== '-') {
        const valor = parseFloat(element["valor(r$)"].replace('R$ ', '').replace('.', '').replace(',', '.'));
        c += valor;
        setTotal(c)
      }
    })
  }

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
    soma()
  }, []);

  return (
    <div>
      <h1>
        Total: {total.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </h1>
      <table bgcolor="aliceblue" width="90%" style={{ textAlign: 'center', tableLayout: 'fixed' }}>
        <thead>
          <tr style={{ backgroundColor: 'lightgray' }}>
            <th>Nome</th>
            <th>Email</th>
            <th>Valor</th>
            <th>Pagamento</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => (
            <tr key={key} style={{ backgroundColor: key % 2 === 0 ? 'aliceblue' : 'white' }}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item["valor(r$)"]}</td>
              <td>{item.formadepagamento}</td>
              <td>{item.data}</td>
              <td>{item.status}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div >
  )
}
