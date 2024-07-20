import React ,{ useRef, useEffect, useImperativeHandle, useState, DetailedHTMLProps, HTMLAttributes,forwardRef } from 'react';
import 'jb-number-input';
// eslint-disable-next-line no-duplicate-imports
import {JBNumberInputWebComponent } from 'jb-number-input';
import {type Props as JBInputProps} from 'jb-input-react';
import {useJBInputAttribute} from 'jb-input-react/lib/attributes-hook';
import {useJBInputEvents} from 'jb-input-react/lib/events-hook';
import { type NumberFieldParameterInput} from 'jb-number-input/types';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'jb-number-input': JBNumberInputType;
        }
        interface JBNumberInputType extends DetailedHTMLProps<HTMLAttributes<JBNumberInputWebComponent>, JBNumberInputWebComponent> {
            class?: string,
            label?: string,
            name?: string,
            message?: string,
            placeholder?:string,
        }
    }
}
// eslint-disable-next-line react/display-name
export const JBNumberInput = forwardRef((props: JBNumberInputProps, ref) => {
  const element = useRef<JBNumberInputWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  //to force rerender for events
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useJBInputAttribute(element,props);
  useJBInputEvents(element,props);
  useEffect(() => {
    if (typeof props.numberFieldParameter == "object") {
      element?.current?.setNumberFieldParameter(props.numberFieldParameter);
    }
  }, [props.numberFieldParameter]);
  return (
    <jb-number-input placeholder={props.placeholder} ref={element} class={props.className} label={props.label} message={props.message}>
      {props.children}
    </jb-number-input>
  );
});
export type JBNumberInputProps = JBInputProps & {
    // usePersianNumber?: boolean,
    numberFieldParameter?: NumberFieldParameterInput,
}
JBNumberInput.displayName = "JBNumberInput";

