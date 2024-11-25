import { Environment } from './features/environment/environment'
import { Pou } from './features/pou/pou'
import { Game } from './game'
import './style.css'

const handleGameTick = ({
  environment: updatedEnvironment,
  pou: updatedPou,
}: {
  environment: Environment
  pou: Pou
}) => {
  // Cada vez que el juego se actualiza, se ejecuta esta función que recibe los datos actualizados
  // Úsalos para pintar o actualizar la interfaz del juego
  /**
   * Pinta la vida y el hambre del Pou
   * Pinta las cacas del Pou
   * Pinta las comidas disponibles
   * Pinta un botón para restaurar la salud del Pou
   * Cuando hagas click en una caca, las limpias
   * Cuando hagas click en una comida, la comes
   * Si la vida del Pou es `0`, se termina el juego (`game.over()`)
   */
  console.log('Game updated:', { updatedEnvironment, updatedPou })
}
const game = Game({ onTick: handleGameTick })
game.init()
