import { requireNativeView } from 'expo';
import * as React from 'react';

import { MyModuleSampleViewProps } from './MyModuleSample.types';

const NativeView: React.ComponentType<MyModuleSampleViewProps> =
  requireNativeView('MyModuleSample');

export default function MyModuleSampleView(props: MyModuleSampleViewProps) {
  return <NativeView {...props} />;
}
