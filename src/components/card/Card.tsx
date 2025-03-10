import { JSX } from 'react';

export function Card({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
