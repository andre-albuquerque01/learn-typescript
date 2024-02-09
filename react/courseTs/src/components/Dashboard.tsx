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
  const [pagamentoCC, setPagamentoCC] = useState<number>(0);
  const [pagamentoB, setPagamentoB] = useState<number>(0);
  const [pg, setPg] = useState<number>(0);
  const [rec, setRec] = useState<number>(0);
  const [ap, setAp] = useState<number>(0);
  const [est, setEst] = useState<number>(0);

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

  function pagamento() {
    let cd = 0;
    let bl = 0;
    data.forEach(elemnt => {
      if (elemnt.formadepagamento === 'Boleto') {
        bl++
      } else if (elemnt.formadepagamento === 'Cartão de Crédito') {
        cd++
      }
    })
    setPagamentoB(bl)
    setPagamentoCC(cd)
  }

  function statusPedido() {
    let pg = 0;
    let rec = 0;
    let ap = 0;
    let est = 0;

    data.forEach(elemnt => {
      if (elemnt.status === 'Paga') {
        pg++
      } else if (elemnt.status === 'Recusada pela operadora de cartão') {
        rec++
      } else if (elemnt.status === 'Aguardando pagamento') {
        ap++
      } else if (elemnt.status === 'Estornada') {
        est++
      }
    })
    setPg(pg);
    setRec(rec);
    setAp(ap);
    setEst(est);
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
  }, []);

  useEffect(() => {
    soma();
    pagamento();
    statusPedido();
  });

  return (
    <div>
      <h1>Estatísticas</h1>
      <hr />
      <h3>
        Total: {total.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 2
        })}
      </h3>
      <hr />
      <h3>Cartão de Crédito: {pagamentoCC}</h3>
      <h3>Boleto: {pagamentoB}</h3>
      <hr />
      <h3>Paga: {pg}</h3>
      <h3>Recusada pela operadora de cartão: {rec}</h3>
      <h3>Aguardando pagamento: {ap}</h3>
      <h3>Estornada: {est}</h3>
      <h3>Dia com mais vendas: { }</h3>
      <hr />

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
