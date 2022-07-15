import { Button } from '@cube-dev/ui-kit'
import React from 'react'
import { DiscordIcon } from '../icons/DiscordIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { TwitterIcon } from '../icons/TwitterIcon'

export function NavLinks() {
  return (
    <>
      <Button
        type="clear"
        to="#github"
        aria-label="Go to github"
        size={'small'}
      >
        <GithubIcon />
      </Button>
      <Button
        type="clear"
        to="#discord"
        aria-label="Go to discord"
        size={'small'}
      >
        <DiscordIcon />
      </Button>
      <Button
        type="clear"
        to="#twitter"
        aria-label="Go to twitter"
        size={'small'}
      >
        <TwitterIcon />
      </Button>
    </>
  )
}
