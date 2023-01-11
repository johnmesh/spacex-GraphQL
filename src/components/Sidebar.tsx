import { CaretIcon } from 'components/shared/CaretIcon'
import { LaunchpadIcon } from 'components/shared/LaunchpadIcon'
import { LoibonIcon } from 'components/shared/LoibonIcon'
import { MissionsIcon } from 'components/shared/MissionsIcon'
import { SidebarLink } from 'components/shared/SidebarLink'
import { TokenIcon } from 'components/shared/TokenIcon'
import { TreasuryIcon } from 'components/shared/TreasuryIcon'

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-lavender fixed h-full pb-8 z-40 pr-14">
      <ul className="pt-4 mx-8 pl-6">
        <li>
          <SidebarLink
            Icon={TreasuryIcon}
            text="Dashboard"
            href="/dashboard"
            className="py-4"
          />
        </li>
        <li>
          <SidebarLink
            Icon={MissionsIcon}
            text="Missions"
            href="/missions"
            className="py-4"
          />
        </li>
        <li>
          <SidebarLink
            Icon={LaunchpadIcon}
            text="Launchpad"
            href="/launchpad"
            className="py-4"
          />
        </li>
        <li>
          <SidebarLink
            Icon={LoibonIcon}
            text="Loibons"
            href="/loibons"
            className="py-4"
          />
        </li>

        <li>
          <SidebarLink
            Icon={TokenIcon}
            text="Stake Loi"
            href="#"
            className="py-4 items-center"
            isDisabled
          />
        </li>
      </ul>
      <div className="flex flex-col font-semibold text-lg mt-auto mb-14 ml-6">
        <SidebarLink
          Icon={CaretIcon}
          text="Resources"
          href="#"
          className="py-2"
        />
        <SidebarLink
          Icon={CaretIcon}
          text="Socials"
          href="#"
          className="py-4"
        />
      </div>
    </div>
  )
}
