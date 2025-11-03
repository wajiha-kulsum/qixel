import { notFound } from "next/navigation";
import { registry, loadComponentBySlug } from "@/lib/registry";
import { ComponentPreview } from "@/components/site/component-preview";
import { CodeBlock } from "@/components/site/code-block";
import { CliCommand } from "@/components/site/cli-command";
import { Tabs } from "@/components/site/tabs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ComponentDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const item = registry.find((i) => i.slug === slug);
  if (!item) return notFound();

  const Component = await loadComponentBySlug(slug);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">{item.name}</h1>
        {item.description ? (
          <p className="text-gray-600 mt-2">{item.description}</p>
        ) : null}

        <div className="mt-8">
          <Tabs
            tabs={[
              {
                id: "preview",
                label: "Preview",
                content: (
                  <ComponentPreview title="Live Preview" description="Interact to feel the motion.">
                    {Component ? <Component>Hover Me!</Component> : null}
                  </ComponentPreview>
                ),
              },
              {
                id: "code",
                label: "Code",
                content: (
                  <div>
                    <CodeBlock code={item.sourceCode} label="tsx" />
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Installation</h2>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">CLI (Recommended)</h3>
            <CliCommand command={`npx @qixel/cli add ${item.slug}`} />
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Manual Installation</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">1. Install dependencies:</p>
              <CliCommand command={item.install || "npm i framer-motion"} />
              <p className="text-sm text-gray-600 mt-3">2. Copy the source code from the Code tab above</p>
            </div>
          </div>
        </div>

        {item.props?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-2 border-b">Name</th>
                    <th className="text-left p-2 border-b">Type</th>
                    <th className="text-left p-2 border-b">Default</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {item.props.map((p) => (
                    <tr key={p.name} className="align-top">
                      <td className="p-2 border-b font-medium">{p.name}{p.required ? " *" : ""}</td>
                      <td className="p-2 border-b font-mono text-xs">{p.type}</td>
                      <td className="p-2 border-b text-gray-600">{p.defaultValue ?? "-"}</td>
                      <td className="p-2 border-b text-gray-700">{p.description ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {item.examples?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Examples</h2>
            <div className="grid gap-6">
              {item.examples.map((ex, idx) => (
                <div key={idx}>
                  <h3 className="font-medium mb-2">{ex.title}</h3>
                  <CodeBlock code={ex.code} label="tsx" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}


