import { listarUfs } from '../lib/ibge';

export default async function Home() {

  const estados = await listarUfs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {estados.map((estado) => (
            <li className="bg-green-300 m-5" key={estado.id}>{estado.nome} - {estado.data}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
