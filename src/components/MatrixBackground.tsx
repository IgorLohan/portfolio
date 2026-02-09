"use client";

import { useEffect, useRef } from "react";

const MATRIX_CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF<>{}[]|/\\";
const FONT_SIZE = 14;
const GREEN = "#ff4040";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const drops: number[] = [];

    const resize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initColumns();
    };

    function initColumns() {
      const cols = Math.floor(canvas!.width / FONT_SIZE);
      drops.length = 0;
      for (let i = 0; i < cols; i++) {
        drops[i] = Math.random() * -100;
      }
    }

    function draw() {
      ctx!.fillStyle = "rgba(10, 8, 8, 0.05)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx!.fillStyle = GREEN;
        ctx!.fillText(char, x, y);

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    }

    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initColumns();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.65 }}
      aria-hidden
    />
  );
}
