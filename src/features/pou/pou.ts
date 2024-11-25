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
    },
    cleanPoops: () => {
      /** Vacía el array de poops */
    },
    eat: (food: Food) => {
      /** Reduce el hambre del Pou en la cantidad de comida consumida; no puede ser menor que 0 */
    },
    decreaseHealth: (amount: number) => {
      /** Reduce la salud del Pou en la cantidad dada; no puede ser menor que 0 */
    },
    increaseHunger: (amount: number) => {
      /** Aumenta el hambre del Pou en la cantidad dada: no puede ser mayor que 100 */
    },
  } as const satisfies Pou
}
