import { ReturnTypeWithoutPromise } from '@/types/return-type-whitout-promise'
import { getUserTodos } from './actions'

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0]
