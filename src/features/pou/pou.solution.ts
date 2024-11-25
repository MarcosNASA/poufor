import { Food } from '../environment/environment'

type PoopSize = 'small' | 'medium' | 'large'
export type Poop = {
  size: PoopSize
}
export type Pou = {
  name: string
  getLevel: () => number
  getHealth: () => number
  getHunger: () => number
  getPoops: () => Poop[]
  eat: (food: Food) => void
  poo: () => void
  cleanPoops: () => void
  decreaseHealth: (amount: number) => void
  increaseHunger: (amount: number) => void
}

export const Pou = ({
  name,
  options: { level, health, hunger },
}: {
  name: string
  options: {
    level: number
    health: number
    hunger: number
  }
}) => {
  let poops: Poop[] = []
  return {
    name,
    getLevel: () => level,
    getHealth: () => health,
    getHunger: () => hunger,
    getPoops: () => poops,
    poo: () => {
      /** Añade una caca pequeña al array de poops */
      poops.push({ size: 'small' })
    },
    cleanPoops: () => {
      /** Vacía el array de poops */
      poops = []
    },
    eat: (food: Food) => {
      /** Reduce el hambre del Pou en la cantidad de comida consumida */
      hunger = Math.max(hunger - food.recovery, 0)
    },
    decreaseHealth: (amount: number) => {
      /** Reduce la salud del Pou en la cantidad dada */
      health = Math.max(health - amount, 0)
    },
    increaseHunger: (amount: number) => {
      /** Aumenta el hambre del Pou en la cantidad dada */
      hunger = Math.min(hunger + amount, 100)
    },
  } as const satisfies Pou
}
