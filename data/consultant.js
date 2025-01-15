const { faker } = require("@faker-js/faker");

let consultantIdCounter = 1000;

const mockConsultants = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  status: faker.helpers.arrayElement([
    "Pending",
    "In Progress",
    "Completed",
    "Cancelled",
  ]),
  teleRegulator: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  requester: faker.person.fullName(),
  municipality: faker.location.city(),
  elapsed_time: faker.number.int({ min: 0, max: 300 }),
  time_remaining: faker.number.int({ min: 0, max: 300 }),
  created_at: faker.date.past().toISOString(),
}));

module.exports = {
  mockConsultants,
};
