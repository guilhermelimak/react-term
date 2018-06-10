import { ICommand } from "../../models/Command"
import { isFunction, tail } from "../../util"

export const runCommand = (input: string[], commands: ICommand[]) => {
  const trimmedInput = input.map(i => i.trim()).filter(i => !!i)
  const cmd = commands.find(c => c.name === trimmedInput[0])

  if (!cmd || !cmd.handler) {
    return `Command "${trimmedInput.join(" ")}" not recognized`
  }

  if (!isFunction(cmd.handler)) {
    return `Handler for command "${trimmedInput.join(" ")} is not a function`
  }

  return cmd.handler({ commands, args: tail(trimmedInput) })
}
