import { LoibonInterface, Mission } from 'types/dataTypes'
import { faker } from '@faker-js/faker'
import { subDays } from 'date-fns'

export const generateMissions = () => {
  const missions: any[] = []

  for (let i = 300; i >= 0; i -= 31) {
    const multiplier = Math.random() < 0.3 ? -1 : 1
    const profit = multiplier * Number(faker.finance.amount(1000, 10000))
    missions.push({
      date: subDays(new Date(), i),
      profit,
      name: '',
      address: '',
      loibon: '',
      hedge: '',
      cap: 0,
      earnings: 0,
      balance: 0,
      assets: [],
      noOfPositions: 0,
      blockNumber: 0,
    })
  }

  return missions
}

const loibons: LoibonInterface[] = Array.from(Array(6), (_, i) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  rank: i + 1,
  totalMissionsValue: Number(faker.finance.amount(-1000, 100000, 2)),
  totalPnL: Number(Math.floor(Math.random() * 20)),
  averagePnlPerMission: Number(Math.floor(Math.random() * 20)),
  noOfMissions: Number(Math.floor(Math.random() * 100)),
  profitableMissions: Number(Math.floor(Math.random() * 100)),
  profitableMissionsValue: Number(faker.finance.amount(1000, 100000, 2)),
  losingMissions: Number(Math.floor(Math.random() * 100)),
  losingMissionsValue: Number(faker.finance.amount(-1000, -100, 2)),
  missions: generateMissions(),
}))

export const getAll = () => {
  return loibons
}

export const getById = (id: string | string[]): LoibonInterface | null => {
  const loibon = loibons.filter((loibon) => loibon.id === id)[0]
  if (!loibon) {
    return null
  }
  return loibon
}
