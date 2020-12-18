export const environment = "TEST";
//export const environment = "LIVE";
export const GPARange = [
  { Letter: "A+", MinPercent: 97, MaxPercent: 100, GPAScale: 4.0 },
  { Letter: "A", MinPercent: 93, MaxPercent: 96, GPAScale: 4.0 },
  { Letter: "A-", MinPercent: 90, MaxPercent: 92, GPAScale: 3.7 },
  { Letter: "B+", MinPercent: 87, MaxPercent: 89, GPAScale: 3.3 },
  { Letter: "B", MinPercent: 83, MaxPercent: 86, GPAScale: 3.0 },
  { Letter: "B-", MinPercent: 80, MaxPercent: 82, GPAScale: 2.7 },
  { Letter: "C+", MinPercent: 77, MaxPercent: 79, GPAScale: 2.3 },
  { Letter: "C", MinPercent: 73, MaxPercent: 76, GPAScale: 2.0 },
  { Letter: "C-", MinPercent: 70, MaxPercent: 72, GPAScale: 1.7 },
  { Letter: "D+", MinPercent: 67, MaxPercent: 69, GPAScale: 1.3 },
  { Letter: "D", MinPercent: 65, MaxPercent: 66, GPAScale: 1.0 },
  { Letter: "F", MinPercent: 0, MaxPercent: 64, GPAScale: 0.0 },
];

export const defaultCourseCountInSemester = 4;
export const defaultAssessmentCountInClass = 2;
export const defaultSemesterCount = 1;
export const defaultClassCount = 1;
