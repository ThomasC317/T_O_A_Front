import Link from "next/link";

export function FantasyCard({children}) {
  return (
    <div className="justify-center items-center">
      <div className={`flex items-center gap-12 p-body-fantasyCard justify-center relative large-borders p-6 wooden-background`}>
{children}
      </div>
    </div>
  );
}