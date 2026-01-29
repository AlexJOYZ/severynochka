export const FailureAnimationIcon = () => {
  return (
    <svg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='glow-error'>
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle cx='70' cy='70' r='32' fill='none' stroke='#ef4444' stroke-width='4' opacity='0.4'>
        <animate attributeName='r' from='32' to='62' dur='0.6s' begin='0.2s' fill='freeze' />
        <animate attributeName='opacity' from='0.4' to='0' dur='0.6s' begin='0.2s' fill='freeze' />
      </circle>

      <g filter='url(#glow-error)'>
        <circle cx='70' cy='70' r='40' fill='#ef4444'>
          <animateTransform
            attributeName='transform'
            type='scale'
            values='0.7;1.1;1'
            keyTimes='0;0.7;1'
            dur='0.4s'
            fill='freeze'
          />
        </circle>

        <path
          d='M52 52 L88 88'
          fill='none'
          stroke='#ffffff'
          stroke-width='7'
          stroke-linecap='round'
          stroke-dasharray='60'
          stroke-dashoffset='60'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='60'
            to='0'
            dur='0.25s'
            begin='0.35s'
            fill='freeze'
          />
        </path>

        <path
          d='M88 52 L52 88'
          fill='none'
          stroke='#ffffff'
          stroke-width='7'
          stroke-linecap='round'
          stroke-dasharray='60'
          stroke-dashoffset='60'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='60'
            to='0'
            dur='0.25s'
            begin='0.45s'
            fill='freeze'
          />
        </path>
      </g>
    </svg>
  );
};
