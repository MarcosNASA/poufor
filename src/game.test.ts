import { it, expect } from 'vitest'
import { Game } from './game'

const tick = () => new Promise((resolve) => setTimeout(resolve, 2000))

it('plays', async () => {
  const game = Game({ onTick: () => {} })
  expect(game.pou.getHealth()).toBe(100)
  game.init()
  expect(game.pou.getHealth()).toBe(95)
})

it('generates food', async () => {
  const game = Game({ onTick: () => {} })
  const { environment } = game
  expect(environment.getFoods().length).toBe(0)
  game.init()
  expect(environment.getFoods().length).toBe(1)
})

it('eats food and poops', async () => {
  const game = Game({ onTick: () => {} })
  game.init()

  const { environment, pou } = game

  expect(pou.getHunger()).toBe(10)
  expect(pou.getPoops().length).toBe(1)

  const [food] = environment.getFoods()

  expect(pou.eat(food))
  expect(pou.getHunger()).toBe(0)
  await tick()
  expect(pou.getPoops().length).toBe(2)
})
