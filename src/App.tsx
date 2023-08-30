import { ReactNode, useState } from 'react';
import useRandomInterval from './hooks/useRandomInterval';
import { generateSparkles } from './hooks/utilities';
import SparkleInstance from './hooks/sparkleInstance';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Sparkles>
        <p>Hello World</p>
      </Sparkles>
    </div>
  );
}
export default App;

type Sparkle = ReturnType<typeof generateSparkles>;

function Sparkles({ children }: { children: ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useRandomInterval(
    () => {
      const now = Date.now();

      const sparkle = generateSparkles();

      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    50,
    700
  );

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {sparkles.map((sparkle) => (
        <SparkleInstance key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <div style={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>{children}</div>
    </div>
  );
}
