export function mediaCalculator(notes: number[]): { media: number } {
  // return
  let sum: number = 0;
  for (let index in notes) {
    sum += notes[index];
  }
  return { media: Number((sum / notes.length).toFixed(2)) };
}
