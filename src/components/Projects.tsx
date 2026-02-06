import Image from "next/image";
import Link from "next/link";
import { ProjectImageCarousel } from "./ProjectImageCarousel";

const GITHUB_USER = "IgorLohan";

const CUSTOM_IMAGES: Record<string, string | string[]> = {
  portfolio: "/projetos/portfolio.png",
  "api-chefia": "/projetos/api-chefia.png",
  chefia: "/projetos/chefia.png",
  barbertip: ["/projetos/barbertip.png", "/projetos/barbertip-2.png", "/projetos/barbertip-3.png", "/projetos/barbertip-4.png", "/projetos/barbertip-5.png"]
};

const GRADIENTS = [
  "from-indigo-500 to-violet-500",
  "from-violet-500 to-pink-500",
  "from-pink-500 to-amber-500",
  "from-amber-500 to-emerald-500",
  "from-emerald-500 to-cyan-500",
  "from-cyan-500 to-indigo-500",
];

async function getGitHubRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=4`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (!res.ok) return [];
    const repos = await res.json();
    return repos.filter((r: { fork: boolean; name: string }) => !r.fork && r.name !== "portifolio");
  } catch {
    return [];
  }
}

function formatRepoName(name: string) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function Projects() {
  const repos = await getGitHubRepos();

  if (repos.length === 0) {
    return (
      <section
        id="projetos"
        className="bg-[#0f0f1a] px-6 py-24 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="text-center text-zinc-500">
            Nenhum projeto encontrado no GitHub.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projetos"
      className="bg-[#0f0f1a] px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
          Projetos em Destaque
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo: { name: string; description: string | null; language: string | null; html_url: string; full_name: string; updated_at?: string; topics?: string[] }, index: number) => (
            <Link
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-[#1a1a2e] transition-colors hover:bg-[#1e1e32]"
            >
              {CUSTOM_IMAGES[repo.name] ? (
                <ProjectImageCarousel
                  images={CUSTOM_IMAGES[repo.name]!}
                  alt={repo.name}
                  gradientClass={GRADIENTS[index % GRADIENTS.length]}
                />
              ) : (
                <div
                  className={`relative h-52 overflow-hidden bg-gradient-to-r ${GRADIENTS[index % GRADIENTS.length]}`}
                >
                  <Image
                    src={`https://opengraph.githubassets.com/${repo.updated_at ? new Date(repo.updated_at).getTime() : "1"}/${repo.full_name}`}
                    alt={repo.name}
                    width={400}
                    height={200}
                    className="h-full w-full object-contain opacity-90"
                  />
                </div>
              )}
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-bold text-white">
                  {formatRepoName(repo.name)}
                </h3>
                <p className="line-clamp-2 text-zinc-400">
                  {repo.description || "Projeto no GitHub"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="rounded-lg bg-indigo-500/40 px-3 py-1.5 text-xs font-medium text-indigo-400">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg bg-indigo-500/40 px-3 py-1.5 text-xs font-medium text-indigo-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
