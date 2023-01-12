import { render, screen, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import NextLaunch from './NextLaunchView'
import { DataProvider } from 'hooks/useDataProvider'
import { NextLaunchDateDocument } from 'hooks/useDataProvider'
import { nextLaunchRes } from '../mock-data/nextRocketLaunch'

const mocks = [
  {
    request: {
      query: NextLaunchDateDocument,
    },
    result: {
      data: {
        launchNext: { ...nextLaunchRes },
      },
    },
  },
]

describe('NextLaunchView', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <DataProvider>
            <NextLaunch />
          </DataProvider>
        </MockedProvider>
      )
    })
  })
  it('should display the general details', async () => {
    expect(screen.getByText(/MissionName/i)).toBeInTheDocument()
    const missionNameEl = await screen.findByTestId('missionName')
    expect(missionNameEl.textContent).toEqual(nextLaunchRes.mission_name)

    expect(screen.getByText(/LaunchDate/i)).toBeInTheDocument()
    const dateEl = await screen.findByTestId('launchDate')
    expect(dateEl.textContent).toEqual(nextLaunchRes.launch_date_local)

    expect(screen.getByText(/LaunchYear/i)).toBeInTheDocument()
    const launchYearEl = await screen.findByTestId('launchYear')
    expect(launchYearEl.textContent).toEqual(nextLaunchRes.launch_year)

    expect(screen.getByText(/StaticFireDate/i)).toBeInTheDocument()
    const staticeDateEl = await screen.findByTestId('staticFireDate')
    expect(staticeDateEl.textContent).toEqual('--')

    expect(screen.getByText(/TentativeMaxPrecision/i)).toBeInTheDocument()
    const tentativeMaxPrecisionEl = await screen.findByTestId(
      'tentativeMaxPrecision'
    )
    expect(tentativeMaxPrecisionEl.textContent).toEqual(
      nextLaunchRes.tentative_max_precision
    )

    expect(screen.getByText(/LaunchSuccess/i)).toBeInTheDocument()
    const launchSuccessEl = await screen.findByTestId('launchSuccess')
    expect(launchSuccessEl.textContent).toEqual('--')

    expect(screen.getByText(/Details:/i)).toBeInTheDocument()
    const details = await screen.findByTestId('details')
    expect(details.textContent).toEqual(nextLaunchRes.details)
  })

  it('should display the rocket details', async () => {
    const rocket = nextLaunchRes.rocket.rocket

    expect(screen.getByText(/RocketName/i)).toBeInTheDocument()
    const nameEl = await screen.findByTestId('name')
    expect(nameEl.textContent).toEqual(rocket.name)

    expect(screen.getByText(/RocketType/i)).toBeInTheDocument()
    const typeEl = await screen.findByTestId('type')
    expect(typeEl.textContent).toEqual(rocket.type)

    expect(screen.getByText(/Country/i)).toBeInTheDocument()
    const countryEl = await screen.findByTestId('country')
    expect(countryEl.textContent).toEqual(rocket.country)

    expect(screen.getByText(/Company/i)).toBeInTheDocument()
    const companyEl = await screen.findByTestId('company')
    expect(companyEl.textContent).toEqual(rocket.company)

    expect(screen.getByText(/CostPerLaunch/i)).toBeInTheDocument()
    const costPerLaunchEl = await screen.findByTestId('costPerLaunch')
    expect(costPerLaunchEl.textContent).toEqual(`${rocket.cost_per_launch}`)

    expect(screen.getByText(/active/i)).toBeInTheDocument()
    const active = await screen.findByTestId('active')
    expect(active.textContent).toEqual(`${rocket.active}`)

    expect(screen.getByText(/stages/i)).toBeInTheDocument()
    const stages = await screen.findByTestId('stages')
    expect(stages.textContent).toEqual(`${rocket.stages}`)

    expect(screen.getByText(/boosters/i)).toBeInTheDocument()
    const boosters = await screen.findByTestId('boosters')
    expect(boosters.textContent).toEqual('--')

    expect(screen.getByText(/Description/)).toBeInTheDocument()
    const description = await screen.findByTestId('description')
    expect(description.textContent).toEqual(rocket.description)
  })

  it('Should display launch site details', async () => {
    const siteDetails = nextLaunchRes.launch_site

    expect(screen.getByText(/SiteID/i)).toBeInTheDocument()
    const siteIdEl = await screen.findByTestId('SiteID')
    expect(siteIdEl.textContent).toEqual(siteDetails.site_id)

    expect(screen.getByText(/SiteName$/i)).toBeInTheDocument()
    const siteNameEl = await screen.findByTestId('SiteName')
    expect(siteNameEl.textContent).toEqual(siteDetails.site_name)

    expect(screen.getByText(/SiteNameLong/i)).toBeInTheDocument()
    const siteNameLongEl = await screen.findByTestId('siteNameLong')
    expect(siteNameLongEl.textContent).toEqual(siteDetails.site_name_long)
  })

  it('should display the links', async () => {
    const links = nextLaunchRes.links

    expect(screen.getByText(/ArticleLink/i)).toBeInTheDocument()
    const articleLinkEl = await screen.findByTestId('articleLink')
    expect(articleLinkEl.getAttribute('href')).toEqual(links.article_link)

    expect(screen.getByText(/MissionPatch/i)).toBeInTheDocument()
    const missionPatchEl = await screen.findByTestId('missionPatch')
    expect(missionPatchEl.getAttribute('href')).toEqual(links.mission_patch)

    expect(screen.getByText(/RedditCampaign/i)).toBeInTheDocument()
    const redditCampaign = await screen.findByTestId('redditCampaign')
    expect(redditCampaign.getAttribute('href')).toEqual(links.reddit_campaign)

    expect(screen.getByText(/RedditLaunch/i)).toBeInTheDocument()
    const redditLaunch = await screen.findByTestId('redditLaunch')
    expect(redditLaunch.getAttribute('href')).toEqual(links.reddit_launch)

    expect(screen.getByText(/RedditMedia/i)).toBeInTheDocument()
    const redditMedia = await screen.findByTestId('redditMedia')
    expect(redditMedia.getAttribute('href')).toEqual(links.reddit_media)

    expect(screen.getByText(/VideoLink/i)).toBeInTheDocument()
    const mediaLink = await screen.findByTestId('videoLink')
    expect(mediaLink.getAttribute('href')).toEqual(links.video_link)

    expect(screen.getByText(/Wikipedia/i)).toBeInTheDocument()
    const wikipediaEl = await screen.findByTestId('Wikipedia')
    expect(wikipediaEl.getAttribute('href')).toEqual(links.wikipedia)
  })
})
