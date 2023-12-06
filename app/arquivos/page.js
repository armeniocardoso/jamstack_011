import { getSortedData } from "@/lib/arquivos";

export default function Arquivos() {

  const dados = getSortedData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {dados.map((dado) => (
            <li className="bg-green-300 m-5" key={dado.id}>
                {dado.data.date} - {dado.data.title}
                <br />
                {dado.content}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
