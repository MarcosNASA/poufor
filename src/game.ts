import { Environment } from './features/environment/environment'
import { Pou } from './features/pou/pou'

type IntervalId = number | null
export const Game = ({
  onTick,
}: {
  onTick: ({ environment, pou }: { environment: Environment; pou: Pou }) => void
}) => {
  const pou = Pou({
    name: 'Afor',
    options: { level: 1, health: 100, hunger: 0 },
  })
  const environment = Environment({
    pou,
  })

  let intervalId: IntervalId = null
  return {
    init: () => {
      environment.tick()
      intervalId = setInterval(() => {
        environment.tick()
      }, 2000)
      onTick({ environment, pou })
    },
    over: () => {
      if (intervalId) clearInterval(intervalId)
    },
    pou,
    environment,
  }
}
