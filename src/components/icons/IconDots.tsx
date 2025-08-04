import type { SVGProps } from 'react';

export const IconDots = (props: SVGProps<SVGSVGElement>) => (
  <svg height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    {/* Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE */}
    <path
      d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
);
