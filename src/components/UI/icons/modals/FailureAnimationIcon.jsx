export const FailureAnimationIcon = ({ size = 80 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='glow-error'>
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle cx='40' cy='40' r='18' fill='none' stroke='#ef4444' stroke-width='3' opacity='0.4'>
        <animate attributeName='r' from='18' to='34' dur='0.6s' begin='0.2s' fill='freeze' />
        <animate attributeName='opacity' from='0.4' to='0' dur='0.6s' begin='0.2s' fill='freeze' />
      </circle>

      <g filter='url(#glow-error)'>
        <circle
          cx='40'
          cy='40'
          r='22'
          fill='#ef4444'
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        >
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
          d='M30 30 L50 50'
          fill='none'
          stroke='#ffffff'
          stroke-width='4'
          stroke-linecap='round'
          stroke-dasharray='30'
          stroke-dashoffset='30'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='30'
            to='0'
            dur='0.25s'
            begin='0.35s'
            fill='freeze'
          />
        </path>

        <path
          d='M50 30 L30 50'
          fill='none'
          stroke='#ffffff'
          stroke-width='4'
          stroke-linecap='round'
          stroke-dasharray='30'
          stroke-dashoffset='30'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='30'
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
