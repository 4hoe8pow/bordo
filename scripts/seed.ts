import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  const championshipData: Prisma.ChampionshipCreateArgs['data'][] = [
    {
      id: 1,
      title: '18th-westjapan',
      holdOn: '2023-10-07T09:00:00+09:00',
    },
    {
      id: 2,
      title: '33th-alljapan',
      holdOn: '2023-11-18T09:00:00+09:00',
    },
    {
      id: 3,
      title: '7th-challenge',
      holdOn: '2023-06-10T09:00:00+09:00',
    },
  ]
  const teamData: Prisma.TeamCreateArgs['data'][] = [
    { id: 1, name: '広島阿國' },
    { id: 2, name: 'HIROSHIMA BIGWAVE' },
    { id: 3, name: '尾道オータムリーブス' },
    { id: 4, name: '鴨ディ' },
    { id: 5, name: 'Repunkur' },
  ]
  const trickData: Prisma.TrickCreateArgs['data'][] = [
    { code: '0', name: 'Empty', raidSuccess: true },
    {
      code: '1',
      name: 'Touch',
      raidSuccess: true,
    },
    {
      code: '2',
      name: 'Low Kick',
      raidSuccess: true,
    },
    {
      code: '3',
      name: 'High Kick',
      raidSuccess: true,
    },
    {
      code: '4',
      name: 'Parry Tackle',
      raidSuccess: true,
    },
    {
      code: '5',
      name: 'Escape Catch',
      raidSuccess: true,
    },
    {
      code: '6',
      name: 'Pursuit',
      raidSuccess: true,
    },
    {
      code: '7',
      name: 'Dubki',
      raidSuccess: true,
    },
    {
      code: '8',
      name: 'Anti Line Out',
      raidSuccess: true,
    },
    {
      code: '9',
      name: 'Only Bonus',
      raidSuccess: true,
    },
    {
      code: '10',
      name: 'Tackle',
      raidSuccess: false,
    },
    {
      code: '11',
      name: 'Ancle Catch',
      raidSuccess: false,
    },
    {
      code: '12',
      name: 'Back Catch',
      raidSuccess: false,
    },
    {
      code: '13',
      name: 'Dive',
      raidSuccess: false,
    },
    {
      code: '14',
      name: 'Chain',
      raidSuccess: false,
    },
    {
      code: '15',
      name: 'Counter',
      raidSuccess: false,
    },
    {
      code: '16',
      name: 'Cant Out',
      raidSuccess: false,
    },
    {
      code: '17',
      name: 'Raider Line Out',
      raidSuccess: false,
    },
    {
      code: '18',
      name: 'Back Catch',
      raidSuccess: false,
    },
  ]
  const playerData: Prisma.PlayerCreateArgs['data'][] = [
    {
      id: 1,
      name: '加藤 昴太郎',
      sex: 'man',
      height: 171,
      mainPosition: 'レイダー',
    },
    {
      id: 2,
      name: '大西 逸生',
      sex: 'man',
      height: 166,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 3,
      name: '明和 将之介',
      sex: 'man',
      height: 170,
      mainPosition: 'レイダー',
    },
    {
      id: 4,
      name: '川口 雷人',
      sex: 'man',
      height: 167,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 5,
      name: '山口 渉慎',
      sex: 'man',
      height: 16,
      mainPosition: 'レイダー',
    },
    {
      id: 6,
      name: '佐野 翔',
      sex: 'man',
      height: 167,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 7,
      name: 'カム ザン ユー',
      sex: 'man',
      height: 170,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 8,
      name: '山森 圭人',
      sex: 'man',
      height: 170,
      mainPosition: 'オールラウンダー',
    },
    {
      id: 9,
      name: '斉藤 碧生',
      sex: 'man',
      height: 157,
      mainPosition: 'オールラウンダー',
    },
    {
      id: 10,
      name: '武岡 悠真',
      sex: 'man',
      height: 165,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 11,
      name: '保坂 雄飛',
      sex: 'man',
      height: 172,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 12,
      name: '秋葉 凜',
      sex: 'man',
      height: 169,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 13,
      name: '工藤 岳斗',
      sex: 'man',
      height: 178,
      mainPosition: 'レイダー',
    },
    {
      id: 14,
      name: '沼田 健宏',
      sex: 'man',
      height: 167,
      mainPosition: 'ディフェンダー',
    },
    {
      id: 15,
      name: '吉田 元貴',
      sex: 'man',
      height: 165,
      mainPosition: 'ディフェンダー',
    },
  ]
  const matchData: Prisma.MatchCreateArgs['data'][] = [
    {
      id: 1,
      sex: 'man',
      championshipId: 3,
      oakId: 4,
      willowId: 5,
      oakScore: 0,
      willowScore: 0,
    },
  ]
  const entryData: Prisma.EntryCreateArgs['data'][] = [
    { id: 1, matchId: 1, uniformNumber: 4, playerId: 1, teamId: 4 },
    { id: 2, matchId: 1, uniformNumber: 11, playerId: 2, teamId: 4 },
    { id: 3, matchId: 1, uniformNumber: 5, playerId: 3, teamId: 4 },
    { id: 4, matchId: 1, uniformNumber: 8, playerId: 4, teamId: 4 },
    { id: 5, matchId: 1, uniformNumber: 10, playerId: 5, teamId: 4 },
    { id: 6, matchId: 1, uniformNumber: 2, playerId: 6, teamId: 4 },
    { id: 7, matchId: 1, uniformNumber: 16, playerId: 7, teamId: 4 },
    { id: 8, matchId: 1, uniformNumber: 1, playerId: 8, teamId: 5 },
    { id: 9, matchId: 1, uniformNumber: 2, playerId: 9, teamId: 5 },
    { id: 10, matchId: 1, uniformNumber: 3, playerId: 10, teamId: 5 },
    { id: 11, matchId: 1, uniformNumber: 7, playerId: 11, teamId: 5 },
    { id: 12, matchId: 1, uniformNumber: 8, playerId: 12, teamId: 5 },
    { id: 13, matchId: 1, uniformNumber: 10, playerId: 13, teamId: 5 },
    { id: 14, matchId: 1, uniformNumber: 11, playerId: 14, teamId: 5 },
    { id: 15, matchId: 1, uniformNumber: 13, playerId: 15, teamId: 5 },
  ]
  try {
    await Promise.all([
      championshipData.map(
        async (data: Prisma.ChampionshipCreateArgs['data']) => {
          const record = await db.championship.createMany({ data })
          console.log(record)
        }
      ),
      teamData.map(async (data: Prisma.TeamCreateArgs['data']) => {
        const record = await db.team.createMany({ data })
        console.log(record)
      }),
      trickData.map(async (data: Prisma.TrickCreateArgs['data']) => {
        const record = await db.trick.createMany({ data })
        console.log(record)
      }),
      playerData.map(async (data: Prisma.PlayerCreateArgs['data']) => {
        const record = await db.player.createMany({ data })
        console.log(record)
      }),
    ])

    await new Promise((res) => setTimeout(res, 3000))

    await Promise.all([
      matchData.map(async (data: Prisma.MatchCreateArgs['data']) => {
        const record = await db.match.create({ data })
        console.log(record)
      }),
    ])

    await new Promise((res) => setTimeout(res, 3000))

    await Promise.all([
      entryData.map(async (data: Prisma.EntryCreateArgs['data']) => {
        const record = await db.entry.create({ data })
        console.log(record)
      }),
    ])
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
