import * as React from 'react';

import { MyModuleSampleViewProps } from './MyModuleSample.types';

export default function MyModuleSampleView(props: MyModuleSampleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
