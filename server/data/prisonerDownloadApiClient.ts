import logger from '../../logger'
import config from '../config'
import RestClient from './restClient'

export interface Download {
  name: string
  size: number
  lastModified: string
}

export default class PrisonerDownloadApiClient {
  constructor() {}

  private static restClient(token: string): RestClient {
    return new RestClient('Prisoner Download Api Client', config.apis.prisonerDownloadApi, token)
  }

  todaysFile(token: string): Promise<Download> {
    logger.info("Getting today's file: calling HMPPS Prisoner Download Api")
    return PrisonerDownloadApiClient.restClient(token).get<Download>({ path: '/today' })
  }
}