/** 示例：纯函数工具，与 React / 路由无关，便于单测。 */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1)}…`
}
