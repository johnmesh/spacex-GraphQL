import React from 'react'
import { ListItem } from './ListItem'
import { CardBody } from './CardBody'
import { CardHeader } from './CardHeader'

type LinksProps = {
  article_link: string
  mission_patch: string
  reddit_campaign: string
  reddit_launch: string
  reddit_media: string
  reddit_recovery: string
  video_link: string
  wikipedia: string
}
export const LaunchLinks = ({
  article_link = '',
  mission_patch = '',
  reddit_campaign = '',
  reddit_launch = '',
  reddit_media = '',
  video_link = '',
  wikipedia = '',
}: LinksProps) => {
  return (
    <div className="w-2/4 h-60">
      <CardHeader title="Links" />
      <CardBody>
        <ListItem label="ArticleLink" id="articleLink" link={article_link} />
        <ListItem label="MissionPatch" id="missionPatch" link={mission_patch} />
        <ListItem
          label="RedditCampaign"
          id="redditCampaign"
          link={reddit_campaign}
        />
        <ListItem label="RedditLaunch" id="redditLaunch" link={reddit_launch} />
        <ListItem label="RedditMedia" id="redditMedia" link={reddit_media} />
        <ListItem label="VideoLink" id="videoLink" link={video_link} />
        <ListItem label="Wikipedia" id="Wikipedia" link={wikipedia} />
      </CardBody>
    </div>
  )
}
