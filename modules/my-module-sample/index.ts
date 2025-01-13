// Reexport the native module. On web, it will be resolved to MyModuleSampleModule.web.ts
// and on native platforms to MyModuleSampleModule.ts
export { default } from './src/MyModuleSampleModule';
export { default as MyModuleSampleView } from './src/MyModuleSampleView';
export * from  './src/MyModuleSample.types';

export function setValue(arg0: string): void {
  throw new Error('Function not implemented.');
}

