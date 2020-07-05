export const TRIGGER_ON = ['click', 'focus', 'hover', 'manual'] as const

export type TriggerOn = typeof TRIGGER_ON[number]
