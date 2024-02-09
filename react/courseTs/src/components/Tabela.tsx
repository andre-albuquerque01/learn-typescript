import { Faturamento } from "../type/data";

export const Tabela = (props: any) => {
    const data = props.data;
    return (
        <div>
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
                    {data?.map((item: Faturamento, key: number) => (
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
        </div>
    )
}
