const { faker } = require("@faker-js/faker");

let consultantIdCounter = 1000;

const mockConsultants = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  status: faker.number.int({ min: 0, max: 40 }),
  teleRegulator: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  requester: faker.person.fullName(),
  municipality: faker.location.city(),
  elapsed_time: faker.number.int({ min: 0, max: 300 }),
  time_remaining: faker.number.int({ min: 0, max: 300 }),
  created_at: faker.date.past().toISOString(),
}));

const mockConsultantAnswers = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  status: faker.number.int({ min: 0, max: 40 }),
  teleRegulator: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  requester: faker.person.fullName(),
  municipality: faker.location.city(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.recent().toISOString(),
}));

const mockProcessSolicitations = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  requester: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  status: faker.number.int({ min: 0, max: 40 }),
  municipality: faker.location.city(),
  elapsed_time: faker.number.int({ min: 0, max: 300 }),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.recent().toISOString(),
  updated_by: faker.person.fullName(),
}));

const mockSolicitationsSOF = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  requester: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  teleconsultant: faker.person.fullName(),
  municipality: faker.location.city(),
  indicated_at: faker.date.recent().toISOString(),
}));

const mockScheduledsLista = Array.from({ length: 500 }).map(() => ({
  id: consultantIdCounter++,
  status: faker.number.int({ min: 0, max: 40 }),
  teleRegulator: faker.person.fullName(),
  solicitation: faker.lorem.paragraph(),
  requester: faker.person.fullName(),
  municipality: faker.location.city(),
  created_at: faker.date.past().toISOString(),
  link_teleconsultation: faker.internet.url(),
  returnHistory: Array.from({
    length: faker.number.int(1),
  }).map(() => ({
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    status: faker.number.int({ min: 0, max: 40 }),
    Scheduleds_at: faker.date.recent().toISOString(),
  })),
}));

module.exports = {
  mockConsultants,
  mockConsultantAnswers,
  mockProcessSolicitations,
  mockSolicitationsSOF,
  mockScheduledsLista,
};
