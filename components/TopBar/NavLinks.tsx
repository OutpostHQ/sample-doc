import { Button, Flex, Space } from '@cube-dev/ui-kit'
import React from 'react'
import { DiscordIcon } from '../icons/DiscordIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { TwitterIcon } from '../icons/TwitterIcon'

export function NavLinks() {
  return (
    <>
      <Space gap="0">
        <Button type="clear" aria-label="Change theme">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.3125 18.2496C6.90898 18.2496 4.60389 17.2948 2.90434 15.5953C1.2048 13.8957 0.25 11.5906 0.25 9.18711C0.25 5.51523 2.35938 2.22305 5.62539 0.801562C5.7405 0.751396 5.86804 0.737063 5.99141 0.760431C6.11478 0.783799 6.22825 0.843784 6.31704 0.93257C6.40583 1.02136 6.46581 1.13483 6.48918 1.2582C6.51255 1.38157 6.49821 1.50911 6.44805 1.62422C6.07305 2.48516 5.875 3.58789 5.875 4.81211C5.875 9.11992 9.37969 12.6246 13.6875 12.6246C14.9117 12.6246 16.0145 12.4266 16.8754 12.0516C16.9905 12.0014 17.118 11.9871 17.2414 12.0104C17.3648 12.0338 17.4783 12.0938 17.567 12.1826C17.6558 12.2714 17.7158 12.3848 17.7392 12.5082C17.7625 12.6316 17.7482 12.7591 17.698 12.8742C16.2766 16.1402 12.9844 18.2496 9.3125 18.2496Z"
              fill="#2B2962"
            />
          </svg>
        </Button>
        <Button type="clear" to="#github" aria-label="Go to github">
          <GithubIcon />
        </Button>
        <Button type="clear" to="#discord" aria-label="Go to discord">
          <DiscordIcon />
        </Button>
        <Button type="clear" to="#twitter" aria-label="Go to twitter">
          <TwitterIcon />
        </Button>
      </Space>
    </>
  )
}
