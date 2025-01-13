import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './MyModuleSample.types';

type MyModuleSampleModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class MyModuleSampleModule extends NativeModule<MyModuleSampleModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(MyModuleSampleModule);
