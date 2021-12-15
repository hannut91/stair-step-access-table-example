import { calculateGrade } from './index';

describe('학점계산기', () => {
  test('나의 백분율을 입력하면, 학점을 반환한다.', () => {
    expect(calculateGrade(40)).toBe('F');
    expect(calculateGrade(49)).toBe('F');

    expect(calculateGrade(50)).toBe('D');
    expect(calculateGrade(60)).toBe('D');
    expect(calculateGrade(64)).toBe('D');

    expect(calculateGrade(65)).toBe('C');
    expect(calculateGrade(70)).toBe('C');
    expect(calculateGrade(74)).toBe('C');

    expect(calculateGrade(75)).toBe('B');
    expect(calculateGrade(85)).toBe('B');
    expect(calculateGrade(89)).toBe('B');

    expect(calculateGrade(90)).toBe('A');
    expect(calculateGrade(100)).toBe('A');
  });
});