import { ICommand } from "../models/Command"

export const help: ICommand = {
  name: "help",
  help: "",
  handler: ({ commands, args }) => {
    if (args.length) {
      const cmd = commands.find(c => c.name === args[0])

      if (!cmd) {
        return "Command not found"
      }

      return cmd.help
    }
    return `
  You can use the following commands:
    ${commands
      .map(c => c.name)
      .sort()
      .reduce((prev, name) => `${prev} ${name}`)}

  To get help with a specific command:
    $ help [command]
  `
  }
}
