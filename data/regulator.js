const { faker } = require("@faker-js/faker");

let idCounter = 207290;

const mockRegulators = Array.from({ length: 500 }).map(() => ({
  type_id: faker.string.uuid(), // Substituído datatype.uuid por string.uuid
  mode: faker.helpers.arrayElement(["test", "live"]),
  id: idCounter++,
  status: faker.helpers.arrayElement([
    "Aguarda Telerregulação",
    "Em Telerregulação",
    "Aceite Atrasado",
  ]),
  name: faker.person.fullName(), // Atualização conforme a nova API do faker
  description: faker.lorem.sentence({ min: 500, max: 1000 }),
  county: faker.location.county(),
  elapsed_time: faker.number.int({ min: 0, max: 300 }),
  time_remaining: faker.number.int({ min: 0, max: 300 }),
  created_at: faker.date.past(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  unit: faker.company.name(),
  squad: faker.word.noun(),
  file_ids: faker.number.int({ min: 0, max: 10 }),
  forwardIntention: faker.datatype.boolean(),
  referralRequested: faker.datatype.boolean(),
  cboEspecialty: faker.person.jobArea(),
  patientSearch: [
    {
      id: faker.number.int(),
      cns: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
      mother_name: faker.person.fullName(),
      person_id: faker.number.int(),
      created_at: faker.date.past().toISOString(),
      updated_at: faker.date.recent().toISOString(),
    },
  ],
  mobile: faker.phone.number("##########"),
}));

module.exports = {
  mockRegulators,
};
