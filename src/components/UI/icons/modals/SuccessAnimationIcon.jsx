export const SuccessAnimationIcon = ({ size = 80 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='glow'>
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle cx='40' cy='40' r='18' fill='none' stroke='#22c55e' strokeWidth='3' opacity='0.4'>
        <animate attributeName='r' from='18' to='34' dur='0.6s' begin='0.2s' fill='freeze' />
        <animate attributeName='opacity' from='0.4' to='0' dur='0.6s' begin='0.2s' fill='freeze' />
      </circle>

      <g filter='url(#glow)'>
        <circle
          cx='40'
          cy='40'
          r='22'
          fill='#22c55e'
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        >
          <animateTransform
            attributeName='transform'
            type='scale'
            from='0.8'
            to='1.05'
            dur='0.25s'
            fill='freeze'
          />
          <animateTransform
            attributeName='transform'
            type='scale'
            from='1.05'
            to='1'
            begin='0.25s'
            dur='0.15s'
            fill='freeze'
          />
        </circle>

        <path
          d='M30 41 L38 49 L52 33'
          fill='none'
          stroke='#ffffff'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='40'
          strokeDashoffset='40'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='40'
            to='0'
            dur='0.4s'
            begin='0.35s'
            fill='freeze'
          />
        </path>
      </g>
    </svg>
  );
};
