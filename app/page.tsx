import { Button } from "@/app/components/Átomos/button";
import { input } from '@/app/components/Átomos/input';
export default function ComunidadePage() {
return (
<div className="min-h-screen bg-gray-900 p-8 text-white">
<header className="flex justify-between items-center mb-10">
<h1 className="text-3xl font-bold">Membros do Grupo</h1>
<div className="flex gap-2">
{/* Input Repetitivo sem tipagem */}


{/*
<input
type="text"
placeholder="Buscar..."
className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg
focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
*/}


<Button variant='Buscar'>Buscar</Button>
{/*
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6
rounded-lg transition-all">
Buscar
</button>
*/}


</div>
</header>
<main className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* CARD 1 - REPETIÇÃO MANUAL */}
<div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500
rounded-full" />
<div>
<h2 className="text-xl font-semibold">Ana Silva</h2>
<p className="text-gray-400 text-sm">Full-stack Developer</p>
</div>
</div>
<p className="text-gray-300 text-sm mb-4">Especialista em React e Node.js. Adora
café e Docker.</p>

<Button variant='VerPerfil'>Ver Perfil</Button>
{/*
<button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md text-sm
font-medium">Ver Perfil</button>
*/}

</div>
{/* CARD 2 - CÓPIA DO CARD 1 */}
<div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-teal-500
rounded-full" />
<div>
<h2 className="text-xl font-semibold">Bruno Costa</h2>
<p className="text-gray-400 text-sm">UI/UX Designer</p>
</div>
</div>

<p className="text-gray-300 text-sm mb-4">Focado em acessibilidade e design
systems escaláveis.</p>


<Button variant='VerPerfil'>Ver Perfil</Button>
{/*
<button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md text-sm
font-medium">Ver Perfil</button>
*/}

</div>
{/* CARD 3 - MAIS UMA CÓPIA... E SE PRECISAR MUDAR A COR DE TODOS? */}
<div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-tr from-orange-500 to-red-500
rounded-full" />
<div>
<h2 className="text-xl font-semibold">Carla Dias</h2>
<p className="text-gray-400 text-sm">DevOps Engineer</p>
</div>
</div>
<p className="text-gray-300 text-sm mb-4">Mestre em Kubernetes e automação de
pipelines CI/CD.</p>


<Button variant='VerPerfil'>Ver Perfil</Button>
{/*
<button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md text-sm
font-medium">Ver Perfil</button>
*/}

</div>
</main>
<footer className="mt-12 text-center text-gray-500 text-xs">
<p>© 2026 - Engenharia de Software - Full-Stack Class</p>


<Button variant='Sair'>Sair do sistema</Button>

{/*
<button className="mt-2 text-blue-400 hover:underline">Sair do sistema</button>
*/}

</footer>
</div>
);
}