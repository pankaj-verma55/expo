import { NativeModule, requireNativeModule } from 'expo';

import { MyModuleSampleModuleEvents } from './MyModuleSample.types';

declare class MyModuleSampleModule extends NativeModule<MyModuleSampleModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  setValue(value: string): void;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MyModuleSampleModule>('MyModuleSample');
