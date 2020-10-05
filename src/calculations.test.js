import { calculateBiorhythms } from "./calculations";

it("calculates the physical biorhythm", () => {
  const { physical } = calculateBiorhythms("1991-09-21", "2020-10-03");
  expect(physical).toBeCloseTo(0.5196);
});

it("calculates the emotional biorhythm", () => {
  const { emotional } = calculateBiorhythms("1991-09-21", "2020-10-03");
  expect(emotional).toBeCloseTo(-1.0);
});

it("calculates the intellectual biorhythm", () => {
  const { intellectual } = calculateBiorhythms("1991-09-21", "2020-10-03");
  expect(intellectual).toBeCloseTo(0.7557);
});
