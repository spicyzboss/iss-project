export default function response<T>(code: number, message: string, data?: T) {
  return {
    code,
    message,
    data,
  }
}
