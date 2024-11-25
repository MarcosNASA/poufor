import { Poop, Pou } from '../pou/pou'

export type Food = {
  name: string
  price: number
  recovery: number
}
export type Environment = {
  tick: () => void
  getFoods: () => Food[]
  getPoops: () => Poop[]
}

const foods: Food[] = [
  {
    name: 'apple',
    price: 10,
    recovery: 10,
  },
  {
    name: 'banana',
    price: 20,
    recovery: 20,
  },
  {
    name: 'orange',
    price: 30,
    recovery: 30,
  },
]

export const Environment = ({ pou }: { pou: Pou }) => {
  const availableFood: Food[] = []

  const updateEnvironment = () => {
    const spawnFood = () => {
      /** Elige una comida aleatoria de `foods` */
      const randomFood = foods[Math.floor(Math.random() * foods.length)]
      /** Añade la comida a `availableFood` */
      availableFood.push({ ...randomFood })
    }
    spawnFood()
  }

  return {
    tick: () => {
      /* Si el hambre está a 0, el Pou hace caca */
      if (pou.getHunger() === 0) {
        pou.poo()
      }

      /* Disminuye la salud del Pou en 5 */
      pou.decreaseHealth(5)
      /* Aumenta el hambre del Pou en 10 */
      pou.increaseHunger(10)

      updateEnvironment()
    },
    clean: () => {
      /** Limpia las cacas del Pou */
      pou.cleanPoops()
    },
    getFoods: () => availableFood,
    getPoops: pou.getPoops,
  }
}
