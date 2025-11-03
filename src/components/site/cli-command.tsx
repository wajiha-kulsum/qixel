"use client";

import { CopyButton } from "./copy-button";

export function CliCommand({ command }: { command: string }) {
  return (
    <div className="relative bg-gray-900 rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-400">$</span>
        <span className="text-gray-100">{command}</span>
      </div>
      <div className="absolute top-2 right-2">
        <CopyButton getText={() => command} />
      </div>
    </div>
  );
}

