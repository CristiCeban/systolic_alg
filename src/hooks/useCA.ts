import { useState } from "react";

const generate = (genSize: number) =>
  new Array(genSize)
    .fill(0, 0, Math.floor(genSize / 2))
    .fill(1, Math.floor(genSize / 2), Math.floor(genSize / 2) + 1)
    .fill(0, Math.floor(genSize / 2) + 1);

export const useCA = (
  genSize: number,
  gensCount: number,
  ruleset: number
): {
  currentStep: number;
  genSize: number;
  gensCount: number;
  generations: number[][];
  ruleset: number;
  step: () => void;
  restart: () => void;
} => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [generations, setGenerations] = useState([generate(genSize)]);

  const step = () => {
    setCurrentStep((prev) => prev + 1);
    const _generation = generations.slice(
      generations.length === gensCount ? 1 : 0
    );
    const currentGen = generations[generations.length - 1];
    const nextGen = Array(genSize);
    for (let i = 0; i < genSize; i++) {
      let neighborhood = 0;
      for (let j = -1; j < 2; j++)
        neighborhood =
          (neighborhood << 1) + currentGen[(i + j + genSize) % genSize];
      nextGen[i] = ruleset & (1 << neighborhood) ? 1 : 0;
    }
    _generation.push(nextGen);
    setGenerations(_generation);
  };

  const restart = () => {
    setCurrentStep(1);
    setGenerations([generate(genSize)]);
  };
  return {
    step,
    restart,
    currentStep,
    genSize,
    gensCount,
    ruleset,
    generations,
  };
};
