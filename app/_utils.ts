export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements array[i] and array[j]
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const getWordColor = (category: 1 | 2 | 3 | 4): string => {
  switch (category) {
    case 1:
      return "#DAC1E3";
    case 2:
      return "#B482C6";
    case 3:
      return "#8F44AA";
    case 4:
      return "#69058D";
    default:
      return "bg-black";
  }
};

export const getPerfection = (mistakesRemaining: number) => {
  switch (mistakesRemaining) {
    case 4:
      return "Perfect!";
    case 3:
      return "Nice!";
    case 2:
      return "Good!";
    default:
      return "Phew!";
  }
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
