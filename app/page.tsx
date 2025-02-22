import Image from "next/image";

export default function Home() {
  const villageData = {
    level: 5,
    name: 'Village de Légende',
    resources: [
      { name: 'Bois', amount: 100 },
      { name: 'Pierre', amount: 50 },
      { name: 'Or', amount: 30 },
    ],
    xp: 150,
    maxXp: 200,
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] img-bg">
       <div>


    </div>
    </div>
  );
}
