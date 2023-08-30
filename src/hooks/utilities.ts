import { random } from './useRandomInterval';

const DEFAULT_COLOR = 'hsl(50deg,100%,50%)';

export function generateSparkles(color: string = DEFAULT_COLOR) {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 50) + '%',
      left: random(0, 95) + '%',
      pointerEvents: 'none',
    } as React.CSSProperties,
  };
}
