const gradeRanges = [
  { score: 50, grade: 'F' },
  { score: 65, grade: 'D' },
  { score: 75, grade: 'C' },
  { score: 90, grade: 'B' },
  { score: 100, grade: 'A' },
];

const last = (arr) => arr[arr.length - 1];

export const calculateGrade = (score) => {
  const { grade } = gradeRanges
    .find((it) => it.score > score) ?? last(gradeRanges);
  return grade
}
