import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4 gradient-text">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-foreground">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    code: ({ children }) => (
      <code className="bg-violet-500/10 text-violet-300 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-violet-500 pl-4 italic text-muted-foreground my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
