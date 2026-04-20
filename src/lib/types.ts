/**
 * Represents a single component's property configuration.
 * Useful for documentation and type-checking within the registry.
 */
export type ComponentProp = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description?: string;
};

/**
 * An example snippet showcasing component usage.
 */
export type Example = {
  title: string;
  code: string;
};

/**
 * Definition of a reusable component within the Qixel registry system.
 * Contains metadata, source code, and integration details.
 */
export type RegistryItem = {
  slug: string;
  name: string;
  category: string;
  description?: string;
  // Where to import the component from and which export to use
  modulePath: string;
  exportName: string;
  // The code users will copy-paste
  sourceCode: string;
  // Optional installation instructions
  install?: string;
  // Optional customization notes
  customization?: string;
  // Dependencies and tags for filtering
  dependencies?: string[];
  tags?: string[];
  // Props and example snippets
  props?: ComponentProp[];
  examples?: Example[];
  // Preview configuration
  previewProps?: Record<string, unknown>;
  previewChildren?: string;
};

export type Registry = RegistryItem[];


