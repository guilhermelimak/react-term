import { ICommand } from "../models/Command"

const centerPad = (str: string, size: number) => {
  const padding = +((size - str.length) / 2).toFixed(0) - 1

  if (padding < 1) {
    return str
  }

  return `${Array(padding).join(" ")}${str}${Array(padding).join(" ")}`
}

export const createSentenceBalloon = (sentence: string[]) => {
  const joinedSentence = sentence.join(" ")

  const minWidth = 30
  let width: number = minWidth

  if (joinedSentence.length > minWidth) {
    width = joinedSentence.length
  }

  return `
  ${Array(width).join("-")}
  |${centerPad(joinedSentence, width)}|
  ${Array(width).join("-")}`
}

export const cowsay: ICommand = {
  name: "cowsay",
  help: `type it and the cow will say it`,
  handler: ({ args }) => `
${createSentenceBalloon(args)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`
}
