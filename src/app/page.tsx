import { FolderGit2 } from "lucide-react";
import { Code, FileText, Image, MessageSquare, Music, Video } from "lucide-react"
import Link from "next/link";

type Tool = {
  name: string
  icon: React.ElementType
  href: string
  color: string
}

const tools: Tool[] = [
  { name: "Chat", icon: MessageSquare, href: "#", color: "bg-gray-500" },
  { name: "Image", icon: Image, href: "#", color: "bg-gray-500" },
  { name: "Video", icon: Video, href: "#", color: "bg-gray-500" },
  { name: "Audio", icon: Music, href: "#", color: "bg-gray-500" },
  { name: "Code", icon: Code, href: "#", color: "bg-gray-500" },
  { name: "Document", icon: FileText, href: "#", color: "bg-gray-500" },
]


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-6xl font-bold text-center">DocAmz</div>
        <div className="text-3xl font-bold text-center">welcome aboard</div>
        <div className="flex justify-center items-center bg-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={`${tool.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center`}
              >
                <tool.icon className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/DocAmz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderGit2 />
          GitProfile
        </a>
      </footer>
    </div>
  );
}
