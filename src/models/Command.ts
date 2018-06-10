export interface ICommandContext {
  /**
   * List of current registered commands
   * @type {ICommand[]}
   * @memberof ICommandContext
   */
  commands: ICommand[]

  /**
   * Arguments passed to the program, like on bash (E.g. for the command `cat
   * filename.ts`, ['filename.ts'] would be the arguments passed to the
   * handler)
   * @type {string[]}
   * @memberof ICommandContext
   */
  args: string[]
}

export interface ICommand {
  /**
   * Command name, will be used by the user to invoke the command on the
   * terminal
   */
  name: string

  /**
   * Command handler
   * @argument context ICommandContext
   * @returns command results to be printed on stdout
   */
  handler: (ctx: ICommandContext) => string

  /**
   * Text to be shown when using help
   * $ help [command]
   * @type {string}
   * @memberof ICommand
   */
  help: string
}
