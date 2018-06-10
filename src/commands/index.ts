import { ICommand } from "../models/Command"

import { cowsay } from "./cowsay"
import { help } from "./help"

export const commands: ICommand[] = [cowsay, help]
