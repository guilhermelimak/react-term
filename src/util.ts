export const shouldSubmit = (evt: any) =>
  evt.key.toUpperCase() === "ENTER" || (evt.key === "o" && evt.ctrlKey)

export const tail = (arr: any[]) => arr.filter((_, idx) => idx !== 0)

export const isFunction = (obj: any) =>
  !!(obj && obj.constructor && obj.call && obj.apply) && typeof obj === "function"

export const panic = () => {
  throw new Error("Element not found, something went horribly wrong")
}

export const scrollStdoutToBottom = () => {
  const stdout = document.getElementsByClassName("terminal__stdout")[0]

  if (!stdout) {
    panic()
  }

  stdout.scrollTop = stdout.scrollHeight
}

export const focusInput = () => {
  const input = document.getElementsByClassName("terminal__input")[0]

  if (!input) {
    panic()
  }

  ;(input as HTMLInputElement).focus()
}
