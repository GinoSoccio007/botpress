/* bplint-disable */
import { IntegrationDefinition } from '@botpress/sdk'
import { sentry as sentryHelpers } from '@botpress/sdk-addons'
import listable from './bp_modules/listable'
import { actions, channels, events, configuration, configurations, user, states, entities } from './definitions'

export default new IntegrationDefinition({
  name: 'linear',
  version: '1.0.3',
  title: 'Linear',
  description:
    'Manage your projects autonomously. Have your bot participate in discussions, manage issues and teams, and track progress.',
  icon: 'icon.svg',
  readme: 'hub.md',
  configuration,
  configurations,
  channels,
  identifier: {
    extractScript: 'extract.vrl',
  },
  user,
  actions,
  events,
  states,
  entities,
  secrets: {
    CLIENT_ID: {
      description: 'The client ID of your Linear OAuth app.',
    },
    CLIENT_SECRET: {
      description: 'The client secret of your Linear OAuth app.',
    },
    WEBHOOK_SIGNING_SECRET: {
      description: 'The signing secret of your Linear webhook.',
    },
    ...sentryHelpers.COMMON_SECRET_NAMES,
  },
}).extend(listable, (entities) => ({
  item: entities.issue,
}))
