import { Button } from '@cube-dev/ui-kit'

export default function ToggleSidebar({ open, setOpen }) {
  return (
    <Button
      padding="0.5rem"
      type="clear"
      aria-label="toggle sidebar"
      onPress={() => setOpen((o) => !o)}
      display={['none', , 'initial']}
    >
      {open ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 5.5L5.5 14.5"
            stroke="#2B2962"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 14.5L5.5 5.5"
            stroke="#2B2962"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.125 6.25H16.875"
            stroke="#2B2962"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M3.125 10H16.875"
            stroke="#2B2962"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M3.125 13.75H16.875"
            stroke="#2B2962"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      )}
    </Button>
  )
}
