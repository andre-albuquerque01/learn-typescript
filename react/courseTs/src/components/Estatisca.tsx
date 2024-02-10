import { useEffect, useState } from "react";
import { Faturamento } from "../type/data";

export const Estatisca = (props: any) => {
    const data = props.data;
    const [total, setTotal] = useState<number>(0);
    const [pagamentoCC, setPagamentoCC] = useState<number>(0);
    const [pagamentoB, setPagamentoB] = useState<number>(0);
    const [pg, setPg] = useState<number>(0);
    const [rec, setRec] = useState<number>(0);
    const [ap, setAp] = useState<number>(0);
    const [est, setEst] = useState<number>(0);
    const [status, setStatus] = useState<string>('');

    function soma() {
        let c: number = 0;
        data.forEach((element: Faturamento) => {
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
        data.forEach((element: Faturamento) => {
            if (element.formadepagamento === 'Boleto') {
                bl++
            } else if (element.formadepagamento === 'Cartão de Crédito') {
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

        data.forEach((element: Faturamento) => {
            if (element.status === 'Paga') {
                pg++
            } else if (element.status === 'Recusada pela operadora de cartão') {
                rec++
            } else if (element.status === 'Aguardando pagamento') {
                ap++
            } else if (element.status === 'Estornada') {
                est++
            }
        })
        setPg(pg);
        setRec(rec);
        setAp(ap);
        setEst(est);
    }

    function dataMaior() {
        const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const cont = [0];
        data.forEach((element: Faturamento) => {
            const dataString = element.data;
            const partesData = dataString.split(/[/\s:]/);
            const data = new Date(parseInt(partesData[2]), parseInt(partesData[1]) - 1, parseInt(partesData[0]), parseInt(partesData[3]), parseInt(partesData[4]));
            const indiceDiaSemana = data.getDay();
            const nomeDiaSemana = diasDaSemana[indiceDiaSemana];
            if (nomeDiaSemana === 'Domingo') {
                cont[0] += 1
            } else if (nomeDiaSemana === 'Segunda-feira') {
                cont[1] += 1;
            } else if (nomeDiaSemana === 'Terça-feira') {
                cont[2] += 1
            } else if (nomeDiaSemana === 'Quarta-feira') {
                cont[3] += 1
            } else if (nomeDiaSemana === 'Quinta-feira') {
                cont[4] += 1
            } else if (nomeDiaSemana === 'Sexta-feira') {
                cont[5] += 1
            } else if (nomeDiaSemana === 'Sábado') {
                cont[6] += 1
            }
        });

        let maior = 0;
        let pos = 0;
        for (let i = 0; i < cont.length; i++) {
            if (maior < cont[i]) {
                maior = cont[i]
                pos = i;
            }
        }
        setStatus(diasDaSemana[pos])
    }

    useEffect(() => {
        soma();
        pagamento();
        statusPedido();
        dataMaior();
    });
    return (
        <>
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
            <h3>Dia com mais vendas: {status}</h3>
            <hr />
        </>
    )
}
