import React, { useEffect, useRef } from 'react';

interface MatrixTelemetryRainProps {
  opacity?: number;
  speed?: number;
  fontSize?: number;
  color?: string;
  headColor?: string;
}

export const MatrixTelemetryRain: React.FC<MatrixTelemetryRainProps> = ({
  opacity = 0.12,
  speed = 0.45,
  fontSize = 13,
  color = '#00ACD4',
  headColor = '#E0F7FA'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDrops();
    };

    window.addEventListener('resize', handleResize);

    // Matrix characters: Digits, Hex, and Tech symbols
    const matrixChars = '0101010123456789ABCDEF010123456789XYZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ'.split('');

    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initDrops = () => {
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -(height / fontSize));
      }
    };

    initDrops();

    let lastTime = 0;
    const interval = 1000 / (12 * speed); // Ultra-calm, slow corporate cadence

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Subtle fade rectangle for smooth elegant trailing
      ctx.fillStyle = 'rgba(6, 26, 40, 0.2)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only render subset of active columns for calmer visual feel
        if (i % 2 !== 0 && drops[i] < 0) continue;

        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw soft glowing head
        ctx.fillStyle = headColor;
        ctx.shadowColor = color;
        ctx.shadowBlur = 2;
        ctx.fillText(char, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Draw trailing character
        const prevChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillStyle = color;
        ctx.fillText(prevChar, x, y - fontSize);

        // Reset drop to top with calm random delay
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, speed, fontSize, color, headColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity }}
    />
  );
};
