import {
  DialogHTMLAttributes,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react';

const Dialog = forwardRef(
  (
    {
      children = undefined,
    }: {
      children?: ReactNode;
    } & DialogHTMLAttributes<HTMLDialogElement>,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => {
    return <dialog ref={ref}>{children}</dialog>;
  },
);

export default Dialog;
