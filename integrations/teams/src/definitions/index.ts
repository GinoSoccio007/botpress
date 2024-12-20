import { z, IntegrationDefinitionProps, messages } from '@botpress/sdk'

export { states } from './states'

export const configuration = {
  schema: z.object({
    appId: z.string().min(1),
    appPassword: z.string().min(1),
    tenantId: z.string().optional(),
  }),
} satisfies IntegrationDefinitionProps['configuration']

export const channels = {
  channel: {
    messages: { ...messages.defaults, markdown: messages.markdown },
    message: {
      tags: {
        id: {},
      },
    },
    conversation: {
      tags: {
        id: {},
      },
    },
  },
} satisfies IntegrationDefinitionProps['channels']

export const user = {
  tags: {
    id: {},
  },
} satisfies IntegrationDefinitionProps['user']
