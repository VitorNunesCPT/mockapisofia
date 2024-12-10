const { faker } = require("@faker-js/faker");

let idCounter = 1;
const mockRegulatedList = Array.from({ length: 10 }).map(() => ({
  id: idCounter++,
  description: faker.lorem.sentence({ min: 10, max: 50 }),
  profile_id: faker.number.int(),
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  created_at: faker.date.past().toISOString(),
  mobile: faker.phone.number("##########"),
  returnHistory: Array.from({
    length: faker.number.int({ min: 1, max: 5 }),
  }).map(() => ({
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    status: faker.helpers.arrayElement([
      "Aguarda Telerregulação",
      "Em Telerregulação",
      "Aceite Atrasado",
    ]),
    description: faker.lorem.sentence({ min: 500, max: 1000 }),
    updated_at: faker.date.recent().toISOString(),
  })),
}));

module.exports = {
  mockRegulatedList,
};
